import { boot } from 'quasar/wrappers'
import globs from 'components/globs'
import { createHead } from '@vueuse/head'

export default boot(({ app }) => {
  // head
  const head = createHead()
  app.use(globs).use(head)
})