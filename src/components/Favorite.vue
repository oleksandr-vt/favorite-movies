<script setup>
import { useMovieStore } from '@/stores/MovieStore'
import Movie from './Movie.vue'

const movieStore = useMovieStore()
</script>

<template>
  <!-- Favorite Movies -->
  <div class="block">
    <div class="container">
      <h2 class="block__title title">Favorite Movies</h2>

      <div class="block__list">
        <Movie v-for="(movie, index) in movieStore.movies" :key="index" :movie="movie" />
      </div>
    </div>
  </div>

  <!-- Watched Movies -->
  <div class="block">
    <div class="container">
      <h2 class="block__title title">Watched Movies</h2>

      <div class="block__list">
        <Movie v-for="(movie, index) in movieStore.watchedMovies" :key="index" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  padding-bottom: 50px;

  &__title {
    margin-bottom: 25px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}
</style>