import { MovieList } from "@data/MovieList";
import { SeriesList } from "@data/SeriesList";
// import { Movie, Series } from "@models/Media";
import { Movie } from "@models/Movie";
import { Series } from "@models/Series";
import { UserAccount } from "@models/User";
import VideoCard from "@molecules/VideoCard";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [isPremium, setIsPremium] = React.useState(false);
  const movies = Movie.createMovie(MovieList);
  const series = Series.createSeries(SeriesList);
  const user1 = new UserAccount({
    username: "John",
    email: "john@email.com",
    password: "123456",
    premium: false,
  });

  function upgradeToPremium() {
    user1.upgradeToPremium();
  }

  function downgradeToFree() {
    user1.downgradeToFree();
  }

  function checkPremium() {
    alert(`You are ${user1.checkPremium() ? "Premium" : "Free"} user`);
  }

  function handleNavigation(media) {
    if (media.playMedia(user1)) {
      navigation.navigate("MovieScreen", { media });
    } else {
      alert("Sorry, this media is only available to premium users.");
    }
  }

  return (
    <ScrollView>
      <Text
        style={{
          textAlign: "left",
          paddingLeft: 10,
          marginTop: 10,
          fontSize: 20,
          fontWeight: "bold",
          color: "#000",
        }}
      >
        {`Welcome ${user1.getUsername()}`}
      </Text>
      <TouchableOpacity
        title="Upgrade to Premium"
        onPress={() => upgradeToPremium()}
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
        onPress={() => downgradeToFree()}
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
      <TouchableOpacity
        title="Downgrade to Free"
        onPress={() => checkPremium()}
        style={{
          backgroundColor: "blue",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Check premium</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {movies.map((movie, index) => (
          <VideoCard
            key={index}
            image={movie.image}
            title={movie.title}
            genre={movie.genre}
            rating={movie.rating}
            premiumOnly={movie.premiumOnly}
            type={movie.type}
            // onPress={() => movie.getMovieDetails()}
            watchPress={() => handleNavigation(movie)} // ini adalah aggregration karena method play() movie memerlukan premiun user
          />
        ))}
        {series.map((series, index) => (
          <VideoCard
            key={index}
            image={series.image}
            title={series.title}
            genre={series.genre}
            rating={series.rating}
            premiumOnly={series.premiumOnly}
            totalEpisode={series.totalEpisode}
            type={series.type}
            // onPress={() => series.getMovieDescription()}
            watchPress={() => handleNavigation(series)}
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
