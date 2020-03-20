<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <!-- Modal alert() -->
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!!
        <i class="fas fa-times closeModalBtn" @click="showModal=false"></i>
      </h3>
      <div slot="body"><span>무언가를 입력하세요.</span></div>
    </Modal>
    <!-- Modal alert -->
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem); //메소드명, 입력값
        this.clearInput();  // this.newTodoItem = '';       //입력창 초기화
      }
      else {  //입력한 값이 없을때
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    } 
  },
  components: { 
    // Modal: Modal //ES5
    Modal           //ES6
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
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>