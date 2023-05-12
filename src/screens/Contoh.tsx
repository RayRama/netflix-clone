import { MovieList2 } from "@data/MovieList2";
import { TVShowList } from "@data/TVShowList";
import { Movie } from "@models/abstract/Movie";
import { BasicSubscription } from "@models/abstract/Subscription";
import { TVShow } from "@models/abstract/TVShow";
import { Loader } from "@models/inheritance/Loader";
import { NetflixUser } from "@models/inheritance/NetflixUser";
import VideoCard from "@molecules/VideoCard";
import { NetflixUserAtom } from "@store/";
import { useAtom } from "jotai";
import React from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";

export default function Contoh({ navigation }) {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [tvShows, setTvShows] = React.useState<TVShow[]>([]);
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
    user.logout();
    setDataUser({
      ...dataUser,
      loggedIn: false,
    });
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  React.useEffect(() => {
    function loadData() {
      const movies = Loader.loadMovies(MovieList2);
      const tvShows = Loader.loadTVShows(TVShowList);
      setMovies(movies);
      setTvShows(tvShows);
    }

    loadData();
  }, []);

  return (
    <ScrollView>
      <Button title="Check UserData" onPress={() => userDataHandle()}></Button>
      <Button title="Upgrade" onPress={() => subHandle()}></Button>
      <Button title="Unsub" onPress={() => unsubHandle()}></Button>
      <Button title="Logout" onPress={() => logoutHandle()}></Button>
      <Text>My Movies:</Text>
      {movies.map((movie: Movie) => (
        // <View key={movie.title}>
        //   <Image
        //     source={{ uri: movie.poster }}
        //     style={{
        //       width: 100,
        //       height: 100,
        //       resizeMode: "cover",
        //       borderRadius: 10,
        //     }}
        //   />
        //   <Text>{movie.getTitle()}</Text>
        // </View>
        <VideoCard
          key={movie.title}
          image={movie.poster}
          title={movie.title}
          genre={movie.genre}
          rating={movie.rating}
        />
      ))}

      <Text>My TV Shows:</Text>
      {tvShows.map((tvShow: TVShow) => (
        <View key={tvShow.title}>
          <Image
            source={{ uri: tvShow.poster }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 10,
            }}
          />
          <Text key={tvShow.title}>{tvShow.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
