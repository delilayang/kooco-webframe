<template>
    <div class="content-index">
        <div class="container">
            <p><strong>熱門遊戲推薦</strong></p>
            <el-row :gutter="10">
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
        <div class="container">
            <p><strong>最新優惠活動</strong></p>
            <el-row :gutter="10">
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'ContentIndex',
  data () {
    return {
      
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/main';
</style>


