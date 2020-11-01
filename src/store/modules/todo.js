const storage = {
  todoFetch() {
    // isComplete: true/false, text: '', date
    if (localStorage.getItem('todoInfo')) {
      return JSON.parse(localStorage.getItem('todoInfo'));
    } else {
      return [];
    }
  }
}

export default {
  namespaced: true,
  state: {
    todoInfo: storage.todoFetch()
  },
  getters: {
    getTodoInfo(state) {
      return state.todoInfo;
    }
  },
  mutations: {
    addTodoItem(state, payload) {
      let obj = { isComplete:false, text:payload, data: new Date() };
      state.todoInfo.push(obj);
      localStorage.setItem('todoInfo', JSON.stringify(state.todoInfo));
    },
    completeTodoItem(state, payload) {
      state.todoInfo[payload].isComplete = !state.todoInfo[payload].isComplete;
      localStorage.setItem('todoInfo', JSON.stringify(state.todoInfo));
    },
    removeTodoItem(state, payload) {
      state.todoInfo.splice(payload, 1);
      localStorage.setItem('todoInfo', JSON.stringify(state.todoInfo));
    },
    removeAllTodo(state) {
      state.todoInfo = [];
      localStorage.removeItem('todoInfo');
    }
  }
}