import type { ViewUpdate } from '@codemirror/view'
import { lineNumbers } from '@codemirror/view'
import { EditorView } from 'codemirror'
import { Compartment } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'

import type { Ref } from 'vue'
import type Editor from '../components/Editor.vue'
type Props = InstanceType<typeof Editor>['$props']

const lineWrappingComp = funcLineWrapping()
const lineNumbersComp = funcLineWrapping()
function edior(value: Ref<string>, name: Ref<HTMLElement>) {
  const view = new EditorView({
    extensions: [
      lineNumbersComp.of([]),
      lineWrappingComp.of([]),
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

export const initEdior = (value: Ref<any>, name: Ref<HTMLElement>, props: Props) => {
  onMounted(() => {
    const ediorInstance = edior(value, name)

    watch(() => props.lineNumbers, (v) => {
      ediorInstance.dispatch({
        effects: lineNumbersComp.reconfigure(v ? lineNumbers() : []),
      })
    })

    watch(() => props.lineWrapping, (v) => {
      ediorInstance.dispatch({
        effects: lineWrappingComp.reconfigure(v ? EditorView.lineWrapping : []),
      })
    })
  })
}

function funcLineWrapping() {
  const lineWrappingComp = new Compartment()
  return lineWrappingComp
}
