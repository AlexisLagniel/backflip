<template>
  <div class="background-image">
    <div class="content">
      <div class="trending">
        <h3>Trending Now:</h3>
        <div class="movies-row">
          <MovieCard
            v-for="movie of trendingMovies"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MovieCard from "@/components/shared/MovieCard.vue";
import { computed, onMounted } from "vue";
import { moviesStore } from "@/stores/movies";
import { getTrendingMovies } from "@/services/movies/ApiUsage";

export default {
  components: {
    MovieCard,
  },
  setup() {
    const store = moviesStore();

    onMounted(() => {
      if (store.globalList.length < 1) {
        getTrendingMovies();
      }
    });

    const trendingMovies = computed(() => {
      return store.globalList.filter((item) => item.isTrending).slice(0, 5);
    });

    return { trendingMovies };
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("@/assets/background/background.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
}

.trending {
  position: absolute;
  top: 40%;
  width: 90%;
}

.trending h3 {
  font-size: 40px;
  margin-bottom: 15px;
}
</style>
