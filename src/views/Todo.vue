<template>
  <div class="content">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoHeader from '@/components/todo/TodoHeader.vue';
import TodoInput from '@/components/todo/TodoInput.vue';
import TodoList from '@/components/todo/TodoList.vue';
import TodoFooter from '@/components/todo/TodoFooter.vue';

export default {
  components: {
      TodoHeader, TodoInput, TodoList, TodoFooter
  }
}
</script>

<style scoped>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>