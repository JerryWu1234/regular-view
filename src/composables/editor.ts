import type { ViewUpdate } from '@codemirror/view'
import { EditorView } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import type { Ref } from 'vue'
function edior(value: Ref<string>, name: Ref<HTMLElement>) {
  const view = new EditorView({
    extensions: [
      EditorView.updateListener.of((v: ViewUpdate) => {
        if (v.docChanged)
          value.value = view.state.doc.toString()
      }),
      javascript(),
    ],
    doc: value.value,
    parent: name.value,
  })
  return view
}

export const initEdior = (value: Ref<any>, name: Ref<HTMLElement>) => {
  onMounted(() => {
    edior(value, name)
  })
}
