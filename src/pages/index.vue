<template>
  <q-page flex="row justify-evenly">
    <example-component />
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useMeta({ title: t('navi.home') })
</script>

<route lang="yaml">
  meta:
    layout: MainLayout
</route>