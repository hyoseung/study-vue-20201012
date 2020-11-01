# vue_study_20201012

## Content

+ router
  - navigation guard를 이용하여 로그인한 사용자만 메뉴 접근 가능하도록 구현
  - https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/ 참고
+ store
  - todo.js, login.js module을 나눠서 store 구현
  - https://xn--xy1bk56a.run/vuex/4-vuex-options/Modules.html 참고
+ Todo.vue
  - vuex를 이용하여 todo list 구현
  - https://github.com/joshua1988/doit-vuejs 참고
  - todolist에 transition 적용
+ User.vue
  - aixos로 데이터 호출 (https://jsonplaceholder.typicode.com/users)
  - Table 태그를 이용한 list와 Kendo Grid를 이용하여 데이터를 보여줌
  - debounce를 이용하여 search 구현
+ Modal component
  - https://kr.vuejs.org/v2/examples/modal.html 참고
  
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
