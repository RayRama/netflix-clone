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
        item.poster
      );
      movie.duration = item.duration;
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
        item.seasons,
        item.poster
      );
      tvShow.seasons = item.seasons;
      tvShow.duration = item.duration;
      tvShows.push(tvShow);
    });

    return tvShows;
  }
}
