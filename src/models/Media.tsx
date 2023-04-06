import { Alert } from "react-native";
import { UserAccount } from "./User";
interface MediaInterface {
  title: string;
  description: string;
  rating: number;
  genre: string;
  image?: string;
  premiumOnly?: boolean;
}

export abstract class Media implements MediaInterface {
  // ini adalah association karena Media class memerlukan data dari interface MediaInterface
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

  play(user?: UserAccount): boolean {
    if (this.premiumOnly && (!user || !user.checkPremium())) {
      return false;
    }
    return true;
  }

  abstract getMovieDetails(): void;
  abstract getMovieDescription(): void;
}
