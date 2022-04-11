export interface MovieInterface {
  id: number;
  backdropPath: string;
  posterPath: string;
  genreIds: number[];
  title: string;
  overview: string;
  voteAverage: number;
  releaseDate: string;
  isUserFavorite: boolean;
  isTrending: boolean;
}

export class Movie {
  id: number;
  backdropPath: string;
  posterPath: string;
  genreIds: number[];
  title: string;
  overview: string;
  voteAverage: number;
  releaseDate: string;
  isUserFavorite: boolean;
  isTrending: boolean;

  constructor(movie: MovieInterface) {
    this.id = movie.id;
    this.backdropPath = movie.backdropPath;
    this.posterPath = movie.posterPath;
    this.genreIds = movie.genreIds;
    this.title = movie.title;
    this.overview = movie.overview;
    this.voteAverage = movie.voteAverage;
    this.releaseDate = movie.releaseDate;
    this.isUserFavorite = movie.isUserFavorite;
    this.isTrending = movie.isTrending;
  }

  updateFavoriteStatus(status: boolean) {
    this.isUserFavorite = status;
  }
}

export interface Genre {
  id: number;
  name: string;
}
