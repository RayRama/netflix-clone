import { Movie } from "@models/abstract/Movie";
import { TVShow } from "@models/abstract/TVShow";
import { VideoContent } from "@models/abstract/VideoContent";

export class Loader {
  static loadMovie(data: any): Movie {
    const movie = new Movie(
      data.id,
      data.title,
      data.desc,
      data.genre,
      data.rating,
      data.cast,
      data.director,
      data.year,
      data.duration,
      data.poster
    );

    return movie;
  }

  static loadMovies(data: any): Movie[] {
    const movies: Movie[] = [];

    data.map((item: any) => {
      const movie = new Movie(
        item.id,
        item.title,
        item.desc,
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

  static loadTVShow(data: any): TVShow {
    const tvShow = new TVShow(
      data.id,
      data.title,
      data.desc,
      data.genre,
      data.rating,
      data.cast,
      data.director,
      data.creator,
      data.year,
      data.duration,
      data.seasons,
      data.episodes,
      data.poster
    );

    return tvShow;
  }

  static loadTVShows(data: any): TVShow[] {
    const tvShows: TVShow[] = [];

    data.map((item: any) => {
      const tvShow = new TVShow(
        item.id,
        item.title,
        item.desc,
        item.genre,
        item.rating,
        item.cast,
        item.director,
        item.creator,
        item.year,
        item.duration,
        item.seasons,
        item.episodes,
        item.poster
      );
      tvShows.push(tvShow);
    });

    return tvShows;
  }

  static loadRandomMovie(data: any): Movie {
    // const randomMovie: Movie[] = [];

    // data.map((item: any) => {
    //   const movie = new Movie(
    //     item.id,
    //     item.title,
    //     item.desc,
    //     item.genre,
    //     item.rating,
    //     item.cast,
    //     item.director,
    //     item.year,
    //     item.duration,
    //     item.poster
    //   );
    //   randomMovie.push(movie);
    // });

    // return randomMovie;
    const randomMovie = new Movie(
      data._id,
      data.title,
      data.desc,
      data.genre,
      data.rating,
      data.cast,
      data.director,
      data.year,
      data.duration,
      data.poster
    );

    return randomMovie;
  }
}
