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
                    <PayContent01 v-if="isChildUpdate1"></PayContent01>
                    <PayContent02 v-if="isChildUpdate2"></PayContent02>
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
import PayContent01 from '@/components/tabcomponents/PayContent01.vue'
import PayContent02 from '@/components/tabcomponents/PayContent02.vue'

export default {
  name: 'Payment',
  data () {
    return {
      'title': '支付選項',
      'subTitle': '',
      filter: '',
      activeName: "1st",
      isChildUpdate1: true,
      isChildUpdate2: false,
      tabList: [
        {title: '支付類別', name: '1st', content: 'Tab 支付類別 content'},
        {title: '類別說明', name: '2nd', content: 'Tab 類別說明 content'}
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
    PayContent01,
    PayContent02
  }
}
</script>

<style lang="scss">
@import './../styles/main';

</style>


