import { UserAccount } from "@/types/user";
import { defineStore } from "pinia";

export type rootState = {
  users: UserAccount[];
  selectedUser: UserAccount;
};

export const usersStore = defineStore("users", {
  state: () =>
    ({
      users: [
        {
          id: 1,
          name: "Alexis",
          age: 25,
        },
        {
          id: 2,
          name: "Victor",
          age: 45,
        },
        {
          id: 3,
          name: "Alexandre",
          age: 30,
        },
      ],
      selectedUser: {},
    } as rootState),
});
