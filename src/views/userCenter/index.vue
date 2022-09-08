<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="5" style="margin-bottom: 10px">
        <el-card class="box-card">
          <div slot="header" class="clearfix card-header">
            <span>个人信息</span>
          </div>
          <div>
            <div class="card-avatar-div">
              <el-upload
                :show-file-list="false"
                :on-success="handleSuccess"
                :on-error="handleError"
                :before-upload="beforeAvatarUpload"
                :headers="headers"
                :action="updateAvatarApi"
                class="avatar-uploader"
              >
                <el-avatar
                  :src="user.avatar.path ? user.avatar.path : Avatar"
                  class="card-avatar"
                  alt="点击更换头像"
                />
              </el-upload>
            </div>
            <ul class="user-info">
              <li>
                <i class="iconfont iconfont-center-username" /> 登录账号
                <div class="user-right">{{ user.username }}</div>
              </li>
              <li>
                <i class="iconfont iconfont-center-sex" /> 性别
                <div class="user-right">{{ user.sex }}</div>
              </li>
              <li>
                <i class="iconfont iconfont-center-phone" /> 手机号码
                <div class="user-right">{{ user.phone }}</div>
              </li>
              <li>
                <i class="iconfont iconfont-center-email" /> 邮箱
                <div class="user-right">{{ user.email }}</div>
              </li>
              <li>
                <i class="iconfont iconfont-center-last-pass-change" /> 上一次修改密码
                <div class="user-right">{{ user.lastPassResetTime }}</div>
              </li>
              <li>
                <i class="iconfont iconfont-center-last-avatar-change" /> 上一次修改修改头像
                <div class="user-right">{{ user.avatar.updateTime }}</div>
              </li>
              <li>
                <i class="iconfont iconfont-center-createTime" /> 注册时间
                <div class="user-right">{{ user.createTime }}</div>
              </li>
              <li>
                <i class="iconfont iconfont-center-security" /> 安全设置
                <div class="user-right">
                  <el-link><i class="el-icon-edit" />&nbsp;修改密码</el-link>
                  <el-divider direction="vertical" />
                  <el-link @click="toShowUpdateEmail"><i class="el-icon-edit-outline" />&nbsp;修改邮箱</el-link>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <update-email ref="email" :email="user.email" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Avatar from '@/assets/images/avatar.png'
import { getToken } from '@/utils/auth'
import store from '@/store'
import updateEmail from '@/views/userCenter/update/updateEmail'

export default {
  name: 'Center',
  components: {
    updateEmail
  },
  data() {
    return {
      Avatar: Avatar,
      headers: {
        'Authorization': getToken()
      }
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'updateAvatarApi',
      'options'
    ])
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.$message({
        message: '头像修改成功',
        type: 'success'
      })
      store.dispatch('user/GetInfo').then(() => {})
    },
    handleError(err, file, fileList) {
      this.$notify({
        title: '文件上传失败',
        message: err,
        type: 'error'
      })
    },
    beforeAvatarUpload(file) {
      const isOK = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt50M = file.size / 1024 / 1024 <= 50
      console.log(isOK)
      if (!isOK) {
        this.$message.error('上传的头像只能是 JPG 或者 PNG格式！')
      }
      if (!isLt50M) {
        this.$message.error('上传的头像图片大小不能超过50MB！')
      }
      return isOK && isLt50M
    },
    getSelectList() {
      store.dispatch('userUpdate/GetOptions').then(() => {})
    },
    toShowUpdateEmail() {
      if (store.getters.options.length === 0) {
        this.getSelectList()
      }
      this.$refs.email.dialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card{
  width: 400px;
  border-radius: 10px;

  .card-header{
    font-size: 15px;
    font-weight: bold;
  }

  .card-avatar-div{
    text-align: center;

    .card-avatar{
      width: 100px;
      height: 100px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
  }

  .user-info {
    padding-left: 0;
    list-style: none;
    li{
      border-bottom: 1px solid #F0F3F4;
      padding: 11px 0;
      font-size: 13px;
    }
    .user-right {
      float: right;
      font-size: 14px;

      a{
        color: #317EF3;
      }
    }
  }
}
</style>
