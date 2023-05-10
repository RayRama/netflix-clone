import { VideoContent } from "./VideoContent";

export abstract class TVShow extends VideoContent {
  seasons: number;
  constructor(
    title: string,
    genre: string,
    rating: number,
    cast: string[],
    director?: string,
    seasons?: number,
    poster?: string
  ) {
    super(title, genre, rating, cast, director);
    this.seasons = seasons;
    this.poster = poster;
  }
  abstract nextEpisode(): void;
}
