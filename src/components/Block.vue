<script setup>
import { RouterLink } from 'vue-router'
import LoadingSpinner from './LoadingSpinner.vue'
import Movie from './Movie.vue'
import Title from './Title.vue'

defineProps({
  movies: {
    type: Array,
    required: true,
    default: () => []
  },
  watchedMovies: {
    type: Array,
    required: false,
    default: () => []
  },
  searchStr: {
    type: String,
    required: false
  },
  storeName: {
    type: String,
    required: false,
  },
  isLoader: {
    type: Boolean,
    required: false
  },
  isFallback: {
    type: Boolean,
    required: false
  },
})
</script>

<template>
  <div class="block">
    <template v-if="storeName === 'favoriteStore'">
      <template v-if="movies.length > 0">
        <Title :title="'Favorite Movies'" :hasSpacing="true" />

        <div class="block__list">
          <Movie v-for="(movie, index) in movies" :key="movie.id" :movie="movie" :storeName="storeName" />
        </div>
      </template>

      <template v-else>
        <p class="block__text">
          No favorite movies yet. Find and add them <RouterLink to="/search">here</RouterLink>
        </p>
      </template>

      <template v-if="watchedMovies.length > 0">
        <Title :title="'Watched Movies'" :hasSpacing="true" />

        <div class="block__list">
          <Movie v-for="(movie, index) in watchedMovies" :key="movie.id" :movie="movie" :storeName="storeName" />
        </div>
      </template>
    </template>

    <template v-if="storeName === 'searchStore'">
      <div class="block__loader" v-if="isLoader">
        <LoadingSpinner />
      </div>

      <template v-if="!isLoader && movies.length > 0">
        <Title :title='`Search results for "${searchStr}"`' :hasSpacing="true" />

        <div class="block__list">
          <Movie v-for="(movie, index) in movies" :key="movie.id" :movie="movie" :storeName="storeName" />
        </div>
      </template>

      <p class="block__text" v-if="isFallback">
        No results found for "{{ searchStr }}"
      </p>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.block {
  &__loader {
    display: flex;
    justify-content: center;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 50px;
    gap: 20px;

    @media (max-width: $breakpoint1024) {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    @media (max-width: $breakpoint768) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $breakpoint576) {
      gap: 15px;
    }

    @media (max-width: $breakpoint400) {
      grid-template-columns: 1fr;
    }
  }

  &__text {
    font-size: 22px;
    text-align: center;

    @media (max-width: $breakpoint576) {
      font-size: 18px;
    }

    a {
      display: inline;
      color: $colorGold;
      text-decoration: underline;
    }
  }
}
</style>