<template>
  <div class="header flex">
    <router-link to="/">
      <img
        class="logo"
        alt="Logo Backflip"
        src="@/assets/logos/backflip-logo-simple.svg"
      />
    </router-link>
    <div class="header-nav">
      <router-link class="color-on-hover" to="/browse"> Home </router-link>
      <router-link class="color-on-hover" to="/favorite"> My list </router-link>
      <ul class="flex">
        <li
          class="color-on-hover"
          v-for="genre of movieStore.genres.slice(0, 5)"
          :key="genre.key"
        >
          <router-link :to="'/genre/' + genre.id" :params="{ id: genre.id }">
            {{ genre.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="profile" v-if="!isHomePage">
      <router-link to="/favorite">
        <img
          :src="
            require(`@/assets/user-images/${
              userStore.selectedUser.id ? userStore.selectedUser.id : 2
            }.svg`)
          "
          alt="go to profile"
          title="go to profile"
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { usersStore } from "@/stores/users";
import { moviesStore } from "@/stores/movies";

export default {
  name: "HeaderComponent",
  setup() {
    const userStore = usersStore();
    const movieStore = moviesStore();
    const route = useRoute();

    const isHomePage = computed(() => {
      return route.path === "/";
    });

    return {
      isHomePage,
      userStore,
      movieStore,
    };
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  background: transparent;
  width: 100%;
  height: 50px;
  text-align: left;
  /* border-bottom: 2px solid white; */
  padding-bottom: 20px;
}
.logo {
  height: 100%;
  margin-left: 25px;
  margin-top: 10px;
}

.profile {
  height: 45px;
  width: 45px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 50px;
}

.header-nav {
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 80px;
  padding-top: 30px;
  display: flex;
}

.header-nav a {
  text-decoration: none;
  font-weight: bold;
  color: white;
  margin-right: 40px;
}

a:hover {
  color: #d492fa !important;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
