<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
body,html {
  width: 100%;
  height: 100%;
  background: #f8f8f9;
}
.container_wrap{
  min-width: 320px;
  max-width: 640px;
  height: 100%;
  overflow: hidden;
}
.mint-cell-title {
  font-size: 18px;
  text-align: left !important;
}
a .mint-cell {
  border: none;
  min-height: 52px;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: inherit;
  color: #19be6b;
}
</style>
