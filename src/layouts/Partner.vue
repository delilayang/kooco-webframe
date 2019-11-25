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
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
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
  name: 'Partner',
  data () {
    return {
      'title': '合作夥伴',
      'subTitle': ''
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
@import './../styles/main';

</style>


