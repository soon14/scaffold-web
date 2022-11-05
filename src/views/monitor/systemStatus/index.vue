<template>
  <scaffold-frame :src="actuatorMonitorApi" />
</template>

<script>
import { mapGetters } from 'vuex'
import scaffoldFrame from '@/components/ScaffoldFrame'

export default {
  name: 'SystemStatus',
  components: {
    scaffoldFrame
  },
  computed: {
    ...mapGetters([
      'actuatorMonitorApi'
    ])
  },
  activated() {
    this.$store.dispatch('app/closeSideBar', { withoutAnimation: false }).then(() => {
      this.$store.dispatch('global/changeSetting', {
        key: 'showFooter',
        value: false
      })
    })
  },
  deactivated() {
    this.$store.dispatch('app/openSideBar', { withoutAnimation: false }).then(() => {
      this.$store.dispatch('global/changeSetting', {
        key: 'showFooter',
        value: true
      })
    })
  },
  beforeDestroy() {
    this.$store.dispatch('app/openSideBar', { withoutAnimation: false }).then(() => {
      this.$store.dispatch('global/changeSetting', {
        key: 'showFooter',
        value: true
      })
    })
  }
}
</script>
