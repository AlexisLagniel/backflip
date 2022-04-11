<template>
  <div class="home">
    <h2 class="homepage-title">Who's flippin' ?</h2>
    <div class="home-cards-container">
      <div class="home-card" v-for="user of users" :key="user.id">
        <HomeCard v-if="user" :user="user" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HomeCard from "@/components/home/HomeCard.vue";
import { UserAccount } from "@/types/user";
import { computed } from "vue";
import { usersStore } from "@/stores/users";
export default {
  components: {
    HomeCard,
  },
  name: "HomeView",

  setup() {
    const store = usersStore();

    const users = computed(() => {
      let instantiatedList: UserAccount[] = [];
      store.users.forEach((user) => {
        instantiatedList.push(new UserAccount(user));
      });

      return instantiatedList;
    });

    return {
      users,
    };
  },
};
</script>

<style scoped>
.home {
  padding-left: 100px;
  padding-right: 100px;
}
.homepage-title {
  font-size: 68px;
  margin-top: 15%;
}
.home-cards-container {
  display: flex;
  justify-content: space-around;
}
</style>
