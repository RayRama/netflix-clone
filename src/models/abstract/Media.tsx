export abstract class Media {
  title: string;
  genre: string;
  rating: number;
  abstract getDetails(): any;
}
