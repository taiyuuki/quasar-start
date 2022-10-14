<template>
  <div>
    <h1
      text="2rem center bold"
      m="10"
    >
      {{ $t('home.title') }}
    </h1>
    <Features />
  </div>
</template>

<script setup lang="ts">
import Features from 'src/md/Features.md'
</script>