<template>
    <div class="top">
        <!-- 用户头像 -->
        <div class="userimg">
            <img src="../assets/user.png" alt="" />
        </div>
        <!-- 用户信息(以及登录和未登录) -->
        <div class="userinfo">
            <!-- 已经登录就显示用户名和用户昵称 -->
            <div class="yesUser">
                <p>账号xxxxx</p>
                <p>昵称xxx</p>
            </div>
            <!-- 未登录就提示登录账号或者是注册账号
            <div class="noUser" v-else>
                <div @click="$router.push('/login')">
                    <p>点击登录账号</p>
                </div>
                <div @click="$router.push('/register')">
                    <p>点击注册账号</p>
                </div>
            </div> -->
        </div>
    </div>
    <!-- <div v-if="IsUserLogin" class="quit" @click="Logout">
        <van-icon name="clear" size="10.667vw" />
        <p>退出登录</p>
    </div> -->


    <div>

    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.top {
    display: flex;
    align-items: center;
    padding: 4vw;
}

.top>.userimg>img {
    width: 26.667vw;
    border-radius: 50%;
    margin-right: 4vw;
}

.noUser p {
    line-height: 10.667vw;
}

.quit {
    margin-top: 26.667vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>