<template>
  <div class="inputBox shadow">
      <input type="text" :value="newTodoItem" @input="updateNewTodoItem" @keyup.enter="checkTodoItem">
      <span class="addContainer" @click="checkTodoItem">
          <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>

      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">경고</h3>
        <p slot="body">할 일을 입력하세요.</p>
      </Modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    Modal
  },
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    ...mapMutations({
      addTodoItem: 'todo/addTodoItem'
    }),
    // ...mapMutations(['addTodoItem']),
    updateNewTodoItem(e) {
      // 한글 입력할 경우 : v-model보다 v-bind:value, v-on:input 사용하는것을 권고
      this.newTodoItem = e.target.value;
    },
    checkTodoItem() {
        if (this.newTodoItem == '') {
          this.showModal = !this.showModal;
        } else {
          this.addTodoItem(this.newTodoItem);
          this.newTodoItem = '';
        }
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: 80%;
}
.addContainer {
  float: right;
  background: coral; /*linear-gradient(to right, #6478FB, #8763FB);*/
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>