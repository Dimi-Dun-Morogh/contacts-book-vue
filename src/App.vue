<template>
  <div id="app">
    <router-view/>

  </div>
</template>
<script>
import './fonts/icons.css';

export default {
  name: 'App',
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.62);
  padding: 5px;
  min-height: 300px;
  border-radius: 5px;
  margin-top: 30px;
padding-top: 20px;

}
body {
  margin: 0;
  padding: 0;
  background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,19,14,1) 12%, rgba(0,212,255,1) 100%);

}

</style>
