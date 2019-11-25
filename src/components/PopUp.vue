<template>
    <el-button type="text" @click="open">點擊打開 Message Box</el-button>
</template>

<script>
export default {
    name: 'PopUp',
    data () {
    return {
    }
  },
  methods: {
    open() {
        this.$confirm('此操作將永遠刪除該文件, 是否繼續?', '提示', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    }
    
  },
  components: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>


