<template>
    <div class="top">
        <!-- 返回到我的页面的图标 -->
        <van-icon size="25" @click="toLastUrl" name="arrow-left" />
        <h2>注册</h2>
    </div>
    <van-form @submit="onSubmit">
        <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="rules.username" />
        <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="rules.password" />
        <van-field v-model="re_password" type="password" name="re_password" label="确认密码" placeholder="确认密码"
            :rules="rules.re_password" />
        <van-field v-model="email" type="email" name="email" label="邮箱" placeholder="请输入邮箱" :rules="rules.email" />
        <van-field v-model="telephone" type="number" name="telephone" label="手机号码" placeholder="请输入手机号码"
            :rules="rules.telephone" />
        <van-field v-model="nickname" type="text" name="nickname" label="昵称" placeholder="请输入昵称" :rules="rules.nickname" />
        <div style="margin: 0.32rem">
            <van-button round block type="info" native-type="submit">
                提交
            </van-button>
        </div>
        <div class="bottom">
            已经有账号了?点击去
            <p @click="toLogin">登录</p>
        </div>
    </van-form>
</template>
<script setup lang="ts">
// import { getRegisterUser, addUser } from "@/api"
import { showSuccessToast, showFailToast } from 'vant';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const rules = ref({
    username: [
        {
            // 设置要求required为true，表示必填
            required: true,
            message: "账号必填"
        },
        {
            // 设置pattren规定正则表达式规则，message提示信息
            pattern: /^[a-zA-Z]\w{3,9}/,
            message: "必须字母开头，数字字母下划线组成，4~10位"
        }
    ],
    password: [
        {
            required: true,
            message: "密码必填",
        },
        {
            pattern: /^.{6,12}$/,
            message: "长度在6~12位",
        }
    ],
    re_password: [
        {
            required: true,
            message: "确认密码必填",
        },
        {
            // validator为函数校验，传入我们自己定义的函数来进行校验
            validator: MyInspect,
            message: "两次输入的密码不一致",
        },
    ],
    email: [
        {
            required: true,
            message: "邮箱必填",
        },
        {
            pattern: /(^[1-9]\d{4,9}@qq\.com$)|(^[a-zA-Z]\w{5,17}@((126|163)\.com|yeah\.net)$)/,
            message: "请输入正确的邮箱地址",
        },
    ],
    telephone: [
        {
            required: true,
            message: "号码必填",
        },
        {
            pattern: /^1[345789]\d{9}$/,
            message: "请输入正确的手机号",
        },
    ],
    nickname: [
        {
            required: true,
            message: "昵称必填",
        },
        {
            pattern: /^[a-zA-Z][a-zA-Z0-9]{3,7}$/,
            message: "昵称字母和数字组成,字母开头,4~8位",
        },
    ],
})
let username = ref('')
let password = ref('')
let re_password = ref('')
let email = ref('')
let telephone = ref('')
let nickname = ref('')
// 判断密码和确认密码的校准
function MyInspect() {
    return password.value === re_password.value
}
function onSubmit(value) {
    delete value.re_password
    getRegisterUser(value).then((res) => {
        registerService(res.data.length, value)
    })
}
// 对前端返回的数据进行操作
function registerService(length, value) {
    if (length == 0) {
        // 没有被注册过则注册该用户
        addUser(value)
        showSuccessToast('注册成功，即将跳转到登录页面')
        // 清空表单内容
        formEmpty()
        // 设置定时器，跳转登录页面
        setTimeout(() => {
            toLogin()
        }, 1000)
    } else {
        showFailToast('该用户名已经存在，请更换一个用户名')
    }
}
function formEmpty() {
    username.value = ''
    password.value = ''
    re_password.value = ''
    email.value = ''
    telephone.value = ''
    nickname.value = ''
}
function toLogin() {
    router.push('/login')
}
function toLastUrl() {
    let lastUrl = localStorage.getItem('url')
    if (lastUrl) {
        localStorage.removeItem('url')
        router.push(lastUrl)
    } else {
        router.push('/user')
    }
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
