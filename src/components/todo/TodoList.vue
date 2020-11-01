<template>
  <section>
      <ul>
          <li v-for="(item, index) in this.getTodoInfo" :key="item.date" class="shadow">
            <i class="checkBtn fas fa-check" :class="{checkBtnCompleted: item.isComplete}" @click="completeTodoItem(index)"></i>
            <span :class="{textCompleted: item.isComplete}">{{ item.text }}</span>
            <span class="removeBtn" @click="removeTodoItem(index)">
              <i class="removeBtn fas fa-trash-alt"></i>
            </span>
          </li>
      </ul>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getTodoInfo: 'todo/getTodoInfo'
    })
    // ...mapGetters(['getTodoInfo'])
  },
  methods: {
    ...mapMutations({
      completeTodoItem: 'todo/completeTodoItem',
      removeTodoItem: 'todo/removeTodoItem'
    })
    // ...mapMutations(['completeTodoItem', 'removeTodoItem'])
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: lightseagreen;
  margin-right: 5px;
  cursor: pointer;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: crimson;
  cursor: pointer;
}
</style>