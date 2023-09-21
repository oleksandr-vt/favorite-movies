<script setup>
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import LoadingSpinner from './LoadingSpinner.vue'
import MovieCard from './MovieCard.vue'
import Title from './Title.vue'
import Pagination from './Pagination.vue'

const props = defineProps({
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
    required: false
  },
  isLoader: {
    type: Boolean,
    required: false
  },
  isFallback: {
    type: Boolean,
    required: false
  },
  totalResults: {
    type: Number,
    required: false
  },
  totalPages: {
    type: Number,
    required: false
  },
  isNewStr: {
    type: Boolean,
    required: false,
  }
})

const movieStore = useMovieStore()

const router = useRouter()
const route = useRoute()

const formattedResults = (res) => {
  return res > 1 ? `(${res} results)` : `(${res} result)`
}

const openMovie = (mov) => {
  movieStore.addMovie(mov)
  router.push({ name: 'movie', params: { id: mov.id } })
}
</script>

<template>
  <div class="block">
    <template v-if="storeName === 'favoriteStore'">
      <template v-if="movies.length > 0">
        <Title :title="'Favorite Movies'" :hasSpacing="true" />

        <div class="block__list">
          <MovieCard v-for="(movie, index) in movies" :key="movie.id" :movie="movie" :storeName="storeName"
            @click="openMovie(movie)" />
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
          <MovieCard v-for="(movie, index) in watchedMovies" :key="movie.id" :movie="movie" :storeName="storeName"
            @click="openMovie(movie)" />
        </div>
      </template>
    </template>

    <template v-if="storeName === 'searchStore'">
      <div class="block__loader" v-if="isLoader">
        <LoadingSpinner />
      </div>

      <Title v-if="!isLoader && movies.length > 0" :title='`Search results for "${searchStr}"`' :hasSpacing="true"
        :totalResults="formattedResults(totalResults)" />

      <div class="block__list" v-if="!isLoader && movies.length > 0">
        <MovieCard v-for="(movie, index) in movies" :key="movie.id" :movie="movie" :storeName="storeName"
          @click="openMovie(movie)" />
      </div>

      <Pagination v-if="totalPages > 1 && !isNewStr" :totalPages="totalPages" />

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
    margin-bottom: 50px;
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