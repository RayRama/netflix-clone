import { Alert } from "react-native";
import { UserAccount } from "./User";
interface MediaInterface {
  title: string;
  description: string;
  rating: number;
  genre: string;
  image?: string;
  totalEpisode?: number;
  premiumOnly?: boolean;
  type?: string;
}

export abstract class Media implements MediaInterface {
  // ini adalah association karena Media class memerlukan data dari interface MediaInterface
  // interface
  title: string;
  description: string;
  rating: number;
  genre: string;
  image?: string;
  totalEpisode?: number;
  premiumOnly: boolean;
  type?: string;

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
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.genre = genre;
    this.image = image;
    this.totalEpisode = totalEpisode;
    this.premiumOnly = premiumOnly;
    this.type = type;
  }

  abstract playMedia(): any;
}
