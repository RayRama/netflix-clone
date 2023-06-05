import { NetflixUser } from "@models/inheritance/NetflixUser";
import { VideoContent } from "./VideoContent";

export abstract class Movie extends VideoContent {
  year: number;
  id: string;
  desc: string;
  constructor(
    id: string,
    title: string,
    desc: string,
    genre: string,
    rating: string,
    cast: string[],
    director?: string,
    year?: number,
    duration?: number,
    poster?: string
  ) {
    super(title, genre, rating, cast, director, duration);
    this.year = year;
    this.poster = poster;
    this.duration = duration;
    this.id = id;
    this.desc = desc;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDesc(): string {
    return this.desc;
  }

  getGenre() {
    return this.genre;
  }

  getRating() {
    return this.rating;
  }

  getCast() {
    return this.cast;
  }

  getDirector() {
    return this.director;
  }

  getYear() {
    return this.year;
  }

  getDuration() {
    return this.duration;
  }

  play(dataUser: any) {
    if (dataUser.subscription !== null) {
      alert(`You are watching ${this.title}.`);
      return true;
    }

    alert(`You need to subscribe to watch ${this.title}.`);
  }

  download(dataUser: any) {
    if (dataUser.subscription !== null) {
      alert(`Downloading ${this.title}.`);
      return true;
    }

    alert(`You need to subscribe to download ${this.title}.`);
  }
}
