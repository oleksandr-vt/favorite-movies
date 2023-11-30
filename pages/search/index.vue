<script setup>
import { useRouter } from 'vue-router'
import { useSearchStore } from '~/stores/searchStore'
import { useFavoriteStore } from '~/stores/favoriteStore'
import { useMovieStore } from '~/stores/movieStore'
import { MOVIE_TYPE } from '~/const/index.js'
import Block from '~/components/Block.vue'
import SearchForm from '~/components/SearchForm.vue'
import MovieCard from '~/components/MovieCard.vue'
import Pagination from '~/components/Pagination.vue'

const searchStore = useSearchStore()
const favoriteStore = useFavoriteStore()
const movieStore = useMovieStore()

const router = useRouter()

const isMovieFavorite = (id) => {
  return !!favoriteStore.movies.find(el => el.id === id)
}

const openMovie = (mov) => {
  movieStore.addMovie(mov)
  router.push({ name: 'movie', params: { id: mov.id } })
}
</script>

<template>
  <main>
    <div class="container">
      <SearchForm :onHideError="() => searchStore.isError = false"
        :onGetMovies="(str) => searchStore.getMovies({ str: str.trim(), isNewStr: true })"
        :searchStr="searchStore.searchStr" />

      <Block :title='`Search results for "${searchStore.searchStr}"`' :totalResults="searchStore.totalResults"
        :isLoading="searchStore.isLoading" :isError="searchStore.isError"
        :errorMessage='`No results found for "${searchStore.searchStr}"`' :moviesLength="searchStore.movies.length">
        <template #movies>
          <MovieCard v-for="(movie) in searchStore.movies" :key="movie.id" :movie="movie" :movieType="MOVIE_TYPE.REGULAR"
            @click="openMovie(movie)" :onAddToFavorites="(m) => searchStore.addToFavorites(m)"
            :isMovieFavorite="(m) => isMovieFavorite(m)" />
        </template>

        <template #pagination v-if="searchStore.totalPages > 1 && !searchStore.isNewSearchStr">
          <Pagination :totalPages="searchStore.totalPages" />
        </template>
      </Block>
    </div>
  </main>
</template>