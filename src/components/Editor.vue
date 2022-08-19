<script setup lang='ts'>
import { initEdior } from '../composables'
const props = defineProps<{
  modelValue: String
}>()
const editor = ref()
const text = useVModel(props, 'modelValue')
initEdior(text, editor)
</script>

<template>
  <div ref="editor" />
</template>

<style lang="css">
.cm-focused {
  outline: none !important;
}
.cm-editor{
  overflow: hidden;
  height: 100%;
}
</style>
