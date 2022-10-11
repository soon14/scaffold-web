<template>
  <scaffold-frame :src="sqlMonitorApi" />
</template>

<script>
import { mapGetters } from 'vuex'
import ScaffoldFrame from '@/components/ScaffoldFrame'

export default {
  name: 'SqlMonitor',
  components: { ScaffoldFrame },
  computed: {
    ...mapGetters([
      'sqlMonitorApi'
    ])
  }
}
</script>
