<template>
  <div class="content genre-content">
    <h1 v-if="movieList.length < 1 && isFavoritePage">
      You haven't favorited any movie yet 😥, please favorite one
    </h1>
    <div>
      <h3 v-if="isFavoritePage">Your favorites:</h3>
      <h3 v-else>{{ getCurrentGenre().name }} :</h3>
      <div v-if="movieList.length > 0" class="movies-row">
        <MovieCard v-for="movie of movieList" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MovieCard from "@/components/shared/MovieCard.vue";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { moviesStore } from "@/stores/movies";
import { getSelectedGenreMovies } from "@/services/movies/ApiUsage";

export default {
  components: {
    MovieCard,
  },
  setup() {
    const store = moviesStore();
    const route = useRoute();

    onMounted(() => {
      getSelectedGenreMovies(route.params.id);
    });

    watch(
      () => route.params.id,
      () => {
        if (!route.params.id) return;
        getSelectedGenreMovies(route.params.id);
      }
    );

    const isFavoritePage = computed(() => {
      return route.path === "/favorite";
    });

    const movieList = computed(() => {
      if (isFavoritePage.value) {
        return store.globalList.filter((item) => item.isUserFavorite);
      } else {
        return store.globalList.filter((item) => {
          const genre = getCurrentGenre();
          if (genre) return item.genreIds.includes(genre.id);
        });
      }
    });

    function getCurrentGenre() {
      return store.genres.find(
        (genre) => route.params.id === genre.id?.toString()
      );
    }

    return {
      store,
      isFavoritePage,
      getCurrentGenre,
      movieList,
    };
  },
};
</script>

<style scoped>
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.genre-content h3 {
  font-size: 40px;
  margin-bottom: 15px;
  color: #d492fa !important;
  text-decoration: 2px solid #d492fa;
}
</style>
