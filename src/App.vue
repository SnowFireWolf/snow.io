<template>
  <div id="app">
    <router-view/>

    <div class="background">
    </div>
  </div>
</template>



<script>
export default {

}
</script>



<style>
.background {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;

    background-image: url("./assets/background.webp");
    background-repeat: no-repeat;
    background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
