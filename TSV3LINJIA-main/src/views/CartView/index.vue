<template>

    <HaveLoginVue v-if="$route.meta.isAuth"></HaveLoginVue>
    <NotLogin v-else></NotLogin>
</template>
<script setup lang="ts">
import NotLogin from '../NotLoginView/index.vue'
import HaveLoginVue from '../HaveLoginView/index.vue';
</script>
<style scoped></style>