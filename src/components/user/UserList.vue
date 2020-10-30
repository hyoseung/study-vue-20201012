<template>
  <div class="userList">
    name : <input type="text" v-model="search" placeholder="...search" @input="handleSearchInput">
    <table id="list">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>phone</th>
          <th>company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in listData" v-bind:key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.company.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  props: ["propsUserList"],
  data() {
    return {
      search: '',
      listData: [...this.propsUserList]
    }
  },
  methods: {
    handleSearchInput(e) {
      let vm = this;
      let input = e.target.value;

      _.debounce = setTimeout(() => {
        if(input.length == 0) vm.listData = vm.propsUserList;
        else vm.listData = vm.propsUserList.filter((v) => (v.name.toLowerCase().includes(input.toLowerCase()))) 
      }, 1000);
      
    }
  }
};
</script>

<style scoped>
.userList {
  height: 550px;
  margin: auto;
}
#list {
  margin: 10px auto;
  border: 1px solid;
  border-collapse: collapse;
}
#list thead tr {
  background-color: blanchedalmond;
}
#list th:nth-child(5n + 1),
#list td:nth-child(5n + 1) {
  width: 100px;
}
#list th:nth-child(5n + 2),
#list td:nth-child(5n + 2) {
  width: 200px;
}
#list th:nth-child(5n + 3),
#list td:nth-child(5n + 3) {
  width: 230px;
}
#list th:nth-child(5n + 4),
#list td:nth-child(5n + 4) {
  width: 260px;
}
#list th:nth-child(5n),
#list td:nth-child(5n) {
  width: 230px;
}
#list th {
  padding: 10px 5px 10px 5px;
}
#list tr {
  border-bottom: solid 1px black;
  height: 45px;
}
#list td,
#list th {
  text-align: center;
  vertical-align: middle;
  border: 1px solid;
}
</style>