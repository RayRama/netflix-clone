import { AxiosClient } from "@helper/api/axios";
import { Movie } from "@models/abstract/Movie";
import { Loader } from "@models/inheritance/Loader";
import ListMedia from "@molecules/ListMedia";
import PremiereMedia from "@molecules/PremiereMedia";
import { AuthAtom, NetflixUserAtom } from "@store/";
import { useAtom } from "jotai";
import React from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  const [premiere, setPremiere] = React.useState<Movie>();
  const [lists, setLists] = React.useState([]);
  const [dataUser, setDataUser] = useAtom(NetflixUserAtom);
  const [refreshing, setRefreshing] = React.useState(false);
  const [auth] = useAtom(AuthAtom);

  const axiosClient = new AxiosClient();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    async function loadData() {
      const randomPremiere = new Movie();
      await randomPremiere.getRandom(auth.token).then((res) => {
        const premiere = Loader.loadRandomMovie(res.data[0]);
        setPremiere(premiere);
      });
    }
    async function loadLists() {
      // await axios
      //   .get("api/lists", {
      //     headers: {
      //       token: `Bearer ${auth.token}`,
      //     },
      //     withCredentials: true,
      //   })
      //   .then((res) => {
      //     setLists(res.data);
      //   });

      axiosClient.setTokenHeader(auth.token);
      await axiosClient
        .getInstace()
        .get("api/lists")
        .then((res) => {
          setLists(res.data);
        });
    }

    loadLists();
    loadData();
    setRefreshing(false);
  }, []);

  React.useEffect(() => {
    async function loadData() {
      axiosClient.setTokenHeader(auth.token);
      const randomPremiere = new Movie();
      await randomPremiere.getRandom(auth.token).then((res) => {
        const premiere = Loader.loadRandomMovie(res.data[0]);
        setPremiere(premiere);
      });
    }
    loadData();
  }, []);

  React.useEffect(() => {
    async function loadLists() {
      // await axios
      //   .get("api/lists", {
      //     headers: {
      //       token: `Bearer ${auth.token}`,
      //     },
      //     withCredentials: true,
      //   })
      //   .then((res) => {
      //     setLists(res.data);
      //   });

      axiosClient.setTokenHeader(auth.token);
      await axiosClient
        .getInstace()
        .get("api/lists")
        .then((res) => {
          setLists(res.data);
        });
    }
    loadLists();
  }, []);

  const mediaHandle = (media) => {
    navigation.navigate("DetailMedia", { media });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        flexGrow: 1,
        backgroundColor: "#000",
      }}
      contentContainerStyle={{
        paddingBottom: 90,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#222"]}
        />
      }
    >
      <PremiereMedia
        image={premiere?.poster}
        genre={premiere?.genre}
        infoPress={() => mediaHandle(premiere)}
        playPress={() => premiere.play(dataUser)}
      />

      {lists.map((list, index) => {
        return <ListMedia key={index} data={list} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  category: {
    width: "100%",
    paddingHorizontal: 10,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});
