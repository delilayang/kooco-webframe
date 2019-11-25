<template>
    <footer>
      <div class="container">
        <el-row :gutter="10">
          <el-col :span="8">
            <div class="grid-content">
              <p><strong>NBB GLOBAL手機投注</strong></p>
              <article>手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注
                手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注
                手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注
              </article>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <section class="qrcode-section">
                <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
                <article>手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注
                  手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機投注
                  手機投注手機投注手機投注手機投注手機投注手機投注手機投注手機
                </article>
              </section>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="container">
        <el-row :gutter="10">
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
      <div class="container">
          <p>Copyright © NBB GLOBAL Reserved</p>
      </div>
    </footer>
</template>

<script>
import Vue from 'vue';
import QrcodeVue from 'qrcode.vue';
export default {
  name: 'Footer',
  data () {
    return {
      value: 'https://example.com',
      size: 100
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