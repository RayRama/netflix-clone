import { Alert } from "react-native";
interface MediaInterface {
  title: string;
  description: string;
  rating: number;
  genre: string;
  image?: string;
  premiumOnly?: boolean;
}

export class Movie implements MediaInterface {
  // ini adalah association karena Movie class memerlukan data dari interface MediaInterface
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

  // play(user?: User): void {
  //   if (this.premiumOnly && (!user || !user.checkPremium())) {
  //     alert("Sorry, this media is only available to premium users.");
  //     return;
  //   }

  //   alert("Playing " + this.title);
  // }
  play(user?: User): boolean {
    if (this.premiumOnly && (!user || !user.checkPremium())) {
      return false;
    }

    return true;
  }

  getMovieDetails(): void {
    // abstraction
    alert(`${this.title} - ${this.genre} - ${this.rating}`);
  }

  getMovieDescription(): void {
    // abstraction
    Alert.alert("Description", `${this.description}`);
  }

  static createMovies(data: MediaInterface[]): Movie[] {
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
}

export class Series extends Movie {
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
          seriesData.image
        )
    );

    return series;
  }

  play(): boolean {
    // polymorphism (overriding)
    // alert("Playing " + this.title);
    return true;
  }

  // getMovieDetails() and getMovieDescription() is abstracted from Movie class
}
