<template>
    <!-- 顶部搜索栏部分 -->
    <van-search shape="round" placeholder="请输入搜索关键词" />
    <div class="main">
        <!-- 左边侧边栏部分 -->
        <van-sidebar class="left" v-model="nowActive">
             <van-sidebar-item
             @click="filterGoods(type.name,MockData.types)"
              v-for="(type) in MockData?.types" :key="type.id" :title="type.name"
             />
        </van-sidebar>
        <!-- 右边内容部分 -->
        <van-list class="right" finished-text="没有更多了">
            <div class="good" v-for="goods in TemplateMockData[0].products" :key="goods.id">
                <!-- 商品图片 -->
              <div class="image">
                <img  :src="goods.banner" alt=""/>
              </div>

              <div class="text">
                <!-- 商品名字 -->
                <p class="name">{{ goods.name }}</p>
                <!-- 商品规格 -->
                <p class="specs">{{ goods.specs }}</p>
                <!-- 商品价格 -->
                <p class="price">￥{{ goods.price }}元</p>

                <van-button class="Btn" round block="true" size="small" type="info" color="linear-gradient(to right, #ff6034, #ee0a24)">
                  加入
                </van-button>
              </div>
            </div>
        </van-list>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
let MockData:any = ref("")
let TemplateMockData: any = ref("")
let nowActive = ref(0)
const filterGoods = (type: any, MockTypes: any) => {
    let newArray:any =ref([])   
     nowActive.value = type.id 
    TemplateMockData.value = MockTypes?.forEach(item=>{        
        if(item.name ==type){
            newArray.value.push(item)
        }
    })  
     TemplateMockData.value = newArray.value     
}
MockData.value = JSON.parse(window.localStorage.getItem('MockData') as string)
filterGoods(MockData.value.types[0].name, MockData.value.types)

 
</script>

<style scoped>
.main {
    display: flex;
}

.left {
    width: 26.667vw;
}

.right {
    flex: 1;
    height: 90vh;
    overflow: scroll;
}

.good {
    display: flex;
    width: 85%;
    margin: 0 auto;
    border-radius: 4vw;
    padding: 2vw;
    margin-bottom: 2.667vw;
    background-color: #fff;
}
.image{
  width: 50%;
  height: 35vw;

}

.text{
  position: relative;
  width: 100%;
  height: 35vw;
  background-color: #fff;

}
.text>.name{
  margin-top: 0px;
  margin-left: 1vw;
  font-size: 4vw;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}


.image>img {
  width: 100%;
  height: 35vw;

}

.text>.specs {
  font-size: 3.333vw;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 1vw 0;
}

.text>.price {
    font-size: 5vw;
    color: red;
    font-weight: bold;
}
.text>.Btn{
  position: absolute;
  margin-left: 23vw;
  margin-top: -11.8vw;
  width: 50%;
}

</style>
