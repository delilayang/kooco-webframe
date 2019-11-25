<template>
<div class="game-content">
    這是全部內容
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple"></div>
        </el-col>
    </el-row>
    <el-row :gutter="10" >
        <el-col :span="4" v-for="col in columns" :key="col.name">
            <div class="grid-content bg-purple"  key="">
            </div>
            <p>{{col.description}}</p>
        </el-col>
    </el-row>
</div>
</template>
<script>
import Vue from 'vue'; 
export default {
    name: 'GameContent01',
    data() {
        return {
            columns: [
                {name: '1', 'description': '捕魚遊戲'},
                {name: '2', 'description': '賓果'},
                {name: '3', 'description': '吃角子老虎'},
                {name: '4', 'description': 'Jackpot'},
                {name: '5', 'description': '捕魚遊戲'},
                {name: '6', 'description': '捕魚遊戲'},
                {name: '7', 'description': '捕魚遊戲'},
                {name: '8', 'description': '捕魚遊戲'},
                {name: '9', 'description': '捕魚遊戲'},
                {name: '10', 'description': '捕魚遊戲'},
                {name: '11', 'description': '捕魚遊戲'},
                {name: '12', 'description': '捕魚遊戲'},
            ]
        }
    },
    methods: {

    },
    components: {

    }
}
</script>
<style lang="scss" scoped>
@import './../../styles/main';
</style>


