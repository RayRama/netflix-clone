import { VideoContent } from "./VideoContent";

export abstract class TVShow extends VideoContent {
  id: string;
  desc: string;
  seasons: string;
  year: string;
  episodes: string[];
  creator: string;
  constructor(
    id: string,
    title: string,
    desc: string,
    genre: string,
    rating: string,
    cast: string[],
    director?: string,
    creator?: string,
    year?: string,
    duration?: number,
    seasons?: string,
    episodes?: string[],
    poster?: string
  ) {
    super(title, genre, rating, cast, director, duration);
    this.id = id;
    this.desc = desc;
    this.year = year;
    this.duration = duration;
    this.creator = creator;
    this.seasons = seasons;
    this.episodes = episodes;
    this.poster = poster;
  }
  play(): void {}

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDesc(): string {
    return this.desc;
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

  getCreator(): string {
    return this.creator;
  }

  getYear(): number {
    return this.year;
  }

  getDuration(): string {
    return this.duration;
  }

  getSeasons(): string {
    return this.seasons;
  }

  getEpisodes(): string[] {
    return this.episodes;
  }
}
