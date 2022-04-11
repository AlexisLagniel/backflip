<template>
  <div class="user-home-card color-on-hover" @click="setSelectedProfile(user)">
    <img
      :src="require(`@/assets/user-images/${user.id}.svg`)"
      alt="user image"
    />
    <h3>
      {{ user.name }}
    </h3>
  </div>
</template>

<script lang="ts">
import { UserAccount } from "@/types/user";
import { usersStore } from "@/stores/users";
import { useRouter } from "vue-router";

export default {
  props: {
    user: {
      type: UserAccount,
      required: true,
    },
  },
  name: "HomeCard",

  setup() {
    const userStore = usersStore();
    const router = useRouter();

    function setSelectedProfile(user: UserAccount) {
      userStore.selectedUser = user;
      redirectToBrowseView();
    }

    function redirectToBrowseView() {
      router.push({
        path: "/browse",
      });
    }

    return {
      setSelectedProfile,
    };
  },
};
</script>

<style scoped>
.user-home-card {
  cursor: pointer;
}

.user-home-card img {
  border: 4px solid white;
  height: 200px;
  width: 200px;
}

.user-home-card h3 {
  font-size: 25px;
}
</style>
