<script setup>
import { useFavoriteStore } from '@/stores/favoriteStore'
import Block from '@/components/Block.vue'

const favoriteStore = useFavoriteStore()
</script>

<template>
  <main>
    <div class="container">
      <Block :movies="favoriteStore.movies" :watchedMovies="favoriteStore.watchedMovies" :storeName="favoriteStore.$id" />
    </div>
  </main>
</template>