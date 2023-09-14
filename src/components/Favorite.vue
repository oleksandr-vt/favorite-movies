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

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

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

  &__text {
    font-size: 22px;
    text-align: center;

    a {
      display: inline;
      color: $colorGold;
      text-decoration: underline;
    }
  }
}
</style>