<template>
  <div class="info_panel">
    <el-tabs v-model="activeName" @tab-click="handleTabChange">
      <el-tab-pane label="最新消息" name="news">
        <mess-card :mess-data="testData" v-for="card in 5" :key="card"></mess-card>
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
        账号信息
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import messCard from '@/components/messCard/messCard'

export default {
  name: 'infoPanel',
  data() {
    return {
      activeName: 'news',
      testData: {
        avatarImagePath: 'https://img.ui.cn/data/file/8/7/1/414178.gif',
        name: '钢铁侠',
        time: new Date(),
        mess: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipisicing elit. Ab ipsa, modi ' +
            'nulla perspiciatis placeat quibusdam quis' +
            ' reprehenderit repudiandae sequi, soluta, ' +
            'tempore temporibus voluptatem voluptates. ' +
            'Eos harum magnam maxime nam, nulla omnis recusandae' +
            ' rem. Accusantium amet animi atque corporis culpa' +
            ' deleniti earum error esse eveniet illum inventore ' +
            'ipsa ipsum minus mollitia nostrum obcaecati odio perferendis' +
            ' placeat porro possimus quaerat quia quos reprehenderit' +
            ' sapiente sit temporibus totam, ' +
            'ut vel vitae voluptate voluptates?'
      }
    }
  },
  components: {
    messCard
  },
  methods: {
    handleTabChange(tab, event) {
      console.log("tab栏切换", tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "infoPanel";
</style>
