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
        <h6>Enter the name of the movie:</h6>
        <input v-model="inputValue" @input="searchStore.fallback = false" class="search__input" id="search" type="text"
          placeholder="Search..." minlength="3" maxlength="50">
      </label>
    </form>

    <div class="block">
      <div class="block__loader" v-if="searchStore.loader">
        <LoadingSpinner />
      </div>

      <template v-if="!searchStore.loader && searchStore.movies.length > 0">
        <h2 class="block__title title">Search results for "{{ inputValue }}"</h2>

        <div class="block__list">
          <Movie v-for="(movie, index) in searchStore.movies" :key="movie.id" :movie="movie"
            :storeName="searchStore.$id" />
        </div>
      </template>

      <p class="block__text" v-if="searchStore.fallback === true">
        No results found for "{{ inputValue }}"
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
  padding-bottom: 60px;

  label {
    display: block;
  }

  h6 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 600;
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

.block {
  padding-bottom: 50px;

  &__loader {
    display: flex;
    justify-content: center;
  }

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