import Vue from 'vue'
import ScaffoldSvgIcon from '@/components/ScaffoldSvgIcon'

Vue.component('scaffold-svg',ScaffoldSvgIcon)

const req = require.context('./svg',false,/\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
