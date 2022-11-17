<template>
  <sw-frame :src="sqlMonitorApi" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SqlMonitor',
  computed: {
    ...mapGetters([
      'sqlMonitorApi'
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
