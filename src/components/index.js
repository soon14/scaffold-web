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
import ScaffoldButtonPopover from '@/components/ScaffoldButtonPopover'
import ScaffoldRelativeTime from '@/components/ScaffoldRelativeTime'
import ScaffoldScreenFull from '@/components/ScaffoldScreenFull'
import ScaffoldSelect from '@/components/ScaffoldSelect'
import ScaffoldSizeSelect from '@/components/ScaffoldSizeSelect'
import ScaffoldTable from '@/components/ScaffoldTable'
import ScaffoldThemePicker from '@/components/ScaffoldThemePicker'
import ScaffoldTreeSelect from '@/components/ScaffoldTreeSelect'
import ScaffoldDesensitizePopover from '@/components/ScaffoldDesensitizePopover'

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
  Vue.component(ScaffoldAvatarImage.name, ScaffoldAvatarImage)
  Vue.component(ScaffoldBackTopAndBottom.name, ScaffoldBackTopAndBottom)
  Vue.component(ScaffoldBreadcrumb.name, ScaffoldBreadcrumb)
  Vue.component(ScaffoldCard.name, ScaffoldCard)
  Vue.component(ScaffoldCodeSelect.name, ScaffoldCodeSelect)
  Vue.component(ScaffoldDialog.name, ScaffoldDialog)
  Vue.component(ScaffoldDrawer.name, ScaffoldDrawer)
  Vue.component(ScaffoldExceptionInfo.name, ScaffoldExceptionInfo)
  Vue.component(ScaffoldFrame.name, ScaffoldFrame)
  Vue.component(ScaffoldHamburger.name, ScaffoldHamburger)
  Vue.component(ScaffoldHeaderSearch.name, ScaffoldHeaderSearch)
  Vue.component(ScaffoldI18nSelect.name, ScaffoldI18nSelect)
  Vue.component(ScaffoldIconSelect.name, ScaffoldIconSelect)
  Vue.component(ScaffoldJson.name, ScaffoldJson)
  Vue.component(ScaffoldButtonPopover.name, ScaffoldButtonPopover)
  Vue.component(ScaffoldDesensitizePopover.name, ScaffoldDesensitizePopover)
  Vue.component(ScaffoldRelativeTime.name, ScaffoldRelativeTime)
  Vue.component(ScaffoldScreenFull.name, ScaffoldScreenFull)
  Vue.component(ScaffoldSelect.name, ScaffoldSelect)
  Vue.component(ScaffoldSizeSelect.name, ScaffoldSizeSelect)
  Vue.component(ScaffoldTable.name, ScaffoldTable)
  Vue.component(ScaffoldThemePicker.name, ScaffoldThemePicker)
  Vue.component(ScaffoldTreeSelect.name, ScaffoldTreeSelect)

  Vue.component(ScaffoldButtonOperation.name, ScaffoldButtonOperation)
  Vue.component(ScaffoldPaginationOperation.name, ScaffoldPaginationOperation)
  Vue.component(ScaffoldSearchDatePickerOperation.name, ScaffoldSearchDatePickerOperation)
  Vue.component(ScaffoldUpdateDeleteOperation.name, ScaffoldUpdateDeleteOperation)
  Vue.component(ScaffoldSearchResetOperation.name, ScaffoldSearchResetOperation)

  Vue.component(ScaffoldAppMain.name, ScaffoldAppMain)
  Vue.component(ScaffoldNavbar.name, ScaffoldNavbar)
  Vue.component(ScaffoldSettings.name, ScaffoldSettings)
  Vue.component(ScaffoldSidebar.name, ScaffoldSidebar)
  Vue.component(ScaffoldTagsView.name, ScaffoldTagsView)
  Vue.component(ScaffoldAppLink.name, ScaffoldAppLink)
  Vue.component(ScaffoldLogo.name, ScaffoldLogo)
  Vue.component(ScaffoldMenuItem.name, ScaffoldMenuItem)
  Vue.component(ScaffoldSidebarItem.name, ScaffoldSidebarItem)
  Vue.component(ScaffoldScrollPane.name, ScaffoldScrollPane)
}
