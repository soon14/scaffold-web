<template>
  <el-pagination
    background
    :page-size.sync="page.size"
    :total="page.total"
    :current-page.sync="page.page"
    style="margin-top: 8px"
    layout="total,prev,pager,next,sizes,jumper"
    @size-change="crud.sizeChangeHandler($event)"
    @current-change="crud.pageChangeHandler"
  />
</template>

<script>
import { pagination } from '@/utils/crud'

export default {
  name: 'SWPaginationOperation',
  mixins: [pagination()]
}
</script>
