import { Media } from "./Media";
import { Alert } from "react-native";

export class Movie extends Media {
  // inheritance
  constructor(
    title: string,
    description: string,
    rating: number,
    genre: string,
    image?: string,
    premiumOnly?: boolean
  ) {
    super(title, description, rating, genre, image, premiumOnly);
  }

  static createMovie(data: MediaInterface[]): Movie[] {
    const movies = data.map(
      (movieData: MediaInterface) =>
        new Movie(
          movieData.title,
          movieData.description,
          movieData.rating,
          movieData.genre,
          movieData.image,
          movieData.premiumOnly
        )
    );

    return movies;
  }

  getMovieDetails(): void {
    Alert.alert(
      this.title,
      `Title: ${this.title} | Rating: ${this.rating} | Genre: ${this.genre}`
    );
  }

  // getMovieDetails() is abstracted from Media class
}
