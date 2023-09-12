<script setup lang="ts">
import Footer from './components/Footer.vue';
</script>
<template>
          <router-view >
          </router-view>
  <Footer v-show="$route.meta.isShowFooter && $route.meta.isAuth"></Footer>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
