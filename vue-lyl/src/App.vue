<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view />
  </div>
</template>

<style lang="stylus">
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  /*margin-top 60px*/
</style>
