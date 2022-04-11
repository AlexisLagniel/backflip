<template>
  <div class="movie-card color-on-hover">
    <div
      class="movie-image card-face card-front"
      :style="{ 'background-image': 'url(' + getImage() + ')' }"
    />
    <div class="card-face card-back">
      <h3 class="movie-name">{{ movie.title }}</h3>
      <div class="movie-description flex">
        <div class="flex">
          <p class="voteAverage">
            {{ movie.voteAverage * 10 + " % positive" }}
          </p>
          <p class="release-date">{{ formatDate(movie.releaseDate) }}</p>
        </div>
        <div>
          <span
            @click="setToFavorite(movie)"
            :class="
              movie.isUserFavorite
                ? 'star favorited-star'
                : 'color-on-hover star'
            "
            >&#9733;</span
          >
        </div>
      </div>
      <p class="release-date">Genres: {{ formatGenres(movie) }}</p>

      <p class="movie-description description">
        {{ movie.overview }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Movie } from "@/types/movies";
import { moviesStore } from "@/stores/movies";

export default {
  props: {
    movie: {
      type: Movie,
      required: true,
    },
  },
  setup(props: any) {
    const store = moviesStore();

    function getImage() {
      return `https://image.tmdb.org/t/p/original/${props.movie.posterPath}`;
    }

    function formatDate(date: string): string {
      return date.slice(0, 4);
    }

    function setToFavorite(movie: Movie) {
      movie.updateFavoriteStatus(!movie.isUserFavorite);
    }

    function formatGenres(movie: Movie) {
      const genres: any = [];
      movie.genreIds.forEach((id) => {
        const genreId = store.genres.find((genre) => genre.id === id);
        genres.push(genreId?.name);
      });
      return genres.join(", ");
    }

    return {
      getImage,
      formatDate,
      setToFavorite,
      formatGenres,
      store,
    };
  },
};
</script>

<style scoped>
.movie-card {
  min-width: 250px;
  height: 400px;
  margin: 50px 10px;
  border: 1px solid white;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  transition: 0.7s ease-in-out;
  transform-style: preserve-3d;
}

.card-back {
  transform: rotateY(0.5turn);
  background-color: #0f1110;
  color: white !important;
  text-align: center;
}

.card-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: 0.5s ease-in-out;
}

.card-front {
  -webkit-box-reflect: below 0
    linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
}

.movie-card:hover {
  transform: rotateY(0.5turn);
}

.movie-image {
  height: 100%;
  width: 100%;
  background-size: cover;
}

.movie-description {
  padding: 0 15px;
  justify-content: space-around;
}

.movie-name {
  font-size: 28px;
  margin-bottom: 15px;
}

.voteAverage {
  color: #46d369;
  font-weight: bold;
  margin-right: 15px;
}

.star {
  font-size: 30px;
}

.favorited-star {
  color: #d492fa;
}

.description {
  text-align: left;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.release-date {
  font-weight: bold;
}
</style>
