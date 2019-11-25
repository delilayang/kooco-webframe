<template>
    <div class="float-banner">
      <div class="title">
        <h2>24小時</h2>
        <h3>在線客服</h3>
      </div>
      <div>
        <i class="el-icon-service"></i>
      </div>
      <div>
        <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
      </div>
      <div class="title">
        <h2>手機版</h2>
        <h5>立即掃描下載</h5>
      </div>
    </div>
</template>

<script>
import Vue from 'vue';
import QrcodeVue from 'qrcode.vue';
export default {
  name: 'FloatBanner',
  data () {
    return {
      value: 'https://example.com',
      size: 70
    }
  },
  methods: {
  },
  components: {
    QrcodeVue
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/main';

</style>