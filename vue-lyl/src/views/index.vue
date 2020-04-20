<template>
    <div>
    <el-menu router class="el-menu-demo"
            mode="horizontal" @select="handleSelect" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b">
        <div class="logoimg"><img  src="../assets/blog.png" alt=""></div>
        <el-menu-item index="3">
            <template slot="title">
                <i class="el-icon-bell"></i>
                <span>消息</span>
            </template>
        </el-menu-item>

        <el-menu-item index="/taskCenter">
            <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>任务中心</span>
            </template>
        </el-menu-item>


        <div class="searchInput">
            <el-input style="width: 300px" v-model="searchData" size="mini" placeholder="请输入内容"></el-input>
        </div>
        <div class="searchInput">
            <el-button type="success" size="mini" icon="el-icon-search"></el-button>
        </div>

        <el-menu-item class="loginorregist" index="5">登录/注册</el-menu-item>

        <el-dropdown class="touxiang">
            <div class="el-dropdown-link"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>编辑个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
aaaa
    <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                activeIndex: '/taskCenter',
                searchData:'',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
.el-menu-demo{
position: relative;
}
    .touxiang{
        position: absolute;
        right: 4rem;
        top: 50%;
        transform: translate(0,-50%);
    }
    .loginorregist{
        position: absolute;
        right: 8rem;
        top: 50%;
        transform: translate(0,-50%);
    }
    .logoimg{
    float: left;
    margin-left: 4rem;
        margin-right: 1rem;
        margin-top: 0.3rem;
    }
    .logoimg img{
      height: 50px;
    }
    .searchInput{
        float: left;
        height: 100%;
        line-height: 60px;
        margin-left: 0.5rem;
    }
</style>