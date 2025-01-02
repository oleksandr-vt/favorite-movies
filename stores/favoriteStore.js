import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore("favoriteStore", () => {
  const movies = ref([])

  const watchedMovies = computed(() => {
    return movies.value.filter(el => el.isWatched)
  })

  const toggleWatch = (id) => {
    const idx = movies.value.findIndex(el => el.id === id)
    movies.value[idx].isWatched = !movies.value[idx].isWatched
  }

  const deleteMovie = (id) => {
    movies.value = movies.value.filter(el => el.id !== id)
  }

  return { movies, watchedMovies, toggleWatch, deleteMovie }
}, { persist: true })