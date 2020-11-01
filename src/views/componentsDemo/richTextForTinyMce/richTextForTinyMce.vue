<template>
  <div class="rich_text_for_tinyMce">
    <tiny-mce v-model="content" :height="300"></tiny-mce>

    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import tinyMce from '@/components/Tinymce'

export default {
  name: 'richTextForTinyMce',
  components: {
    tinyMce
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "richTextForTinyMce";
</style>
