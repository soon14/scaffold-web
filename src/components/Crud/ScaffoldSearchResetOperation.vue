<!-- 搜索与重置 -->
<template>
  <span>
    <el-button
      class="buttonClass"
      type="primary"
      icon="el-icon-search"
      round
      @click="crud.toQuery"
    >
      {{ $t('crud.searchResetOperation.search') }}
    </el-button>
    <el-button
      class="buttonClass"
      type="warning"
      icon="el-icon-refresh-right"
      round
      @click="reset"
    >
      {{ $t('crud.searchResetOperation.reset') }}
    </el-button>
  </span>
</template>

<script>
export default {
  name: 'SwSearchResetOperation',
  props: {
    // CRUD对象
    crud: {
      type: Object,
      required: true
    }
  },
  methods: {
    reset() {
      this.crud.resetQuery()
      this.$emit('reset')
    }
  }
}
</script>

<style scoped>
.buttonClass {
  margin-left: 0;
}
</style>
