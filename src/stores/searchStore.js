import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useFavoriteStore } from './favoriteStore'
const url = `${import.meta.env.VITE_API_SEARCH_URL}?api_key=${import.meta.env.VITE_API_KEY}`

export const useSearchStore = defineStore("searchStore", () => {
  const movies = ref([])
  const loader = ref(false)
  const fallback = ref(false)
  const searchStr = ref('')

  const getMovies = async (str) => {
    fallback.value = false
    loader.value = true
    searchStr.value = str

    const res = await fetch(`${url}&query=${str}`)
    const data = await res.json()
    movies.value = data.results

    loader.value = false
    if (movies.value.length < 1) fallback.value = true
  }

  const addToFavorites = (movie) => {
    const favoriteStore = useFavoriteStore()
    if (favoriteStore.movies.find(el => el.id === movie.id)) return
    favoriteStore.movies.push({ ...movie, isWatched: false })
  }

  return { movies, loader, fallback, searchStr, getMovies, addToFavorites }
})