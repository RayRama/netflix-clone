import { Movie } from "@models/abstract/Movie";
import { TVShow } from "@models/abstract/TVShow";
import { VideoContent } from "@models/abstract/VideoContent";

export class Loader {
  static loadMovies(data: any): Movie[] {
    const movies: Movie[] = [];

    data.map((item: any) => {
      const movie = new Movie(
        item.title,
        item.genre,
        item.rating,
        item.cast,
        item.director,
        item.year,
        item.duration,
        item.poster
      );
      movies.push(movie);
    });

    return movies;
  }

  static loadTVShows(data: any): TVShow[] {
    const tvShows: TVShow[] = [];

    data.map((item: any) => {
      const tvShow = new TVShow(
        item.title,
        item.genre,
        item.rating,
        item.cast,
        item.director,
        item.year,
        item.seasons,
        item.duration,
        item.poster
      );
      tvShows.push(tvShow);
    });

    return tvShows;
  }
}
