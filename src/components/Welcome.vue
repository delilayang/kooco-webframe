<template>
    <div class="welcome-member">
          <span>{{msg}}{{member}}</span>
    </div>
</template>
<script>
export default {
    name: 'Welcome',
    data () {
        return {
            msg: '歡迎!',
            'member': 'jason0188a1'
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
