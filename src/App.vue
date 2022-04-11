<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import Header from "@/components/shared/HeaderComponent.vue";
import { usersStore } from "./stores/users";
import { moviesStore } from "./stores/movies";

export default {
  components: {
    Header,
  },

  setup() {
    const userStore = usersStore();
    const movies = moviesStore();
    return {
      userStore,
      movies,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  color: white;
  width: 100%;
  background-color: #0f1110;
}

.color-on-hover:hover {
  cursor: pointer;
  color: #d492fa !important;
  border-color: #d492fa !important;
}

.color-on-hover img:hover {
  border-color: #d492fa !important;
}

.flex {
  display: flex;
}

.movies-row {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.content {
  text-align: left;
  width: 90%;
  padding: 50px 5%;
}
</style>
