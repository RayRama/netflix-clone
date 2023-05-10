import { VideoContent } from "./VideoContent";

export abstract class Movie extends VideoContent {
  year: number;
  constructor(
    title: string,
    genre: string,
    rating: number,
    cast: string[],
    director?: string,
    year?: number,
    poster?: string
  ) {
    super(title, genre, rating, cast, director);
    this.year = year;
    this.poster = poster;
  }

  getTitle() {
    return this.title;
  }
}
