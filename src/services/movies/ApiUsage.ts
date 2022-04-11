import axios from "axios";
import { Movie } from "@/types/movies";
import { moviesStore } from "@/stores/movies";
const store = moviesStore();

const apiKey = "";

export function getTrendingMovies() {
  axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
    .then((response: any) => {
      processData(response);
    });
}

export function getSelectedGenreMovies(genreId: any) {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
    )
    .then((response: any) => {
      processData(response);
    });
}

function processData(response: any) {
  response.data.results.forEach((movie: any) => {
    const individualMovie = {
      id: movie.id,
      backdropPath: movie.backdrop_path,
      posterPath: movie.poster_path,
      genreIds: movie.genre_ids,
      releaseDate: movie.release_date,
      title: movie.title,
      overview: movie.overview,
      voteAverage: movie.vote_average,
      realeaseDate: movie.release_date,
      isUserFavorite: false,
      isTrending: true,
    };
    const alreadyInStore = store.globalList.find(
      (item) => item.id === individualMovie.id
    );
    if (!alreadyInStore)
      store.globalList = [...store.globalList, ...[new Movie(individualMovie)]];
  });
}
