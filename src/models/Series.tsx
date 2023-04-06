import { Media } from "./Media";

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
