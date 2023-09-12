<template>
  <div>
    <van-tabbar route @change="changeActive" v-model="active" active-color="#a8d8ea" inactive-color="#000">
      <van-tabbar-item v-for="nav in footerNav" :key="nav.id" :to="nav.url" :name="nav.name" :icon="nav.icon">{{ nav.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
export default {

  data() {
    return {
      active:'首页',
      footerNav: [
        {
          name: '首页',
          id: 1,
          icon: 'home-o',
          url: '/home'
        },
        {
          name: '分类页',
          id: 2,
          icon: 'label-o',
          url: '/type'
        },
        {
          name: '视频',
          id: 3,
          icon: 'video-o',
          url: '/video'
        },
        {
          name: '购物车',
          id: 4,
          icon: 'cart-o',
          url: '/cart'
        },
        {
          name: '用户',
          id: 5,
          icon: 'manager-o',
          url: '/user'
        }
      ]
    }
  },
  methods: {
    changeActive(active:any){
     
      this.active =active
    }
  }
}
</script>

<style></style>
