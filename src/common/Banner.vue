<template>
    <div class="banner">
      <div class="container">
        <LoginForm/>
      </div>
      <Carousel/>
    </div>
</template>

<script>
import Vue from 'vue';
import LoginForm from '@/common/LoginForm.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'Banner',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    LoginForm,
    Carousel
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/main';
.banner {
  .container {
    position: absolute;
    z-index: 99;
    right: 0;
    left: 0;
  }
}
</style>