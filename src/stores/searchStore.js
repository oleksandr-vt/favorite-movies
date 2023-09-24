import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useFavoriteStore } from './favoriteStore'
const url = `${import.meta.env.VITE_API_SEARCH_URL}?api_key=${import.meta.env.VITE_API_KEY}`

export const useSearchStore = defineStore("searchStore", () => {
  const movies = ref([])
  const isLoading = ref(false)
  const isError = ref(false)
  const searchStr = ref('')
  const isNewSearchStr = ref(false)
  const totalPages = ref(0)
  const totalResults = ref(0)

  const getMovies = async ({ str, page = 1, isNewStr = false }) => {
    if (str.length < 2) return

    if (isNewStr) isNewSearchStr.value = true

    isError.value = false
    isLoading.value = true
    searchStr.value = str

    const res = await fetch(`${url}&query=${str}&page=${page}`)

    const data = await res.json()
    movies.value = data.results
    totalPages.value = data.total_pages
    totalResults.value = data.total_results

    isLoading.value = false
    isNewSearchStr.value = false
    if (movies.value.length < 1) isError.value = true
  }

  const addToFavorites = (movie) => {
    const favoriteStore = useFavoriteStore()
    if (favoriteStore.movies.find(el => el.id === movie.id)) return
    favoriteStore.movies.push({ ...movie, isWatched: false })
  }

  return { movies, isLoading, isError, searchStr, isNewSearchStr, totalPages, totalResults, getMovies, addToFavorites }
})