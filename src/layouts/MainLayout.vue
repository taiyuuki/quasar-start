<template>
  <q-layout
    view="lHh Lpr lFf"
  >
    <q-header elevated>
      <q-toolbar
        text="color-fcolor"
        bg="color-theme"
      >
        <div
          class="i-uil:bars"
          w="24"
          h="24"
          hover="bg-color-positive"
          pointer
          @click="drawerLeft = !drawerLeft"
        />
        <q-toolbar-title>
          {{ $t('barTitle') }}
        </q-toolbar-title>
        <switch-btn
          v-model:value="lang.value"
          :size="24"
          left-icon="i-uil:letter-english-a"
          right-icon="i-uil:letter-chinese-a"
          m="r-20"
        />
        <switch-btn
          v-model:value="theme.dark"
          :size="24"
          left-icon="i-uil:sun"
          right-icon="i-uil:moon"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawerLeft"
      show-if-above
      :width="200"
      :breakpoint="1024"
      elevated
    >
      <essential-link />
    </q-drawer>

    <q-page-container>
      <div p="x-20">
        <router-view v-slot="{ Component, route }">
          <transition
            name="slide-fade"
            mode="out-in"
          >
            <component
              :is="Component"
              :key="route"
            />
          </transition>
        </router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useTheme } from 'stores/theme'
import { useLang } from 'stores/lang'
import { useI18n } from 'vue-i18n'

const theme = useTheme()
const lang = useLang()
const { locale } = useI18n({ useScope: 'global' })

theme.setTheme()
lang.setLang(locale)

theme.$subscribe(theme.setTheme)
lang.$subscribe(() => {
  lang.setLang(locale)
})

const drawerLeft = ref(false)
</script>

<style lang="scss">
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>