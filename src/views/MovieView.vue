<script setup>
import { useMovieStore } from '@/stores/movieStore'
import MovieInfo from '@/components/MovieInfo.vue'

const movieStore = useMovieStore()
</script>

<template>
  <main>
    <div class="container">
      <MovieInfo :movie="movieStore.movie" />
    </div>
  </main>
</template>