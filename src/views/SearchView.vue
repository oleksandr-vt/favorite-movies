<script setup>
import { useSearchStore } from '@/stores/searchStore'
import Block from '@/components/Block.vue'
import SearchForm from '@/components/SearchForm.vue'

const searchStore = useSearchStore()
</script>

<template>
  <main>
    <div class="container">
      <SearchForm @hide-fallback="searchStore.fallback = false"
        @get-movies="(str) => searchStore.getMovies({ str, isNewStr: true })" />
      <Block :isLoader="searchStore.loader" :isFallback="searchStore.fallback" :movies="searchStore.movies"
        :searchStr="searchStore.searchStr" :totalResults="searchStore.totalResults" :totalPages="searchStore.totalPages"
        :storeName="searchStore.$id" :isNewStr="searchStore.isNewSearchStr" />
    </div>
  </main>
</template>