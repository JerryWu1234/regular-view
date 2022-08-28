<script setup lang='ts'>
import { initEdior } from '../composables'

const props = defineProps({
  modelValue: String,
  lineNumbers: Boolean,
  lineWrapping: Boolean,
  matches: Array,
})

const editor = ref()
const text = useVModel(props, 'modelValue')
initEdior(text, editor, props)
</script>

<template>
  <div ref="editor" />
</template>

<style lang="css">
.cm-focused {
  outline: none !important;
}

.cm-editor {
  height: 100%;
  /* overflow-y: auto; */
}
</style>
