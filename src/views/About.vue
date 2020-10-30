<template>
  <div class="content">
    <h1>User List</h1>
    <div v-show="loading">..Loading</div>
    <UserList v-if="!loading" v-bind:propsUserList="userList"></UserList>
    <KendoUserList v-if="!loading" v-bind:propsUserList="userList"></KendoUserList>
  </div>
</template>

<script>
import axios from "axios";
import UserList from "@/components/UserList.vue";
import KendoUserList from "@/components/KendoUserList.vue";

export default {
  data() {
    return {
      userList: [],
      loading: true, // v-show -> display:none
    };
  },
  components: {
    UserList, KendoUserList
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.loading = true;
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          this.userList = res.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 2000);
        });
    }
  }
};
</script>

<style>
</style>