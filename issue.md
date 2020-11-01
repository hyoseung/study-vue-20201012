# Issue

## TodoList.vue에 transition-group 추가 시 에러 발생

[TodoList.vue]
```html
<transition-group name="list" tag="ul">
  <li v-for="(item, index) in this.getTodoInfo" :key="item.date" class="shadow">
    <i class="checkBtn fas fa-check" :class="{checkBtnCompleted: item.isComplete}" @click="completeTodoItem(index)"></i>
    <span :class="{textCompleted: item.isComplete}">{{ item.text }}</span>
    <span class="removeBtn" @click="removeTodoItem(index)">
      <i class="removeBtn fas fa-trash-alt"></i>
    </span>
  </li>
</transition-group>
```

위와 같은 코드로 개발 후 실행하였더니 에러 발생
```
<transition-group> children must be keyed: <li>
```

`:key="item.date"`를 `:key="index"`로 변경함으로써 위의 에러를 해결하려고 했지만 `yarn serve` 하면 아래와 같은 `warning`이 발생
```
Do not use v-for index as key on <transition-group> children, this is the same as not using keys.
```

그리고 아래 링크 처럼 remove할 때 액션이 이상하게 작동함 ([참고](https://stackoverflow.com/questions/48543073/vuejs-animation-issue-on-removing-item-of-list))  
-> 두번째 li를 삭제했는데 마지막 li가 삭제되는 것처럼 작동함

key에 문제가 있다고 판단하여 `yarn add uniqid`를 이용하여 객체에 id를 추가하였음  
`:key="item.id"` 로 변경 후 실행하였더니 제대로 동작함

참고
https://stackoverflow.com/questions/50311075/how-to-animate-list-items-in-vue-when-one-is-removed