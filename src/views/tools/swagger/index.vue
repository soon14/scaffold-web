<template>
  <el-frame :src="swaggerApi"/>
</template>

<script>
import {mapGetters} from 'vuex'
import ElFrame from '@/components/Iframe'

export default {
  name: 'Swagger',
  components: {ElFrame},
  computed: {
    ...mapGetters([
      'swaggerApi'
    ])
  }
}
</script>
