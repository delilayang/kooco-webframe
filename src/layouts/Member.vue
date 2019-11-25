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
                    <MemberContent01 v-if="isChildUpdate1"></MemberContent01>
                    <MemberContent02 v-if="isChildUpdate2"></MemberContent02>
                    <MemberContent03 v-if="isChildUpdate3"></MemberContent03>
                    <MemberContent04 v-if="isChildUpdate4"></MemberContent04>
                    <MemberContent05 v-if="isChildUpdate5"></MemberContent05>
                    <MemberContent06 v-if="isChildUpdate6"></MemberContent06>
                    <MemberContent07 v-if="isChildUpdate7"></MemberContent07>
                    <MemberContent08 v-if="isChildUpdate8"></MemberContent08>
                    <MemberContent09 v-if="isChildUpdate9"></MemberContent09>
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
import MemberContent01 from '@/components/tabcomponents/MemberContent01.vue'
import MemberContent02 from '@/components/tabcomponents/MemberContent02.vue'
import MemberContent03 from '@/components/tabcomponents/MemberContent03.vue'
import MemberContent04 from '@/components/tabcomponents/MemberContent04.vue'
import MemberContent05 from '@/components/tabcomponents/MemberContent05.vue'
import MemberContent06 from '@/components/tabcomponents/MemberContent06.vue'
import MemberContent07 from '@/components/tabcomponents/MemberContent07.vue'
import MemberContent08 from '@/components/tabcomponents/MemberContent08.vue'
import MemberContent09 from '@/components/tabcomponents/MemberContent09.vue'

export default {
  name: 'Member',
  data () {
    return {
      'title': '會員中心',
      'subTitle': '',
      filter: '',
      activeName: "1st",
      isChildUpdate1: true,
      isChildUpdate2: false,
      tabList: [
        {title: '充值', name: '1st', content: 'Tab 充值 content'},
        {title: '轉帳', name: '2nd', content: 'Tab 轉帳 content'},
        {title: '提款', name: '3rd', content: 'Tab 提款 content'},
        {title: '會員資料', name: '4th', content: 'Tab 會員資料 content'},
        {title: '我的錢包', name: '5th', content: 'Tab 我的錢包 content'},
        {title: '當前等級', name: '6th', content: 'Tab 當前等級 content'},
        {title: '站內訊息', name: '7th', content: 'Tab 站內訊息 content'},
        {title: '交易記錄', name: '8th', content: 'Tab 交易記錄 content'},
        {title: '領取優惠記錄', name: '9th', content: 'Tab 領取優惠記錄 content'}
      ]
    }
  },
  methods: {
    handleClick(tab) {
      if(tab.name == "1st") {
        this.isChildUpdate1 = true;
        this.isChildUpdate2 = false;
        this.isChildUpdate3 = false;
        this.isChildUpdate4 = false;
        this.isChildUpdate5 = false;
        this.isChildUpdate6 = false;
        this.isChildUpdate7 = false;
        this.isChildUpdate8 = false;
        this.isChildUpdate9 = false;
      } else if(tab.name == "2nd") {
        this.isChildUpdate1 = false;
        this.isChildUpdate2 = true;
        this.isChildUpdate3 = false;
        this.isChildUpdate4 = false;
        this.isChildUpdate5 = false;
        this.isChildUpdate6 = false;
        this.isChildUpdate7 = false;
        this.isChildUpdate8 = false;
        this.isChildUpdate9 = false;
      } else if(tab.name == "3rd") {
        this.isChildUpdate1 = false;
        this.isChildUpdate2 = false;
        this.isChildUpdate3 = true;
        this.isChildUpdate4 = false;
        this.isChildUpdate5 = false;
        this.isChildUpdate6 = false;
        this.isChildUpdate7 = false;
        this.isChildUpdate8 = false;
        this.isChildUpdate9 = false;
      } else if(tab.name == "4th") {
        this.isChildUpdate1 = false;
        this.isChildUpdate2 = false;
        this.isChildUpdate3 = false;
        this.isChildUpdate4 = true;
        this.isChildUpdate5 = false;
        this.isChildUpdate6 = false;
        this.isChildUpdate7 = false;
        this.isChildUpdate8 = false;
        this.isChildUpdate9 = false;
      } else if(tab.name == "5th") {
        this.isChildUpdate1 = false;
        this.isChildUpdate2 = false;
        this.isChildUpdate3 = false;
        this.isChildUpdate4 = false;
        this.isChildUpdate5 = true;
        this.isChildUpdate6 = false;
        this.isChildUpdate7 = false;
        this.isChildUpdate8 = false;
        this.isChildUpdate9 = false;
      } else if(tab.name == "6th") {
        this.isChildUpdate1 = false;
        this.isChildUpdate2 = false;
        this.isChildUpdate3 = false;
        this.isChildUpdate4 = false;
        this.isChildUpdate5 = false;
        this.isChildUpdate6 = true;
        this.isChildUpdate7 = false;
        this.isChildUpdate8 = false;
        this.isChildUpdate9 = false;
      } else if(tab.name == "7th") {
        this.isChildUpdate1 = false;
        this.isChildUpdate2 = false;
        this.isChildUpdate3 = false;
        this.isChildUpdate4 = false;
        this.isChildUpdate5 = false;
        this.isChildUpdate6 = false;
        this.isChildUpdate7 = true;
        this.isChildUpdate8 = false;
        this.isChildUpdate9 = false;
      } else if(tab.name == "8th") {
        this.isChildUpdate1 = false;
        this.isChildUpdate2 = false;
        this.isChildUpdate3 = false;
        this.isChildUpdate4 = false;
        this.isChildUpdate5 = false;
        this.isChildUpdate6 = false;
        this.isChildUpdate7 = false;
        this.isChildUpdate8 = true;
        this.isChildUpdate9 = false;
      } else if(tab.name == "9th") {
        this.isChildUpdate1 = false;
        this.isChildUpdate2 = false;
        this.isChildUpdate3 = false;
        this.isChildUpdate4 = false;
        this.isChildUpdate5 = false;
        this.isChildUpdate6 = false;
        this.isChildUpdate7 = false;
        this.isChildUpdate8 = false;
        this.isChildUpdate9 = true;
      }
    }
  },
  components: {
    Header,
    Banner,
    Footer,
    FloatBanner,
    HotNews,
    MemberContent01,
    MemberContent02,
    MemberContent03,
    MemberContent04,
    MemberContent05,
    MemberContent06,
    MemberContent07,
    MemberContent08,
    MemberContent09
  }
}
</script>

<style lang="scss">
@import './../styles/main';

</style>


