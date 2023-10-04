<script setup>
import { RouterView } from 'vue-router'
import headerBar from './components/headerBar.vue'
</script>

<template>
  <header>
    <headerBar />
  </header>

  <body>
    <RouterView />
  </body>
</template>

<style scoped>
header {
  display: flex;
  height: fit-content;
  width: 98vw;
  top: 0px;
  background-color: white;
  margin-left: -8px;
}

body {
  position: absolute;
  justify-content: center;
  padding-top: 3%;
  margin: 0px;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
