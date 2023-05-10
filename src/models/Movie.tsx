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
    totalEpisode?: number,
    premiumOnly?: boolean,
    type?: string
  ) {
    super(
      title,
      description,
      rating,
      genre,
      image,
      totalEpisode,
      premiumOnly,
      type
    );
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
          movieData.totalEpisode,
          movieData.premiumOnly,
          movieData.type
        )
    );

    return movies;
  }

  // polymorphism
  playMedia(user?: UserAccount): boolean {
    if (this.premiumOnly && (!user || !user.checkPremium())) {
      return false;
    }
    return true;
  }
  // getMovieDetails() is abstracted from Media class
}
