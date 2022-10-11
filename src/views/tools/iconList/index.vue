<template>
  <scaffold-frame :src="iconListApi" />
</template>

<script>
import { mapGetters } from 'vuex'
import scaffoldFrame from '@/components/ScaffoldFrame'

export default {
  name: 'IconList',
  components: { scaffoldFrame },
  computed: {
    ...mapGetters([
      'iconListApi'
    ])
  }
}
</script>
