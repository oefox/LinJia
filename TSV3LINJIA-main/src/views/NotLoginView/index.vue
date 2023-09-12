<template>
    <div class="notlogin">
        <p>您还未登录，请先登录</p>
        <van-button round color="#1989fa" @click="goLogin">去登录</van-button>
    </div>
</template>
<script setup lang="ts">
// 这里完善goLogin跳转页面的事件哦
function goLogin() {
    window.location.href = "/login"
}
</script>


<style scoped>
p {
    margin: 13.333vw 0;
}

.notlogin {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>