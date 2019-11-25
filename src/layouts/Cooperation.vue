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
                <h4 style="text-align: left;">英該能生小為止報雖戰的他能我子用、場出電心館的致有怎，從持不輕動年細而觀克能金清但考則讀化以級同排；調水語演故印他，建的意演！色地趣學點。示向交新全到告不而年包大是還城平定演去願同際不環風早失多一國？倒家風的知樣。構快形車也喜行麼動一理只當許可景使。</h4>
                <div>Email: <router-link :to="email">affiliate@wonder-casino.com</router-link></div>
                <h5>透過以下方式聯繫</h5>
                <div class="link-label">
                    <router-link to="LINE"><i class="iconfont icon-line"></i></router-link>
                    <router-link to="Blogger"><i class="iconfont icon-blogger2"></i></router-link>
                    <router-link to="Twitter"><i class="iconfont icon-twitterlogo"></i></router-link>
                    <router-link to="IG"><i class="iconfont icon-instegrame"></i></router-link>
                    <router-link to="Telegram"><i class="iconfont icon-telegram"></i></router-link>
                    <router-link to="Youtube"><i class="iconfont icon-youtubesquare"></i></router-link>
                </div>
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

export default {
  name: 'Partner',
  data () {
    return {
      'title': '聯盟計劃',
      'subTitle': '',
      email: 'affiliate@wonder-casino.com',
      LINE: 'https://line.me/zh-hant/',
      Blogger: 'https://www.blogger.com/',
      Twitter: 'https://twitter.com/',
      IG: 'https://www.instagram.com/',
      Telegram: 'https://telegram.org/',
      Youtube: 'https://www.youtube.com/'
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


