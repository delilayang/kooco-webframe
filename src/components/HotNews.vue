<template>
    <div class="container">
        <div class="hot-news">
        <span class="news-title">最新消息：</span>
        <marquee-text :duration="30" class="marquee-text">
          {{news}}
        </marquee-text>
        </div>
      </div>
</template>
<script>
import MarqueeText from 'vue-marquee-text-component'
export default {
  name: 'HotNews',
  data () {
    return {
      'news': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
    }
  },
  methods: {
  },
  components: {
      MarqueeText
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/main';

</style>
