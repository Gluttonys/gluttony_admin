<template>
  <div class="info_panel">
    <el-tabs v-model="activeName" @tab-click="handleTabChange">

      <el-tab-pane label="最新消息" name="news">
        <mess-card :mess-data="card" v-for="card in newsList" :key="card.id"></mess-card>
      </el-tab-pane>

      <el-tab-pane label="时间线" name="timeline">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-tab-pane>

      <el-tab-pane label="账号" name="account">
        <el-form v-model="accountData" :rules="rules" ref="accountForm" label-width="50px">
          <el-form-item label="姓名" prop="name">
            <el-input clearable v-model="accountData.name"></el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input v-model="accountData.email"></el-input>
          </el-form-item>

          <el-button size="mini" type="primary" @click="submitForm('accountForm')">立即创建</el-button>
        </el-form>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import messCard from '@/components/messCard/messCard'
import {validateEmail} from '@/utils/validate'
import {getLatestNews} from '@/network/common'

export default {
  name: 'infoPanel',
  data() {
    let validateFormEmail = (rule, value, callback) => {  /* 自定义校验规则 */
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        if (this.accountData.email !== '' && validateEmail(value)) {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    return {
      activeName: 'news',

      newsList: [],

      accountData: {
        name: '',
        email: ''
      },

      /* element 自带的校验规则 */
      rules: {
        name: [
          {required: true, message: '请输入用户名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        email: [
          {validator: validateFormEmail /* 自定义校验规则 */ , trigger: 'blur'},
          {required: true, message: '请输入邮箱', trigger: 'blur'},
        ]
      }

    }
  },

  created() {
    this.initLatestNews()
  },

  components: {
    messCard
  },
  methods: {
    async initLatestNews() {
      const {newsList} = await getLatestNews()
      this.newsList = newsList
    },
    handleTabChange(tab, event) {
      console.log('tab栏切换', tab, event)
    },
    submitForm(formName) {
      /* element 表单验证成功回调 */
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('数据验证成功！')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "infoPanel";
</style>
