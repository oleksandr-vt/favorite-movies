<script setup>
import { RouterLink } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import Movie from './Movie.vue'

const movieStore = useMovieStore()
</script>

<template>
  <!-- Favorite Movies -->
  <div class="block" v-if="movieStore.movies.length > 0">
    <div class="container">
      <h2 class="block__title title">Favorite Movies</h2>

      <div class="block__list">
        <Movie v-for="(movie, index) in movieStore.movies" :key="index" :movie="movie" :storeName="movieStore.$id" />
      </div>
    </div>
  </div>

  <div class="block" v-else>
    <div class="container">
      <p class="block__text">
        No favorite movies yet. Find and add them <RouterLink to="/search">here</RouterLink>
      </p>
    </div>
  </div>

  <!-- Watched Movies -->
  <div class="block" v-if="movieStore.watchedMovies.length > 0">
    <div class="container">
      <h2 class="block__title title">Watched Movies</h2>

      <div class="block__list">
        <Movie v-for="(movie, index) in movieStore.watchedMovies" :key="movie.id" :movie="movie"
          :storeName="movieStore.$id" />
      </div>
    </div>
  </div>
</template>