import {
  Choice,
  MovieList2,
  Popular,
  Premiere,
  Trending,
} from "@data/MovieList2";
import { TVShowList } from "@data/TVShowList";
import { Movie } from "@models/abstract/Movie";
import { BasicSubscription } from "@models/abstract/Subscription";
import { TVShow } from "@models/abstract/TVShow";
import { Loader } from "@models/inheritance/Loader";
import { NetflixUser } from "@models/inheritance/NetflixUser";
import PremiereMedia from "@molecules/PremiereMedia";
import VideoCard from "@molecules/VideoCard";
import { CommonActions } from "@react-navigation/native";
import { NetflixUserAtom } from "@store/";
import { useAtom } from "jotai";
import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Contoh({ navigation }) {
  const [tvShows, setTvShows] = React.useState<TVShow[]>([]);
  const [premiere, setPremiere] = React.useState<Movie[]>([]);
  const [trending, setTrending] = React.useState<Movie[]>([]);
  const [popular, setPopular] = React.useState<Movie[]>([]);
  const [choice, setChoice] = React.useState<Movie[]>([]);
  const basicPlan = new BasicSubscription();
  const [dataUser, setDataUser] = useAtom(NetflixUserAtom);
  const user = new NetflixUser(
    dataUser.username,
    dataUser.email,
    dataUser.password
  );

  function subHandle() {
    if (dataUser.subscription === null) {
      user.subscribe(basicPlan);
      setDataUser({
        ...dataUser,
        subscription: user.getSubscription(),
      });
    } else {
      alert("You already have a subscription.");
    }
  }

  const userDataHandle = () => {
    console.log(dataUser);
  };

  const unsubHandle = () => {
    if (dataUser.subscription !== null) {
      user.unsubscribe();
      setDataUser({
        ...dataUser,
        subscription: null,
      });
    } else {
      alert("You don't have a subscription.");
    }
  };

  const logoutHandle = () => {
    setDataUser({
      ...dataUser,
      loggedIn: false,
    });
    user.logout();
  };

  const tempMediaHandle = (media) => {
    navigation.navigate("DetailMedia", { media });
  };

  React.useEffect(() => {
    function loadData() {
      const tvShows = Loader.loadTVShows(TVShowList);
      const premiere = Loader.loadMovies(Premiere);
      const trending = Loader.loadMovies(Trending);
      const popular = Loader.loadMovies(Popular);
      const choice = Loader.loadMovies(Choice);
      setTvShows(tvShows);
      setPremiere(premiere);
      setTrending(trending);
      setPopular(popular);
      setChoice(choice);
    }
    loadData();
  }, []);

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
    >
      {/* <Button title="Check UserData" onPress={() => userDataHandle()}></Button> */}
      {/* <Button title="Upgrade" onPress={() => subHandle()}></Button> */}
      {/* <Button title="Unsub" onPress={() => unsubHandle()}></Button> */}
      {/* <Button title="Logout" onPress={() => logoutHandle()}></Button> */}

      <PremiereMedia
        key={premiere[0]?.title}
        image={premiere[0]?.poster}
        genre={premiere[0]?.genre}
        infoPress={() => tempMediaHandle(premiere[0])}
        playPress={() => premiere[0].play(dataUser)}
      />

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Populer di Netflix</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {popular.map((movie: Movie, index) => (
            <VideoCard
              key={index}
              image={movie.poster}
              onPress={() => tempMediaHandle(movie)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Sedang Tren Sekarang</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {trending.map((movie: Movie, index) => (
            <VideoCard
              key={index}
              image={movie.poster}
              onPress={() => tempMediaHandle(movie)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>TV Show</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {tvShows.map((tvShow: TVShow, index) => (
            <VideoCard
              key={index}
              image={tvShow.poster}
              onPress={() => tempMediaHandle(tvShow)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Pilihan Netflix</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {choice.map((movie: Movie, index) => (
            <VideoCard
              key={index}
              image={movie.poster}
              onPress={() => tempMediaHandle(movie)}
            />
          ))}
        </ScrollView>
      </View>
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
