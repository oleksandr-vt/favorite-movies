<script setup>
import { onBeforeMount } from 'vue'
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router'
import { useGenresStore } from '@/stores/genresStore'

const genresStore = useGenresStore()

onBeforeMount(() => {
  genresStore.getGenres()
})
</script>

<template>
  <Header />
  <RouterView />
</template>