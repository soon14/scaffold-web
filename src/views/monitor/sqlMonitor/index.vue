<template>
  <el-frame :src="sqlMonitorApi" />
</template>

<script>
import {mapGetters} from 'vuex'
import ElFrame from '@/components/Iframe'

export default {
  name: 'SqlMonitor',
  components: { ElFrame },
  computed: {
    ...mapGetters([
      'sqlMonitorApi'
    ])
  }
}
</script>
