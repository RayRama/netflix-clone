import { VideoContent } from "./VideoContent";

export abstract class TVShow extends VideoContent {
  seasons: number;
  year: number;
  constructor(
    title: string,
    genre: string,
    rating: number,
    cast: string[],
    director?: string,
    year?: number,
    seasons?: number,
    duration?: number,
    poster?: string
  ) {
    super(title, genre, rating, cast, director);
    this.year = year;
    this.seasons = seasons;
    this.duration = duration;
    this.poster = poster;
  }
  play(): void {}
  getTitle(): string {
    return this.title;
  }
  getGenre(): string {
    return this.genre;
  }

  getRating(): number {
    return this.rating;
  }

  getCast(): string[] {
    return this.cast;
  }

  getDirector(): string {
    return this.director;
  }

  getYear(): number {
    return this.year;
  }

  getDuration(): number {
    return this.duration;
  }

  getSeasons(): number {
    return this.seasons;
  }
}
