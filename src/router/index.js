import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: function(to, from, next) {
      // 컴포넌트를 렌더링 하는 라우트 앞에 호출됨. 이 가드가 호출 될 때 아직 생성되지 않기 때문에
      // 'this' 컴포넌트 인스턴스에 접근 할 수 없음
      if (store.state.loginInfo.isLogin) {
        next();
      } else {
        alert('Login please.')
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // router-link는 클릭 이벤트를 차단하여 브라우저가 페이지를 다시 로드하지 않도록 함
  base: process.env.BASE_URL, // history모드에서 base옵션 설정할 때 : to prop의 URL에 이를 포함할 필요 없음
  routes
})

export default router
