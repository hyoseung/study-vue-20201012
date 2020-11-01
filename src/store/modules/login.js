const storage = {
	loginFetch() {
    if (localStorage.getItem('loginInfo')) {
      return JSON.parse(localStorage.getItem('loginInfo'));
    } else {
      return { isLogin: false, username: '', password: '' };
    }
	}
}
  
export default {
  namespaced: true,
	state: {
    isLoading: false,
    loginInfo: storage.loginFetch()
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
    }
  },
  actions: {
    login({commit}) { // state ->> { commit } 구조분해할당
      commit('changeIsLoading', true);
      return setTimeout(() => {
        commit('changeIsLoading', false);
        commit('completeLogin');
      }, 2000);
    }
  }
}