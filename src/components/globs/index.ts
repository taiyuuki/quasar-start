import type { App, Component } from 'vue'

// the *.vue in globs are global components
const globs = Object.values(import.meta.globEager('./**/*.vue')) as {
  default: Component
}[]
export default {
  install(app: App) {
    if (globs.length > 0) {
      globs.forEach((compImport) => {
        const comp = compImport.default
        app.component(comp.name as string, comp)
      })
    }
  },
}