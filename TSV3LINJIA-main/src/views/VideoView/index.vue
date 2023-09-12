<template>
    <van-list finished-text="没有更多了">
        <!-- 视频页面 -->
        <div class="video">
            video
            <!-- <video controls :src="video.url" v-for="video in JsonData.video" :key="video.id"></video> -->
        </div>
    </van-list>
</template>
<script setup lang="ts">
</script>
<style scoped>
.videos {
    padding: 0 0.4rem 0.2rem;
}

video {
    height: 53.333vw;
    width: 100%;
}
</style>