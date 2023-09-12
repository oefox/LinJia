<template>
    <!-- 返回到我的页面的图标 -->
    <div class="top">
        <!-- <van-icon size="25" name="arrow-left" @click="toLastUrl" /> -->
        <h2>登录</h2>
    </div>
    <van-form @submit="onSubmit">
        <van-field
        v-model="userInfo.username"
         maxlength="8"
         name="username"
          label="用户名" 
          placeholder="用户名"
        :rules="rules.username" />
        <van-field v-model="userInfo.password" maxlength:srtinff="10"
         type:FieldType="password" name="password" label="密码" placeholder="密码"
            :rules="rules.password" />
        <div style="margin: 0.32rem">
            <van-button round block type:String="info" native-type="submit">登录</van-button>
        </div>
        <div class="bottom">
            还没有账号?点击去
        </div>
    </van-form>
    <van-button></van-button>
</template>
<script lang="ts" setup>
import type { FormProps, FormInstance, FieldRule } from 'vant';
interface UserInfo {
    username: String,
    password: String
}
const userInfo: UserInfo = {
    username: "",
    password: ""
}
//创建校验
interface rulesType {
    username: FieldRule,
    password: FieldRule,
}
const rules: rulesType = {
    username: {
        required: true,
        trigger: 'onChange',
        message: ""
    },
    password: {
        required: true,
        trigger: "onChange",
    },

}
const onSubmit = (userInfo: UserInfo) => {

}

</script>
<style scoped>
.top {
    display: flex;
    align-items: center;
    padding: 4vw;
}

h2 {
    margin-left: 4vw;
}

.bottom {
    font-size: 4vw;
    margin-top: 4vw;
    text-align: center;
}

.bottom>p {
    font-size: 4vw;
    color: red;
}
</style>
