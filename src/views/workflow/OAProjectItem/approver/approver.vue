<template>
  <div class="approver">
    <el-transfer
        filterable
        :filter-method="filterMethod"
        :titles="['预选', '审查人']"
        :button-texts="['移除', '添加']"
        filter-placeholder="请输入审核人拼音"
        v-model="value"
        :data="data">
    </el-transfer>
  </div>
</template>

<script>
export default {
  name: 'approver',
  data() {
    const generateData = () => {
      const data = [];
      const cities = ['技术部小李', '技术部小王', '部门主管', '小组长', '朱总监', '李副总', '吕经理'];
      const pinyin = ['xiaoli', 'xiaowang', 'bumenzhuguan', 'xiaozuzhang', 'zhuzongjian', 'lifuzong', 'lvjingli'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    };
  }
}
</script>

<style lang="scss" scoped>
@import "approver";
</style>
