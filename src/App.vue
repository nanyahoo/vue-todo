<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'  //TodoHeader.vue 전체를 가져와서 TodoHeader에 저장
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    //'콤포넌트 테그명': 컴포넌트 내용
    //'TodoHeader': TodoHeader,       //ES5
    //TodoHeader: TodoHeader,         //ES5
    TodoHeader,                       //ES6
    TodoInput,
    TodoList,
    TodoFooter        
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px, 10px, 10px, rgba(0,0,0,0.03 );
}
</style>
