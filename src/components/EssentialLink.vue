<template>
  <div
    m="20"
    p="20"
    text="center bold 24"
  >
    {{ $t('navi.title') }}
  </div>
  <q-list
    bordered
    separator
  >
    <q-item
      v-ripple
      flex="row items-center"
      clickable
      to="/"
    >
      <div
        class="i-uil:home"
        w="24"
        h="24"
        m="r-20"
      />
      <q-item-section>{{ $t('navi.home') }}</q-item-section>
    </q-item>

    <q-item
      v-ripple
      flex="row items-center"
      clickable
      to="/markdownpage"
    >
      <div
        class="i-uil:medium-m"
        w="24"
        h="24"
        m="r-20"
      />
      <q-item-section>
        Markdown
      </q-item-section>
    </q-item>

    <q-item
      v-ripple
      flex="row items-center"
      clickable
      to="/404"
    >
      <div
        class="i-uil:exclamation-triangle"
        w="24"
        h="24"
        m="r-20"
      />
      <q-item-section>
        404
      </q-item-section>
    </q-item>
  </q-list>
</template>