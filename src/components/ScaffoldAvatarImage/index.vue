<template>
  <el-avatar
    :shape="shape"
    :icon="icon"
  >
    <el-image
      :src="src ? src : Avatar"
      :preview-src-list="previewList ? previewList : previewListDefault"
      fit="cover"
      lazy
    >
      <div slot="error">
        <i class="el-icon-picture-outline" />
      </div>
    </el-image>
  </el-avatar>
</template>

<script>
import Avatar from '@/assets/images/avatar.png'

export default {
  name: 'ScaffoldAvatarImage',
  props: {
    src: {
      type: String,
      required: true
    },
    previewList: {
      type: Array,
      required: false,
      default: () => {}
    },
    shape: {
      type: String,
      required: false,
      default: 'circle'
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      Avatar: Avatar
    }
  },
  computed: {
    previewListDefault() {
      const array = []
      if (this.src) {
        array.push(this.src)
      }
      return array
    }
  }
}
</script>
