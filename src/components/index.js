// 自定义全局组件(基于Element-ui)
import ScaffoldAvatarImage from '@/components/ScaffoldAvatarImage'
import ScaffoldBackTopAndBottom from '@/components/ScaffoldBackTopAndBottom'
import ScaffoldBreadcrumb from '@/components/ScaffoldBreadcrumb'
import ScaffoldCard from '@/components/ScaffoldCard'
import ScaffoldCodeSelect from '@/components/ScaffoldCodeSelect'
import ScaffoldDialog from '@/components/ScaffoldDialog'
import ScaffoldDrawer from '@/components/ScaffoldDrawer'
import ScaffoldExceptionInfo from '@/components/ScaffoldExceptionInfo'
import ScaffoldFrame from '@/components/ScaffoldFrame'
import ScaffoldHamburger from '@/components/ScaffoldHamburger'
import ScaffoldHeaderSearch from '@/components/ScaffoldHeaderSearch'
import ScaffoldI18nSelect from '@/components/ScaffoldI18nSelect'
import ScaffoldIconSelect from '@/components/ScaffoldIconSelect'
import ScaffoldJson from '@/components/ScaffoldJson'
import ScaffoldPopover from '@/components/ScaffoldPopover'
import ScaffoldRelativeTime from '@/components/ScaffoldRelativeTime'
import ScaffoldScreenFull from '@/components/ScaffoldScreenFull'
import ScaffoldSelect from '@/components/ScaffoldSelect'
import ScaffoldSizeSelect from '@/components/ScaffoldSizeSelect'
import ScaffoldTable from '@/components/ScaffoldTable'
import ScaffoldThemePicker from '@/components/ScaffoldThemePicker'
import ScaffoldTreeSelect from '@/components/ScaffoldTreeSelect'

// CRUD组件
import ScaffoldButtonOperation from '@/components/Crud/ScaffoldButtonOperation'
import ScaffoldPaginationOperation from '@/components/Crud/ScaffoldPaginationOperation'
import ScaffoldSearchDatePickerOperation from '@/components/Crud/ScaffoldSearchDatePickerOperation'
import ScaffoldUpdateDeleteOperation from '@/components/Crud/ScaffoldUpdateDeleteOperation'
import ScaffoldSearchResetOperation from '@/components/Crud/ScaffoldSearchResetOperation'

// Layout布局组件
import ScaffoldAppMain from '@/layout/components/ScaffoldAppMain'
import ScaffoldNavbar from '@/layout/components/ScaffoldNavbar'
import ScaffoldSettings from '@/layout/components/ScaffoldSettings'
import ScaffoldSidebar from '@/layout/components/ScaffoldSidebar'
import ScaffoldTagsView from '@/layout/components/ScaffoldTagsView'
import ScaffoldAppLink from '@/layout/components/ScaffoldSidebar/ScaffoldAppLink'
import ScaffoldLogo from '@/layout/components/ScaffoldSidebar/ScaffoldLogo'
import ScaffoldMenuItem from '@/layout/components/ScaffoldSidebar/ScaffoldMenuItem'
import ScaffoldSidebarItem from '@/layout/components/ScaffoldSidebar/ScaffoldSidebarItem'
import ScaffoldScrollPane from '@/layout/components/ScaffoldTagsView/ScaffoldScrollPane'

export default (Vue) => {
  Vue.component('swAvatarImage', ScaffoldAvatarImage)
  Vue.component('swBackTopAndBottom', ScaffoldBackTopAndBottom)
  Vue.component('swBreadcrumb', ScaffoldBreadcrumb)
  Vue.component('swCard', ScaffoldCard)
  Vue.component('swCodeSelect', ScaffoldCodeSelect)
  Vue.component('swDialog', ScaffoldDialog)
  Vue.component('swDrawer', ScaffoldDrawer)
  Vue.component('swExceptionInfo', ScaffoldExceptionInfo)
  Vue.component('swFrame', ScaffoldFrame)
  Vue.component('swHamburger', ScaffoldHamburger)
  Vue.component('swHeaderSearch', ScaffoldHeaderSearch)
  Vue.component('swI18nSelect', ScaffoldI18nSelect)
  Vue.component('swIconSelect', ScaffoldIconSelect)
  Vue.component('swJson', ScaffoldJson)
  Vue.component('swPopover', ScaffoldPopover)
  Vue.component('swRelativeTime', ScaffoldRelativeTime)
  Vue.component('swScreenFull', ScaffoldScreenFull)
  Vue.component('swSelect', ScaffoldSelect)
  Vue.component('swSizeSelect', ScaffoldSizeSelect)
  Vue.component('swTable', ScaffoldTable)
  Vue.component('swThemePicker', ScaffoldThemePicker)
  Vue.component('swTreeSelect', ScaffoldTreeSelect)

  Vue.component('swButtonOperation', ScaffoldButtonOperation)
  Vue.component('swPaginationOperation', ScaffoldPaginationOperation)
  Vue.component('swSearchDatePickerOperation', ScaffoldSearchDatePickerOperation)
  Vue.component('swUpdateDeleteOperation', ScaffoldUpdateDeleteOperation)
  Vue.component('swSearchResetOperation', ScaffoldSearchResetOperation)

  Vue.component('swAppMain', ScaffoldAppMain)
  Vue.component('swNavbar', ScaffoldNavbar)
  Vue.component('swSettings', ScaffoldSettings)
  Vue.component('swSidebar', ScaffoldSidebar)
  Vue.component('swTagsView', ScaffoldTagsView)
  Vue.component('swAppLink', ScaffoldAppLink)
  Vue.component('swLogo', ScaffoldLogo)
  Vue.component('swMenuItem', ScaffoldMenuItem)
  Vue.component('swSidebarItem', ScaffoldSidebarItem)
  Vue.component('swScrollPane', ScaffoldScrollPane)
}
