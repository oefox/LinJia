<template>
  <div class="container">
    <div class="top"></div>
    <div class="search">
      <form action="">
        <van-search v-model="SearchValue" shape="round" background="red" placeholder="请输入搜索关键词" @search="onSearch"
          @cancel="onCancel" input-align="center" />
      </form>
    </div>
    <div class="carousel">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false" :height="200">
        <van-swipe-item v-for="banner in MockData.banner" :key="banner.id">
          <img :src="banner.image" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="types">
      <van-grid :column-num="3" direction="horizontal">
        <van-grid-item v-for="type in MockData.types">
            <img :src="type.icon" alt="">
            <p>{{ type.name }}</p>
          </van-grid-item>
      </van-grid>
    </div>
    <div class="typesandpros">
      <div class="typeandpros">
        <!-- <div class="pros">
          <p class="adress">本产品由{{ pro.supplier }}提供</p>
          // <img :src="pro.banner" alt="" /> //
          <p class="proname">{{ pro.name }}</p>
          //
          <p class="spec">规格：{{ pro.specs }}</p>
          //
          <p class="price">
            价格：￥<span>{{ pro.price }}</span>
          </p>
          <p class="btns">
            <van-button
              round
              type="info"
              @click="($event) => godetail(typeandpros.id, pro.id)"
              color="orangered"
              >查看详情</van-button
            >

            <van-button round type="info" color="orangered"
              >加入购物车</van-button
            >
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
//模拟数据
import { ref } from 'vue'
let MockData: any = ref('')
if(window.localStorage.getItem('MockData')){
  console.log('222');
  MockData.value  = JSON.parse(window.localStorage.getItem('MockData') as string )
}
else{
  import('../data/data.json').then((res) => {
    window.localStorage.setItem('MockData', JSON.stringify(res))
    MockData.value = res
  })
}
let SearchValue = ref('')
const onCancel =()=>{

}
</script>

<!--<style scoped>-->
<!--.container {-->
<!--  .top {-->
<!--    height: 50px;-->
<!--    background-image: url(../assets/logo.png);-->
<!--    background-color: #f00;-->
<!--    background-size: 100% 100%;-->
<!--  }-->

<!--  .carousel {-->
<!--    height: 12.5rem /* 200/16 */;-->

<!--    .my-swipe .van-swipe-item {-->
<!--      color: #fff;-->
<!--      font-size: 1.25rem /* 20/16 */;-->
<!--      line-height: 9.375rem /* 150/16 */;-->
<!--      text-align: center;-->

<!--      img {-->
<!--        height:100%;-->
<!--        width: 100%;-->
<!--        object-fit: cover; /* 图像将填满容器，保持纵横比 */-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .types {-->
<!--    font-size: .875rem /* 14/16 */;-->

<!--    .van-grid .van-grid-item img {-->
<!--      height: 3.125rem /* 50/16 */;-->
<!--      width: 3.125rem /* 50/16 */;-->
<!--    }-->
<!--  }-->

<!--  .typesandpros {-->
<!--    h3 {-->
<!--      text-align: center;-->

<!--      img {-->
<!--        vertical-align: middle;-->
<!--      }-->
<!--    }-->

<!--    .pros {-->
<!--      border: .0625rem /* 1/16 */ solid #ccc;-->
<!--      margin: .625rem /* 10/16 */;-->
<!--      border-radius: .3125rem /* 5/16 */;-->
<!--      padding: .625rem /* 10/16 */;-->

<!--      p {-->
<!--        text-align: center;-->
<!--      }-->

<!--      img {-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--        border-radius: 5px;-->
<!--      }-->

<!--      p.proname {-->
<!--        font-weight: bold;-->
<!--        font-size: 18px;-->
<!--      }-->

<!--      p.spec {-->
<!--        color: #999;-->
<!--      }-->

<!--      p.price {-->
<!--        color: #f00;-->

<!--        span {-->
<!--          font-size: 1.25rem /* 20/16 */;-->
<!--          font-weight: bold;-->
<!--        }-->
<!--      }-->

<!--      p.btns {-->
<!--        display: flex;-->
<!--        justify-content: space-around;-->

<!--        .van-button {-->
<!--          width: 9.375rem /* 150/16 */;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--}-->
<!--</style>-->


<style lang="scss" scoped>
.container {
  .top {
    height: 50px;
    background-image: url(../assets/logo.png);
    background-color: #f00;
    background-size: 100% 100%;
  }

  .carousel {
    height: 12.5rem;

    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 1.25rem;
      line-height: 9.375rem;
      text-align: center;


      img {
        height: 200px;
        width: 100%
      }
    }
  }

  .types {
    font-size: .875rem;

    .van-grid .van-grid-item img {
      height: 3.125rem;
      width: 3.125rem;
    }
  }

  .typesandpros {
    h3 {
      text-align: center;

      img {
        vertical-align: middle;
      }
    }

    .pros {
      border: .0625rem solid #ccc;
      margin: .625rem;
      border-radius: .3125rem;
      padding: .625rem;

      p {
        text-align: center;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }

      p.proname {
        font-weight: bold;
        font-size: 18px;
      }

      p.spec {
        color: #999;
      }

      p.price {
        color: #f00;

        span {
          font-size: 1.25rem;
          font-weight: bold
        }
      }

      p.btns {
        display: flex;
        justify-content: space-around;

        .van-button {
          width: 9.375rem;
        }
      }
    }
  }


}
</style>