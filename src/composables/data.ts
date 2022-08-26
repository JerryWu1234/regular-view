export const regularValue = ref('')
export const signal = ref('gm')
export const replaceValue = ref('')
export const fullResult = ref('')
export const context = ref('')
export const leftNumberline = ref(false)
export const rightNumberline = ref(false)
export const lineWrapping = ref(false)

export const onLineWrapping = useToggle(lineWrapping)
export const onLeftNumberline = useToggle(leftNumberline)
export const onRightNumberline = useToggle(rightNumberline)
export const ondeleteContext = () => {
  context.value = ''
}

export const ondeleteRegularValue = () => {
  regularValue.value = ''
  replaceValue.value = ''
}
