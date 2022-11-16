<template>
  <scaffold-frame :src="iconListApi" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IconList',
  computed: {
    ...mapGetters([
      'iconListApi'
    ])
  }
}
</script>
