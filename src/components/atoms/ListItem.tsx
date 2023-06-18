import { AxiosClient } from "@helper/api/axios";
import { Loader } from "@models/inheritance/Loader";
import VideoCard from "@molecules/VideoCard";
import { useNavigation } from "@react-navigation/native";
import { AuthAtom } from "@store/index";
import { useAtom } from "jotai";
import React from "react";

export default function ListItem({ data, type }) {
  const [listContent, setListContent] = React.useState([]);
  const [auth] = useAtom(AuthAtom);
  const navigation = useNavigation();

  const axiosClient = new AxiosClient();

  const mediaHandle = (media) => {
    const mediaDetail =
      type == "movie" ? Loader.loadMovie(media) : Loader.loadTVShow(media);
    navigation.navigate("DetailMedia", { media: mediaDetail });
  };

  React.useEffect(() => {
    async function loadListContent() {
      // await axios
      //   .get(`api/${type == "movie" ? "movies" : "tvshows"}/find/${data}`, {
      //     headers: {
      //       token: "Bearer " + auth.token,
      //     },
      //     withCredentials: true,
      //   })
      //   .then((res) => {
      //     // const content = Loader.loadMovies(res.data);
      //     // setListContent(content);
      //     setListContent(res.data);
      //   });

      axiosClient.setTokenHeader(auth.token);
      await axiosClient
        .getInstace()
        .get(`api/${type == "movie" ? "movies" : "tvshows"}/find/${data}`)
        .then((res) => {
          setListContent(res.data);
        });
    }
    loadListContent();
  }, []);
  return (
    <VideoCard
      image={listContent.poster}
      title={listContent.title}
      onPress={() => mediaHandle(listContent)}
    />
  );
}
