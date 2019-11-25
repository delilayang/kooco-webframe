<template>
  <div class="basslayout">
    <Header/>
    <Banner/>
    <div class="wrapper">
      <HotNews/>
      <ContentIndex/>
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
import ContentIndex from '@/components/ContentIndex'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Header,
    Banner,
    Footer,
    FloatBanner,
    HotNews,
    ContentIndex
  }
}
</script>

<style lang="scss">
@import './../styles/main';

</style>
