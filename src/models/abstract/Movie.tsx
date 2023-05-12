import { NetflixUser } from "@models/inheritance/NetflixUser";
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

  play(dataUser: any) {
    if (dataUser.subscription !== null) {
      console.log(`You are watching ${this.title}.`);
      return;
    }

    console.log(`You need to subscribe to watch ${this.title}.`);
  }
}
