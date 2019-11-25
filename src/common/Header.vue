<template>
    <header>
      <div class="logo"></div>
      <Navigator/>
    </header>
</template>

<script>
import Vue from 'vue';
import Navigator from './Navigator'
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Navigator
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/main';

</style>
