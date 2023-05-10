import { Movie } from "@models/abstract/Movie";
import { TVShow } from "@models/abstract/TVShow";
import { Loader } from "@models/inheritance/Loader";
import { MovieList2 } from "@data/MovieList2";
import { TVShowList } from "@data/TVShowList";
import React from "react";
import { Text, View, Image, ScrollView, Button } from "react-native";
import VideoCard from "@molecules/VideoCard";
import { NetflixUser } from "@models/inheritance/NetflixUser";
import { BasicSubscription } from "@models/abstract/Subscription";

export default function Contoh() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [tvShows, setTvShows] = React.useState<TVShow[]>([]);
  const user = new NetflixUser("John", "email", "password");
  const basicPlan = new BasicSubscription();

  const loginHandle = () => {
    user.login("password");
  };

  const subHandle = () => {
    user.subscribe(basicPlan);
  };

  const unsubHandle = () => {
    user.unsubscribe();
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
      <Button title="Login" onPress={() => loginHandle()}></Button>
      <Button title="Upgrade" onPress={() => subHandle()}></Button>
      <Button title="Unsub" onPress={() => unsubHandle()}></Button>
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
