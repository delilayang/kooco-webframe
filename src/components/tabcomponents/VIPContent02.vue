<template>
    <div class="VIP-content">
        <el-row>
            <el-col :span="24">
                <div class="grid-content vip-detail" v-for="item in itemList" :key="item.name">
                    <div key=""><strong><span>{{item.title}}</span></strong></div>
                    <div><span>{{item.content}}</span></div>
                    <el-divider></el-divider>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'VIPContent02',
    data() {
        return {
            itemList: [
                {name: '1', 'title': '標題01', content: '內容01'},
                {name: '2', 'title': '標題02', content: '內容02'}
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

