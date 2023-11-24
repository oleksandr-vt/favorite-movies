<script setup>
import { useSearchStore } from '@/stores/searchStore'
import { useFavoriteStore } from '@/stores/favoriteStore'
import { useMovieStore } from '@/stores/movieStore'
import MovieInfo from '@/components/MovieInfo.vue'

const searchStore = useSearchStore()
const favoriteStore = useFavoriteStore()
const movieStore = useMovieStore()

const isMovieFavorite = (id) => {
  return !!favoriteStore.movies.find(el => el.id === id)
}
</script>

<template>
  <main>
    <div class="container">
      <MovieInfo :movie="movieStore.movie" :isMovieFavorite="(m) => isMovieFavorite(m)"
        :onAddToFavorites="(m) => searchStore.addToFavorites(m)" />
    </div>
  </main>
</template>