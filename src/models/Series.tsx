import { Media } from "./Media";
import { Alert } from "react-native";

export class Series extends Media {
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

  static createSeries(data: MediaInterface[]): Series[] {
    const series = data.map(
      (seriesData: MediaInterface) =>
        new Series(
          seriesData.title,
          seriesData.description,
          seriesData.rating,
          seriesData.genre,
          seriesData.image,
          seriesData.totalEpisode,
          seriesData.premiumOnly,
          seriesData.type
        )
    );

    return series;
  }

  // polymorphism
  playMedia(): boolean {
    return true;
  }
}
