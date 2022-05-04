<template> 
<HeaderView/>
  
</template>

<script>

import HeaderView from "./components/HeaderView.vue"
export default {
  components:{
    HeaderView
  }
}
</script>

<style lang="scss">


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

body{
  background-image: url(./assets/background.jpg);
}


</style>
