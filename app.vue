<script setup>
import { useGenresStore } from '~/stores/genresStore'

const genresStore = useGenresStore()

onBeforeMount(() => {
  genresStore.getGenres()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
