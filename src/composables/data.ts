export const regularValue = ref('')
export const signal = ref('gm')
export const replaceValue = ref('')
export const index = ref(0)
export const context = ref('')
export const leftNumberline = ref(false)
export const rightNumberline = ref(false)
export const leftLineWrapping = ref(true)
export const rightLineWrapping = ref(true)
export const repleaceState = ref(false)
export const onLeftLineWrapping = useToggle(leftLineWrapping)
export const onRightLineWrapping = useToggle(rightLineWrapping)
export const onLeftNumberline = useToggle(leftNumberline)
export const onRightNumberline = useToggle(rightNumberline)
export const onRepleaceNavChange = useToggle(repleaceState)
export const ondeleteContext = () => {
  context.value = ''
}

export const ondeleteRegularValue = () => {
  regularValue.value = ''
  replaceValue.value = ''
}

const throttleFind = useDebounce(regularValue, 300)

const findReg = computed(() => {
  try {
    return new RegExp(throttleFind.value, signal.value)
  }
  catch (e) {
    console.error(e)
  }
})

const getMathAllList = () => {
  const list = []
  for (const item of context.value.matchAll(findReg.value as RegExp))
    list.push(item)

  return list
}

export const matchResult = computed(() => {
  getMathAllList().filter(i => !i).map(i => i?.[0]).join('\n')
})

export const matchesList = computed(() => Array.from(context.value.matchAll(findReg.value as RegExp)))

export const fullResult = computed(() => {
  if (repleaceState.value)
    return context.value.replaceAll(findReg.value as RegExp, replaceValue.value)
  else return Array.from(context.value.matchAll(findReg.value as RegExp)).map(i => i?.[index.value]).filter(i => i != null).join('\n')
})
