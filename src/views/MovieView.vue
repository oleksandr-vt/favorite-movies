<script setup>
import { useSearchStore } from '@/stores/searchStore'
import { useFavoriteStore } from '@/stores/favoriteStore'
import { useMovieStore } from '@/stores/movieStore'
import { useGenresStore } from '@/stores/genresStore'
import MovieInfo from '@/components/MovieInfo.vue'

const searchStore = useSearchStore()
const favoriteStore = useFavoriteStore()
const movieStore = useMovieStore()
const genresStore = useGenresStore()

const isMovieFavorite = (id) => {
  return !!favoriteStore.movies.find(el => el.id === id)
}
</script>

<template>
  <main>
    <div class="container">
      <MovieInfo :movie="movieStore.movie" :isMovieFavorite="(m) => isMovieFavorite(m)"
        :onAddToFavorites="(m) => searchStore.addToFavorites(m)" :genres="genresStore.genres" />
    </div>
  </main>
</template>