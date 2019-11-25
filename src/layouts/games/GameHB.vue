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
                    <el-breadcrumb-item>{{subtitle}}</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div class="page-search">
                    <el-input placeholder="Filter by Name" prefix-icon="el-icon-search" v-model="filter"></el-input>
                  </div>
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
                    <GameContent01 v-if="isChildUpdate1"></GameContent01>
                    <GameContent02 v-if="isChildUpdate2"></GameContent02>
                    <GameContent03 v-if="isChildUpdate3"></GameContent03>
                    <GameContent04 v-if="isChildUpdate4"></GameContent04>
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
import HotNews from '@/components/HotNews.vue'
import GameContent01 from '@/components/tabcomponents/GameContent01.vue'
import GameContent02 from '@/components/tabcomponents/GameContent02.vue'
import GameContent03 from '@/components/tabcomponents/GameContent03.vue'
import GameContent04 from '@/components/tabcomponents/GameContent04.vue'

export default {
  name: 'GameHB',
  data () {
    return {
      'title': '電子遊藝',
      'subtitle':'HB',
      filter: '',
      activeName: "1st",
      isChildUpdate1: true,
      isChildUpdate2: false,
      isChildUpdate3: false,
      isChildUpdate4: false,
      tabList: [
        {title: '全部', name: '1st', content: 'Tab 全部 content'},
        {title: '最新', name: '2nd', content: 'Tab 最新 content'},
        {title: '熱門', name: '3rd', content: 'Tab 熱門 content'},
        {title: '捕魚機', name: '4th', content: 'Tab 捕魚機 content'}
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
            } else if(tab.name == "2nd") {
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = true;
                this.isChildUpdate3 = false;
                this.isChildUpdate4 = false;
            } else if(tab.name == "3rd") {
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = false;
                this.isChildUpdate3 = true;
                this.isChildUpdate4 = false;
            } else if(tab.name == "4th") {
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = false;
                this.isChildUpdate3 = false;
                this.isChildUpdate4 = true;
            }
        }
  },
  components: {
    Header,
    Banner,
    Footer,
    FloatBanner,
    HotNews,
    GameContent01,
    GameContent02,
    GameContent03,
    GameContent04
  }
}
</script>

<style lang="scss">
@import './../../styles/main';

</style>


