<template></template>

<script>
import { mapGetters } from 'vuex'
import scaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import buttonOperation from '@/components/Crud/Button.operation'
import CRUD, { crud, form, header, presenter } from '@/utils/crud'
import { del } from '@/api/tools/pictures'

const defaultCrud = CRUD({
  title: '存储',
  url: '/pictures',
  crudMethod: { del }
})
const defaultForm = { id: null, name: '' }
export default {
  name: 'LocalStorage',
  components: {
    scaffoldBackTopAndBottom,
    searchDatePickerOperation,
    buttonOperation
  },
  mixins: [
    presenter(defaultCrud),
    header(),
    form(defaultForm),
    crud()
  ],
  data() {
    return {
      permission: {
        add: ['Picture:add', 'root'],
        edit: ['Picture:update', 'root'],
        del: ['Picture:delete', 'root']
      }
    }
  },
  computed: {
    ...mapGetters([
      'imagesUploadApi'
    ])
  },
  created() {
    this.crud.optShow = {
      add: false,
      edit: true,
      del: true,
      download: true
    }
  }
}
</script>
