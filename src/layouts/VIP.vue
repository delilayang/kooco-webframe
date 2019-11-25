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
          <el-row>
            <el-col :span="24">
              <div class="grid-content">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane v-for="(item) in tabList"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name">
                    <VIPContent01 v-if="isChildUpdate1"></VIPContent01>
                    <VIPContent02 v-if="isChildUpdate2"></VIPContent02>
                  </el-tab-pane>
              </el-tabs>
              </div>
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
import VIPContent01 from '@/components/tabcomponents/VIPContent01.vue'
import VIPContent02 from '@/components/tabcomponents/VIPContent02.vue'

export default {
  name: 'GameBrand',
  data () {
    return {
      'title': 'VIP',
      'subTitle': '',
      filter: '',
      activeName: "1st",
      isChildUpdate1: true,
      isChildUpdate2: false,
      tabList: [
        {title: '等級介紹', name: '1st', content: 'Tab 等級介紹 content'},
        {title: '相關資訊', name: '2nd', content: 'Tab 相關資訊 content'}
      ]
    }
  },
  methods: {
    handleClick(tab) {
      if(tab.name == "1st") {
        this.isChildUpdate1 = true;
        this.isChildUpdate2 = false;
      } else if(tab.name == "2nd") {
        this.isChildUpdate1 = false;
        this.isChildUpdate2 = true;
      }
    }
  },
  components: {
    Header,
    Banner,
    Footer,
    FloatBanner,
    HotNews,
    VIPContent01,
    VIPContent02
  }
}
</script>

<style lang="scss">
@import './../styles/main';

</style>


