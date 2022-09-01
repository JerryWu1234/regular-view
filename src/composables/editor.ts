import type { DecorationSet, ViewUpdate } from '@codemirror/view'
import { Decoration, lineNumbers } from '@codemirror/view'
import { EditorView } from 'codemirror'
import { Compartment, EditorSelection, EditorState, StateEffect, StateField } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
import type { Ref } from 'vue'
import type Editor from '../components/Editor.vue'
import { regularValue } from '../composables/index'
type Props = InstanceType<typeof Editor>['$props']

const lineWrappingComp = funcLineWrapping()
const lineNumbersComp = funcLineWrapping()
const addUnderline = StateEffect.define<{ from: number; to: number }>({
  map: ({ from, to }, change) => ({ from: change.mapPos(from), to: change.mapPos(to) }),
})
const underlineMark = Decoration.mark({ class: 'cm-underline' })
const underlineTheme = EditorView.baseTheme({
  '.cm-underline': { textDecoration: 'underline 3px red' },
})

const underlineField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none
  },
  update(underlines, tr) {
    underlines = underlines.map(tr.changes)
    for (const e of tr.effects) {
      if (e.is(addUnderline)) {
        underlines = underlines.update({
          add: [underlineMark.range(e.value.from, e.value.to)],
        })
      }
    }
    return underlines
  },
  provide: f => EditorView.decorations.from(f),
})

function underlineSelection(view: EditorView, rangeList: any[]) {
  const effects: StateEffect<unknown>[] = rangeList
    .map(({ from, to }) => addUnderline.of({ from, to }))
  if (!effects.length)
    return false

  if (!view.state.field(underlineField, false)) {
    effects.push(StateEffect.appendConfig.of([underlineField,
      underlineTheme]))
  }
  view.dispatch({ effects })
  return true
}

function edior(value: Ref<string>, name: Ref<HTMLElement>, props: Props) {
  const extensions = [
    lineNumbersComp.of([]),
    lineWrappingComp.of([]),
    javascript(),
  ]
  if (props.readonly)
    extensions.push(EditorState.readOnly.of(true))

  const view = new EditorView({
    extensions: [
      EditorView.updateListener.of((v: ViewUpdate) => {
        if (v.docChanged && value.value !== view.state.doc.toString())
          value.value = view.state.doc.toString()
      }),
      ...extensions,
    ],

    doc: value.value,
    parent: name.value,
  })

  return view
}

export const initEdior = (value: Ref<any>, name: Ref<HTMLElement>, props: Props) => {
  onMounted(() => {
    const ediorInstance = edior(value, name, props)
    watch(() => props.lineNumbers, (v) => {
      ediorInstance.dispatch({
        effects: lineNumbersComp.reconfigure(v ? lineNumbers() : []),
      })
    })

    watch(() => props.lineWrapping, (v) => {
      ediorInstance.dispatch({
        effects: lineWrappingComp.reconfigure(v ? EditorView.lineWrapping : []),
      })
    }, { immediate: true })

    watch(() => props.modelValue, (v) => {
      ediorInstance.dispatch({
        changes: { from: 0, to: ediorInstance.state.doc.length, insert: v },
      })
    }, { immediate: true })

    watch(() => props.matches, (list: Array<RegExpMatchArray>) => {
      if (props.matches?.length > 0 && regularValue.value)
        underlineSelection(ediorInstance, list)
    })
    watch(regularValue, () => {
      if (props.matches?.length > 0) {
        ediorInstance.dispatch({
          changes: { from: 0, to: ediorInstance.state.doc.length, insert: props.modelValue },
        })
      }
    })
  })
}

function funcLineWrapping() {
  const lineWrappingComp = new Compartment()
  return lineWrappingComp
}
