import { defineStore } from 'pinia'
import type { WritableComputedRef } from 'vue'

export const useLang = defineStore('lang', {
  state: () => ({ value: false }),
  actions: {
    setLang(local: WritableComputedRef<unknown>) {
      local.value = this.value ? 'zh-CN' : 'en-US'
    },
  },
  persist: true,
})