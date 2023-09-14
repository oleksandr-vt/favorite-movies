<script setup>
import { ref } from 'vue'
import { useSearchStore } from '@/stores/searchStore'
import LoadingSpinner from './LoadingSpinner.vue'
import Movie from './Movie.vue'

const searchStore = useSearchStore()
const inputValue = ref('')
</script>

<template>
  <div class="container">
    <form class="search" @submit.prevent="searchStore.getMovies(inputValue)">
      <label for="search">
        <h6>Enter the name of the movie (in any language):</h6>
        <input v-model="inputValue" @input="searchStore.fallback = false" class="search__input" id="search" type="search"
          placeholder="Search..." minlength="3" maxlength="50">
      </label>
    </form>

    <div class="block">
      <div class="block__loader" v-if="searchStore.loader">
        <LoadingSpinner />
      </div>

      <template v-if="!searchStore.loader && searchStore.movies.length > 0">
        <h2 class="block__title title">Search results for "{{ searchStore.searchStr }}"</h2>

        <div class="block__list">
          <Movie v-for="(movie, index) in searchStore.movies" :key="movie.id" :movie="movie"
            :storeName="searchStore.$id" />
        </div>
      </template>

      <p class="block__text" v-if="searchStore.fallback === true">
        No results found for "{{ searchStore.searchStr }}"
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.search {
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  padding-bottom: 50px;

  @media (max-width: $breakpoint768) {
    padding-bottom: 40px;
  }

  label {
    display: block;
  }

  h6 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: $breakpoint576) {
      font-size: 15px;
    }
  }

  &__input {
    width: 100%;
    border-radius: 8px;
    border: 2px solid $colorLightGray;
    background: $colorWhite;
    color: $colorLightGray;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 16px;
  }
}
</style>