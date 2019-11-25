<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content">
        <div class="page-head">
          <el-breadcrumb class="page-title" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{subTitle}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="page-search">
            <el-input placeholder="Filter by Name" prefix-icon="el-icon-search" v-model="filter"></el-input>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'PageHead',
    data() {
        return {
            'title': 'Titile',
            'subTitle': 'SubTitle',
            filter: ''
        }
    },
    methods: {

    },
    components: {

    }
    
}
</script>
<style lang="scss" scoped>
@import './../styles/main';

</style>
