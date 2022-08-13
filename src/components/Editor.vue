<script setup lang='ts'>
import { EditorSelection, EditorState } from '@codemirror/state'
import type { ViewUpdate } from '@codemirror/view'
import { EditorView } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const editor = ref<HTMLTextAreaElement>()
onMounted(() => {
  const view = new EditorView({
    extensions: [
      EditorView.updateListener.of((v: ViewUpdate) => {
        if (v.docChanged)
          emit('update:modelValue', props.modelValue)
      }),
      // basicSetup,
      javascript(),
    ],
    doc: '23232',
    parent: editor.value!,
  })
  // view.dispatch({
  //   selection: EditorSelection.create([
  //     EditorSelection.range(0, 2),
  //     EditorSelection.range(6, 9),
  //     EditorSelection.cursor(18),
  //   ], 1),

  // })
  // view.dispatch(view.state.selection.replaceRange('★'))
  // view.dispatch(view.state.replaceSelection('★'))
  // console.log(view.state.doc.toJSON()[0])

  // EditorSelection

  // const v = EditorSelection.rand

  // view.
  // console.log(view.state.selection.addRange())
  // view.state.selection.replaceRange()
})
</script>

<template>
  <div ref="editor" />
</template>

<style lang="css">
.cm-focused {
  outline: none!important;
}
</style>
