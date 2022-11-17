<template>
  <sw-frame :src="actuatorMonitorApi" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SystemStatus',
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
