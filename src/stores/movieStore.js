import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([])

  const moviesInLocalStorage = localStorage.getItem('movies')
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)._value
  }

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

  watch(() => movies, (state) => {
    localStorage.setItem('movies', JSON.stringify(state))
  }, { deep: true })

  return { movies, watchedMovies, toggleWatch, deleteMovie }
})