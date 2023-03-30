import { Alert } from "react-native";
import { UserAccount } from "./User";
interface MediaInterface {
  title: string;
  description: string;
  rating: number;
  genre: string;
  image?: string;
  premiumOnly?: boolean;
}

abstract class Media implements MediaInterface {
  // ini adalah association karena Media class memerlukan data dari interface MediaInterface
  // interface
  title: string;
  description: string;
  rating: number;
  genre: string;
  image?: string;
  premiumOnly: boolean;

  constructor(
    title: string,
    description: string,
    rating: number,
    genre: string,
    image?: string,
    premiumOnly?: boolean
  ) {
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.genre = genre;
    this.image = image;
    this.premiumOnly = premiumOnly;
  }

  play(user?: UserAccount): boolean {
    if (this.premiumOnly && (!user || !user.checkPremium())) {
      return false;
    }

    return true;
  }

  abstract getMovieDetails(): void;
  abstract getMovieDescription(): void;
}

export abstract class Movie extends Media {
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

  getMovieDescription(): void {
    alert(this.description);
  }

  getMovieDetails(): void {
    alert(
      `Title: ${this.title} | Rating: ${this.rating} | Genre: ${this.genre}`
    );
  }

  // getMovieDetails() and getMovieDescription() is abstracted from Media class
}

export class Series extends Media {
  // inheritance
  constructor(
    title: string,
    description: string,
    rating: number,
    genre: string,
    image?: string,
    public type: string
  ) {
    super(title, description, rating, genre, image);
  }

  static createSeries(data: MediaInterface[]): Series[] {
    const series = data.map(
      (seriesData: MediaInterface) =>
        new Series(
          seriesData.title,
          seriesData.description,
          seriesData.rating,
          seriesData.genre,
          seriesData.image,
          seriesData.premiumOnly
        )
    );

    return series;
  }

  // polymorphism
  getMovieDescription(): void {
    Alert.alert("Ini deskripsi", this.description);
  }
  // getMovieDetails() and getMovieDescription() is abstracted from Movie class
}
