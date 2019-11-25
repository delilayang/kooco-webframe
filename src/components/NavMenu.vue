<template>
<el-menu :default-active="$route.path" 
            class="el-menu-demo" 
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" router>
            <el-menu-item index="/">首頁</el-menu-item>
            <el-submenu index="2">
              <template slot="title">視訊直播</template>
              <el-menu-item index="2-1">全部</el-menu-item>
              <el-menu-item index="2-2">AG</el-menu-item>
              <el-menu-item index="2-3">BB</el-menu-item>
              <el-menu-item index="2-4">ALLBET</el-menu-item>
              <el-menu-item index="2-5">BG</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">電子遊藝</template>
                <el-menu-item index="/GameAll">全部</el-menu-item>
                <el-menu-item index="/GameBBIN">BBIN</el-menu-item>
                <el-menu-item index="/GameMG">MG</el-menu-item>
                <el-menu-item index="/GameGNS">GNS</el-menu-item>
                <el-menu-item index="/GameISB">ISB</el-menu-item>
                <el-menu-item index="/GameAG">AG</el-menu-item>
                <el-menu-item index="/GameJDB">JDB</el-menu-item>
                <el-menu-item index="/GameHB">HB</el-menu-item>
                <el-menu-item index="/GameSG">SG</el-menu-item>
                <el-menu-item index="/GameCQ9">CQ9</el-menu-item>
                <el-menu-item index="/GameDMG">大滿貫</el-menu-item>
                <el-menu-item index="/GameRT">RT</el-menu-item>
            </el-submenu>
            <el-menu-item index="/VIP">VIP</el-menu-item>
            <el-menu-item index="/Partner">合作夥伴</el-menu-item>
            <el-menu-item index="/Payment">支付選項</el-menu-item>
            <el-menu-item index="/Question">常見問題</el-menu-item>
            <el-menu-item index="/Cooperation">聯盟計劃</el-menu-item>
            <el-menu-item index="/Activity">優惠活動</el-menu-item>
            <el-menu-item index="/Member">會員中心</el-menu-item>
</el-menu>
</template>
<script>
import Vue from 'vue';
// import Game from '@/layouts/games/Game'

export default {
    name: 'NavMenu',
    data () {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {
    //   Game
    }
}
</script>
<style lang="scss" scoped>
@import './../styles/main';
</style>

