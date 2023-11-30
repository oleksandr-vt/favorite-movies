<script setup>
import { RouterLink } from 'vue-router'
import { formatResults } from '~/assets/js/helpers.js'
import LoadingSpinner from './LoadingSpinner.vue'
import Title from './Title.vue'

defineProps({
  title: {
    type: String,
    required: false
  },
  totalResults: {
    type: Number,
    required: false
  },
  isLoading: {
    type: Boolean,
    required: false
  },
  isError: {
    type: Boolean,
    required: false
  },
  errorMessage: {
    type: String,
    required: false
  },
  moviesLength: {
    type: Number,
    required: false
  },
  hasLinkToSearch: {
    type: Boolean,
    required: false
  },
})
</script>

<template>
  <div class="block">
    <div class="block__loader" v-if="isLoading">
      <LoadingSpinner />
    </div>

    <p class="block__text" v-if="isError && errorMessage">
      {{ errorMessage }}
      <RouterLink v-if="hasLinkToSearch" to="/search">here</RouterLink>
    </p>

    <Title v-if="!isLoading && moviesLength > 0" :title="title"
      :totalResults="totalResults ? formatResults(totalResults) : null" />

    <div class="block__list" v-if="!isLoading && moviesLength > 0">
      <slot name="movies"></slot>
    </div>

    <slot name="pagination"></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

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