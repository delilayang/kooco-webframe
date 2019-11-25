<template>
  <div class="basslayout">
    <Header/>
    <div class="banner-inner"></div>
    <div class="wrapper">
      <HotNews/>
      <div class="container">
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
        <el-row :gutter="10">
          <el-col :span="4" v-for="col in columns" :key="col.name">
            <div class="grid-content bg-purple" key=""></div>
            <p>{{col.description}}</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer/>
    <FloatBanner/>
  </div>
</template>

<script>
import Vue from 'vue';
import QrcodeVue from 'qrcode.vue';
import Header from '@/common/Header.vue';
import Banner from '@/common/Banner.vue';
import Footer from '@/common/Footer.vue';
import FloatBanner from '@/common/FloatBanner.vue';
import HotNews from '@/components/HotNews'

export default {
  name: 'GameAll',
  data () {
    return {
        'title': '電子遊藝',
        'subTitle': '全部',
        filter: '',
        columns: [
          {name: '1', 'description': '捕魚遊戲'},
          {name: '2', 'description': '賓果'},
          {name: '3', 'description': '吃角子老虎'},
          {name: '4', 'description': 'Jackpot'},
          {name: '5', 'description': '捕魚遊戲'},
          {name: '6', 'description': '捕魚遊戲'},
          {name: '7', 'description': '捕魚遊戲'},
          {name: '8', 'description': '賓果'},
          {name: '9', 'description': '吃角子老虎'},
          {name: '10', 'description': 'Jackpot'},
          {name: '11', 'description': '捕魚遊戲'},
          {name: '12', 'description': '捕魚遊戲'}
        ]
    }
  },
  methods: {
  },
  components: {
    Header,
    Banner,
    Footer,
    FloatBanner,
    HotNews
  }
}
</script>

<style lang="scss">
@import './../../styles/main';

</style>


