import { Media } from "./Media";

export abstract class Content extends Media {
  director?: string;
  cast: string[];
  poster?: string;

  constructor(
    title: string,
    genre: string,
    rating: number,
    cast: string[],
    director?: string,
    poster?: string
  ) {
    super();
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.cast = cast;
    this.director = director;
    this.poster = poster;
  }

  abstract play(): void;
  abstract pause(): void;
  abstract resume(): void;
  abstract stop(): void;
}
