interface MediaInterface {
  title: string;
  description: string;
  rating: number;
  genre: string;
  image?: string;
  premiumOnly?: boolean;
}

export class Movie implements MediaInterface {
  // interface
  title: string;
  description: string;
  rating: number;
  genre: string;
  image?: string;
  premiumOnly = true;

  constructor(
    title: string,
    description: string,
    rating: number,
    genre: string,
    image?: string
  ) {
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.genre = genre;
    this.image = image;
  }

  play(user?: User): void {
    if (this.premiumOnly && (!user || !user.getPremium())) {
      alert("Sorry, this media is only available to premium users.");
      return;
    }

    alert("Playing " + this.title);
  }

  getMovieDetails(): void {
    // abstraction
    alert(`${this.title} - ${this.genre} - ${this.rating}`);
  }

  getMovieDescription(): void {
    // abstraction
    alert(`${this.description}`);
  }

  static createMovies(data: MediaInterface[]): Movie[] {
    const movies = data.map(
      (movieData: MediaInterface) =>
        new Movie(
          movieData.title,
          movieData.description,
          movieData.rating,
          movieData.genre,
          movieData.image
        )
    );

    return movies;
  }
}

export class Series extends Movie {
  // inheritance
  constructor(
    title: string,
    description: string,
    rating: number,
    genre: string,
    image?: string,
    public type: string
  ) {
    super(title, description, rating, genre, image);
  }

  static createSeries(data: MediaInterface[]): Series[] {
    const series = data.map(
      (seriesData: MediaInterface) =>
        new Series(
          seriesData.title,
          seriesData.description,
          seriesData.rating,
          seriesData.genre,
          seriesData.image
        )
    );

    return series;
  }

  play(): void {
    // polymorphism (overriding)
    alert("Playing " + this.title);
  }

  // getMovieDetails() and getMovieDescription() is abstracted from Movie class
}
