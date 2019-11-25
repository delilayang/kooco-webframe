<template>
     <div class="navigator">
        <Welcome/>
        <NavMenu/>
      </div>
</template>

<script>
import Vue from 'vue';
import Welcome from '@/components/Welcome'
import NavMenu from '@/components/NavMenu'
export default {
    name: 'Navigator',
    data () {
        return {
        }
    },
    methods: {
    },
    components: {
        Welcome,
        NavMenu
    }
}
</script>

<style lang="scss" scoped>
@import './../styles/main';

</style>

