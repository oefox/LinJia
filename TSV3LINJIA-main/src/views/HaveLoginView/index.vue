    <template>
    <div class="top">
        <!-- 被选择的商品数量 -->
        <p>购物车:8</p>
        <van-button round type="danger" size="small">删除</van-button>
    </div>
    <!-- 购物车没有商品显示空空如也 -->
    <div class="NotUserCart" v-if="true">
        <img class="img" src="../assets/empty.jpg" alt="" />
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" round
            @click="$router.push('type')">去选择商品</van-button>
    </div>
    <!-- 购物车有商品显示对应内容 -->
    <div class="HaveUserCart" v-else>
        <van-swipe-cell v-for="userCartGoods in " :key="userCartGoods.id">
            <van-card :title="userCartGoods.name" :desc="userCartGoods.specs">
                <!-- 自定义商品的单选框和图片 -->
                <template #thumb>
                    <!-- 给自定义商品增加 单选框属性，默认为false -->
                    <van-checkbox v-model="userCartGoods.checked"></van-checkbox>
                    <img :src="userCartGoods.banner" />
                </template>
                <!-- 自定义商品的价格 -->
                <template #price>
                    <span style="color: red">￥{{ userCartGoods.price }}</span>
                </template>
                <!-- 自定义商品的数量和增加商品数量的按钮 -->
                <template #num>
                    <van-stepper v-model="userCartGoods.number" theme="round" button-size="22" disable-input />
                </template>
                <!-- 定义商品卡片底部的小计 -->
                <template #bottom>
                    <br />
                    小计：<span>{{ userCartGoods.subtotal }}</span>
                </template>
            </van-card>
            <!-- 定义右滑删除 -->
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <!-- 底部结算界面 -->
        <van-submit-bar :price="0" button-text="去结算">
            <!-- 全选框按钮绑定的是data中的checkAll -->
            <van-checkbox class="checkAllButton" v-model="checkAll"></van-checkbox>
        </van-submit-bar>
    </div>
</template>
<script setup lang="ts">
import{ref} from 'vue'
// 以下是封装好的选择框的点击事件,可直接引用
</script>
<style scoped>
.HaveLogin {
    padding: 4vw;
    height: 80vh;
    overflow: scroll;
}

.top {
    height: 6.667vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4vw;
}

.top>p {
    font-size: 4.8vw;
}

.NotUserCart {
    text-align: center;
}

.NotUserCart>.img {
    width: 100%;
}

/* 商品卡片 */
.HaveUserCart {
    width: 100%;
    overflow: hidden;

}

.van-card {
    border-radius: 2.667vw;
    margin-bottom: 2.667vw;
}

.van-card_thumb {
    position: relative;
}

.van-card__thumb>img {
    width: 20vw;
    height: 20vw;
    margin-left: 4vw;
}

.van-card__thumb>.van-checkbox {
    position: absolute;
    top: 50%;
    left: -2.667vw;
    transform: translateY(-50%);
}

.van-submit-bar {
    margin-bottom: 13.333vw;
}

.delete-button {
    height: 100%;
}
</style>