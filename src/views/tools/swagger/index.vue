<template>
  <scaffold-frame :src="swaggerApi" />
</template>

<script>
import { mapGetters } from 'vuex'
import scaffoldFrame from '@/components/ScaffoldFrame'

export default {
  name: 'Swagger',
  components: { scaffoldFrame },
  computed: {
    ...mapGetters([
      'swaggerApi'
    ])
  }
}
</script>
