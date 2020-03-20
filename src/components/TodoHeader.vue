<template>
  <header>
    <h1>TODO it!</h1>
    <!-- <h1>{{ this.$store.state.headerText }}</h1> -->
  </header>
</template>

<!-- 속성 scoped: 해당 컴포넌트 내부에서만 유효하게 존재하는 스타일을 의미함 -->
<style scoped> 
h1 {
  color: #2f3B52;  /**/
  font-weight: 900; /* 폰트의 굵기 */
  margin: 2.5rem 0 1.5rem;  /* 폰트의 크기에 따라선 변하는 여백 */
}
</style>