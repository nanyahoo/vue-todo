import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);  //Vuex를 Vue.use 전역으로 플러그인 한다는 개념. vue를 사용하는 전역에서 사용가능하도록 설정

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i=0; i < localStorage.length; i++)  {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(  JSON.parse( localStorage.getItem(localStorage.key(i)) )  );  //JSON.parse()는 서버로부터 받은 스트링->객체로 변환해줌
        }
      }
    }
    return arr;
  },

  // fetch1() {
  //   const
  // }
};

//export 하는 순간 store 상수를 import 하는 곳에서 사용할 수 있다.
export const store = new Vuex.Store({
  state: {  //data:{}
      todoItems: storage.fetch()  //todoItem 객체 배열을 저장함.
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));  //localStorage 저장로직 실행 JSON.stringify()는 객체를 서버로 전송할 스트링으로 변환함
      state.todoItems.push(obj);                            //배열에도 저장
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);  //storage delete
      state.todoItems.splice(payload.index, 1); //array 추출 delete method
    },
    toggleOneItem(state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; //배열의 값을 변경
        localStorage.removeItem(payload.todoItem.item); //key 값으로 삭제
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));  //다시 입력
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }


});