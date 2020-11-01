<template>
  <div class="content">
    <form v-on:submit.prevent="beforeLogin" v-if="!isLogin">
      <div>
        <label for="username">id: </label>
        <input type="text" id="username" :value="username" @input="updateUsername"/>
      </div>
      <div>
        <label for="password">pw: </label>
        <input type="password" id="password" :value="password" @input="updatePassword"/>
      </div>
      <button type="submit">login</button>
    </form>

    <div v-else>
      <h1>{{ username }}, Welcome</h1>
      <button v-on:click="logout">logout</button>
    </div>

    <Loading :active.sync="isLoading" :opacity="0.1"></Loading>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">알림</h3>
      <p slot="body">{{ msg }}</p>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Modal from '@/components/common/Modal.vue';

export default {
  components: {
    Loading, Modal
  },
  data() {
    return {
      showModal: false,
      msg: ''
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.login.isLoading,
      loading: state => state.login.loading,
      username: state => state.login.loginInfo.username,
      password: state => state.login.loginInfo.password,
      isLogin: state => state.login.loginInfo.isLogin
    })
    // ...mapState({
    //   isLoading: state => state.isLoading,
    //   loading: state => state.loading,
    //   username: state => state.loginInfo.username,
    //   password: state => state.loginInfo.password,
    //   isLogin: state => state.loginInfo.isLogin
    // })
  },
  methods: {
    ...mapMutations({
      setUsername: 'login/setUsername',
      setPassword: 'login/setPassword',
      logout: 'login/logout'
    }),
    ...mapActions({
      login: 'login/login'
    }),
    // ...mapMutations(['setUsername', 'setPassword', 'logout']),
    // ...mapActions(['login']),

    // vuex state는 v-model를 할 수 없기 때문에 v-bind:value 후 v-on:input으로 데이터 수정해줘야함
    updateUsername(e) {
      this.setUsername(e.target.value);
    },
    updatePassword(e) {
      this.setPassword(e.target.value);
    },
    beforeLogin() {
      if (this.username == '' || this.password == '') {
        this.msg = '아이디 또는 비밀번호 입력 필요';
        this.showModal = true;
      } else {
        this.login();
      }
    }
  }
};
</script>

<style scoped>
input {
  height: 30px;
  width: 200px;
  margin: 10px 0;
  border-radius: 5px;
}
</style>