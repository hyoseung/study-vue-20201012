import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  loginFetch() {
    if (localStorage.getItem('loginInfo')) {
      return JSON.parse(localStorage.getItem('loginInfo'));
    } else {
      return { isLogin: false, username: '', password: '' };
    }
  },
  todoFetch() {
    // isComplete: true/false, text: '', date
    if (localStorage.getItem('todoInfo')) {
      return JSON.parse(localStorage.getItem('todoInfo'));
    } else {
      return [];
    }
  }
}

export default new Vuex.Store({
  state: {
    isLoading: false,
    loginInfo: storage.loginFetch(),
    todoInfo: storage.todoFetch()
  },
  getters: {
    getTodoInfo(state) {
      return state.todoInfo;
    }
  },
  mutations: {
    changeIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setUsername(state, payload) {
      state.loginInfo.username = payload;
    },
    setPassword(state, payload) {
      state.loginInfo.password = payload;
    },
    completeLogin(state) {
      state.loginInfo.isLogin = true;
      localStorage.setItem('loginInfo', JSON.stringify(state.loginInfo));
    },
    logout(state) {
      state.loginInfo.isLogin = false;
      state.loginInfo.username = '';
      state.loginInfo.password = '';
      //localStorage.clear();
      localStorage.removeItem('loginInfo');
    },
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
  },
  actions: {
    login({commit}) { // state ->> { commit } 구조분해할당
      commit('changeIsLoading', true);
      return setTimeout(() => {
        commit('changeIsLoading', false);
        commit('completeLogin');
      }, 3000);
    }
  },
  modules: {
  }
})
