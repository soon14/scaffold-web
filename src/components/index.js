// 自定义全局组件(基于Element-ui)
import scaffoldAvatarImage from '@/components/ScaffoldAvatarImage'
import scaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import scaffoldBreadcrumb from '@/components/ScaffoldBreadcrumb'
import scaffoldCard from '@/components/ScaffoldCard'
import scaffoldCodeSelect from '@/components/ScaffoldCodeSelect'
import scaffoldDialog from '@/components/ScaffoldDialog'
import scaffoldDrawer from '@/components/ScaffoldDrawer'
import scaffoldExceptionInfo from '@/components/ScaffoldExceptionInfo'
import scaffoldFrame from '@/components/ScaffoldFrame'
import scaffoldHamburger from '@/components/ScaffoldHamburger'
import scaffoldHeaderSearch from '@/components/ScaffoldHeaderSearch'
import scaffoldI18nSelect from '@/components/ScaffoldI18nSelect'
import scaffoldIconSelect from '@/components/ScaffoldIconSelect'
import scaffoldJson from '@/components/ScaffoldJson'
import scaffoldMenuTable from '@/components/ScaffoldMenuTable'
import scaffoldPopover from '@/components/ScaffoldPopover'
import scaffoldRelativeTime from '@/components/ScaffoldRelativeTime'
import scaffoldScreenFull from '@/components/ScaffoldScreenFull'
import scaffoldSelect from '@/components/ScaffoldSelect'
import scaffoldSizeSelect from '@/components/ScaffoldSizeSelect'
import scaffoldTable from '@/components/ScaffoldTable'
import scaffoldThemePicker from '@/components/ScaffoldThemePicker'
import scaffoldTreeSelect from '@/components/ScaffoldTreeSelect'

// CRUD组件
import buttonOperation from '@/components/Crud/Button.operation'
import paginationOperation from '@/components/Crud/Pagination.operation'
import searchDatePickerOperation from '@/components/Crud/SearchDatePicker.operation'
import updateDeleteOperation from '@/components/Crud/UpdateDelete.operation'
import searchResetOperation from '@/components/Crud/SearchReset.operation'

export default (Vue) => {
  Vue.component('scaffoldAvatarImage', scaffoldAvatarImage)
  Vue.component('scaffoldBackTopAndBottom', scaffoldBackTopAndBottom)
  Vue.component('scaffoldBreadcrumb', scaffoldBreadcrumb)
  Vue.component('scaffoldCard', scaffoldCard)
  Vue.component('scaffoldCodeSelect', scaffoldCodeSelect)
  Vue.component('scaffoldDialog', scaffoldDialog)
  Vue.component('scaffoldDrawer', scaffoldDrawer)
  Vue.component('scaffoldExceptionInfo', scaffoldExceptionInfo)
  Vue.component('scaffoldFrame', scaffoldFrame)
  Vue.component('scaffoldHamburger', scaffoldHamburger)
  Vue.component('scaffoldHeaderSearch', scaffoldHeaderSearch)
  Vue.component('scaffoldI18nSelect', scaffoldI18nSelect)
  Vue.component('scaffoldIconSelect', scaffoldIconSelect)
  Vue.component('scaffoldJson', scaffoldJson)
  Vue.component('scaffoldMenuTable', scaffoldMenuTable)
  Vue.component('scaffoldPopover', scaffoldPopover)
  Vue.component('scaffoldRelativeTime', scaffoldRelativeTime)
  Vue.component('scaffoldScreenFull', scaffoldScreenFull)
  Vue.component('scaffoldSelect', scaffoldSelect)
  Vue.component('scaffoldSizeSelect', scaffoldSizeSelect)
  Vue.component('scaffoldTable', scaffoldTable)
  Vue.component('scaffoldThemePicker', scaffoldThemePicker)
  Vue.component('scaffoldTreeSelect', scaffoldTreeSelect)
  Vue.component('buttonOperation', buttonOperation)
  Vue.component('paginationOperation', paginationOperation)
  Vue.component('searchDatePickerOperation', searchDatePickerOperation)
  Vue.component('updateDeleteOperation', updateDeleteOperation)
  Vue.component('searchResetOperation', searchResetOperation)
}
