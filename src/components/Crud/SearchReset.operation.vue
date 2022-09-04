<!-- 搜索与重置 -->
<template>
  <span>
    <el-button
      class="filter-item buttonClass"
      size="mini"
      type="primary"
      icon="el-icon-search"
      round
      @click="crud.toQuery"
    >
      {{ $t('crud.searchResetOperation.search') }}
    </el-button>
    <el-button
      class="filter-item buttonClass"
      size="mini"
      type="warning"
      icon="el-icon-refresh-right"
      round
      @click="crud.resetQuery"
    >
      {{ $t('crud.searchResetOperation.reset') }}
    </el-button>
  </span>
</template>

<script>
export default {
  name: 'SearchResetOperation',
  props: {
    // CRUD对象
    crud: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.buttonClass {
  margin-left: 0;
}
</style>
