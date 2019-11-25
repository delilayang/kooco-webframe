<template>
    <div>
          
              <el-menu-item index="" v-for="item in gameMenu"
                :key="item.index"
                :label="item.title"
                :name="item.title">
                <router-link :to="{
                            name: 'GameBrand',
                            params: { name: item.title, id: item.title }
                        }">
                            {{item.title}}
                </router-link>
              </el-menu-item>
              <!-- <el-menu-item index="/GameAll">全部</el-menu-item>
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
              <el-menu-item index="/GameRT">RT</el-menu-item> -->
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'Game',
    data() {
        gameMenu: [
            {title: "全部"}, 
            {title: "BBIN"}, 
            {title: "MG"}, 
            {title: "GNS"}, 
            {title: "ISB"}, 
            {title: "AG"}, 
            {title: "JDB"}, 
            {title: "HB"}, 
            {title: "SG"}, 
            {title: "CQ9"}, 
            {title: "大滿貫"}, 
            {title: "RT"}
        ]
    },
    components: {
        
    }
}
</script>
<style lang="scss" scoped>
@import './../../styles/main';

</style>
