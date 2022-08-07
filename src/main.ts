import routes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

export const _createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(MotionPlugin)
  },
)

