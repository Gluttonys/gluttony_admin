<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="`通知 (${InformList.length})`" name="inform">
        <card-wrapper v-for="(item, index) in InformList" :key="index">
          <card-inform :data="item"></card-inform>
        </card-wrapper>
      </el-tab-pane>
      <el-tab-pane :label="`消息 (${MessList.length})`" name="mess">
        <card-wrapper v-for="(item, index) in MessList" :key="index">
          <card-mess :data="item"></card-mess>
        </card-wrapper>
      </el-tab-pane>
      <el-tab-pane :label="`待办 (${TaskList.length})`" name="task">
        <card-wrapper v-for="(item, index) in TaskList" :key="index">
          <card-task :data="item"></card-task>
        </card-wrapper>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CardWrapper from '@/components/cardWrapper/CardWrapper'

import CardInform from '@/components/cardInform/CardInform'
import CardMess from '@/components/cardMess/CardMess'
import CardTask from '@/components/cardTask/CardTask'


export default {
  name: 'Inform',
  components: {
    CardWrapper,
    CardInform,
    CardMess,
    CardTask
  },
  data() {
    return {
      activeName: 'inform',
      InformList: [
        {type: 'type-1', content: '测试'.repeat(20), date: '2020 11 16'},
        {type: 'type-2', content: '测试'.repeat(20), date: '2020 11 17'},
        {type: 'type-3', content: '测试'.repeat(20), date: '2020 11 18'},
        {type: 'type-4', content: '测试'.repeat(20), date: '2020 11 19'},
        {type: 'type-4', content: '测试'.repeat(20), date: '2020 11 20'},
        {type: 'type-3', content: '测试'.repeat(20), date: '2020 11 21'},
        {type: 'type-2', content: '测试'.repeat(20), date: '2020 11 22'},
        {type: 'type-1', content: '测试'.repeat(20), date: '2020 11 23'},
      ],
      MessList: [
        {
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605596067469&di=f9b3245d81abf1f8ef25d4db1805b4c9&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F5301ff11ly1gb58jwjhikj20p00p0q4l.jpg',
          title: '这是一个测试标题',
          content: '测试'.repeat(20),
          date: '2020 11 16'
        },
        {
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605596067469&di=f9b3245d81abf1f8ef25d4db1805b4c9&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F5301ff11ly1gb58jwjhikj20p00p0q4l.jpg',
          title: '这是一个测试标题',
          content: '测试'.repeat(20),
          date: '2020 11 16'
        },
        {
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605596067469&di=f9b3245d81abf1f8ef25d4db1805b4c9&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F5301ff11ly1gb58jwjhikj20p00p0q4l.jpg',
          title: '这是一个测试标题',
          content: '测试'.repeat(20),
          date: '2020 11 16'
        },
        {
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605596067469&di=f9b3245d81abf1f8ef25d4db1805b4c9&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F5301ff11ly1gb58jwjhikj20p00p0q4l.jpg',
          title: '这是一个测试标题',
          content: '测试'.repeat(20),
          date: '2020 11 16'
        }
      ],
      TaskList: [
        {title: "测试标题内容", content: '测试'.repeat(20), status: "未开始"},
        {title: "测试标题内容", content: '测试'.repeat(20), status: "进行中"},
        {title: "测试标题内容", content: '测试'.repeat(20), status: "马上到期"},
        {title: "测试标题内容", content: '测试'.repeat(20), status: "已耗时8天"},
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "inform";
</style>
