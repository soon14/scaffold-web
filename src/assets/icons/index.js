import Vue from 'vue'
import ScaffoldSvg from '@/components/ScaffoldSvg'

Vue.component('sw-svg', ScaffoldSvg)

const req = require.context('./svg',false,/\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
