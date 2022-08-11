import router from './routers'
import store from '@/store'
import Global from '@/global'
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css' // 进度条CSS
import {getToken} from '@/utils/auth' //从Cookie中获取Token
import {buildMenus} from '@/api/system/menu'

