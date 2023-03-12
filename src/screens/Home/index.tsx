import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Movie, Series } from "@models/Media";
import { User } from "@models/User";
import MovieCard from "@molecules/MovieCard";
import { ScrollView } from "react-native";
import { MovieList } from "@data/MovieList";
import { SeriesList } from "@data/SeriesList";

export default function HomeScreen() {
  const movie = Movie.createMovies(MovieList);
  const series = Series.createSeries(SeriesList);
  const user1 = new User({
    username: "John",
    email: "john@email.com",
    password: "123456",
    premium: false,
  });

  return (
    <ScrollView>
      <TouchableOpacity
        title="Upgrade to Premium"
        onPress={() => user1.upgradeToPremium()}
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Upgrade to Premium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Downgrade to Free"
        onPress={() => user1.downgradeToFree()}
        style={{
          backgroundColor: "red",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Downgrade to Free</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {movie.map((movie, index) => (
          <MovieCard
            key={index}
            image={movie.image}
            title={movie.title}
            genre={movie.genre}
            rating={movie.rating}
            onPress={() => movie.getMovieDescription()}
            watchPress={() => movie.play(user1)}
          />
        ))}
        {series.map((series, index) => (
          <MovieCard
            key={index}
            image={series.image}
            title={series.title}
            genre={series.genre}
            rating={series.rating}
            type="Series"
            onPress={() => series.getMovieDescription()}
            watchPress={() => series.play()}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
});
