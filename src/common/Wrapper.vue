<template>
    <div class="wrapper">
      <HotNews/>
      <ContentIndex/>
    </div>
</template>
<script>
import HotNews from '@/components/HotNews'
import ContentIndex from '@/components/ContentIndex'
export default {
  name: 'Wrapper',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
      HotNews,
      ContentIndex
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/main';

</style>