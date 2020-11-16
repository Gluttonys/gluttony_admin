<template>
  <FlowDesignTCD :edgeModel.sync="edgeModel"
                 :nodeModel.sync="nodeModel"
                 class="editor"
                 @save="handleSave">
    <template v-slot:node>
      <div class="form-wrap">
        <el-form :model="nodeModel" label-position="left" size="mini" label-width="20%">
          <el-form-item label="节点标签">
            <el-input v-model="nodeModel.label"></el-input>
          </el-form-item>
          <el-form-item label="其它数据">
            <el-input
                type="textarea"
                :rows="3"
                v-model="nodeModel.handleNode"
            />
          </el-form-item>
        </el-form>
      </div>
    </template>
    <template v-slot:edge>
      <div class="form-wrap">
        <el-form :model="edgeModel" label-position="left" size="mini" label-width="20%">
          <el-form-item label="连线标签">
            <el-input v-model="edgeModel.label"></el-input>
          </el-form-item>
          <el-form-item label="其它数据">
            <el-input
                type="textarea"
                :rows="3"
                v-model="edgeModel.props"
            />
          </el-form-item>
        </el-form>
      </div>
    </template>

  </FlowDesignTCD>
</template>

<script>
export default {
  name: 'processEditor',
  data() {
    return {
      nodeModel: {
        label: '',//该属性必须定义
        handleNode: '',
      },
      edgeModel: {
        label: '',//该属性必须定义
        props: ''
      },
    }
  },
  methods: {
    handleSave(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  background-image: #eee;

  .form-wrap {
    margin: 20px auto 0;
    width: 90%;
  }

  &::v-deep header.button-control {
    background-image: inherit !important;
  }

  &::v-deep .panel-right-wrap .node_id {
    background-color: #393b3a !important;
    color:            $gold !important;
  }

  &::v-deep .el-form-item__label {
    letter-spacing: 4px;
    color: $gold !important;
  }

}
</style>
