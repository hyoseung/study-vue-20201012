<template>
  <div id="kendoList">
    <Grid ref="grid" :data-items="propsUserList" :columns="columns"> </Grid>
  </div>
</template>

<script>
import "@progress/kendo-theme-default/dist/all.css"
import { Grid } from "@progress/kendo-vue-grid";

export default {
  props: ["propsUserList"],
  components: {
    Grid
  },
  data() {
    return {
      columns: [
        { field: "id", title: "id", width: "50px" },
        { field: "name", title: "name" },
        { field: "username", title: "username" },
        { field: "email", title: "email" },
        { field: "phone", title: "phone" },
        { field: "company.name", title: "company" }
      ]
    };
  },
};
</script>

<style scoped>
#kendoList {
  margin: 20px auto;
}
</style>