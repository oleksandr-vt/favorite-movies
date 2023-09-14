import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMovieStore } from './movieStore'
const url = "https://api.themoviedb.org/3/search/movie?api_key=dfdcb281c851cc35c30f83224b622a8f&query="

export const useSearchStore = defineStore("searchStore", () => {
  const movies = ref([])
  const loader = ref(false)
  const fallback = ref(false)
  const searchStr = ref('')

  const getMovies = async (str) => {
    fallback.value = false
    loader.value = true
    searchStr.value = str
    localStorage.setItem('searchStr', str)

    const res = await fetch(`${url}${str}`)
    const data = await res.json()
    movies.value = data.results

    loader.value = false
    if (movies.value.length < 1) fallback.value = true
  }

  const addToFavorites = (movie) => {
    const movieStore = useMovieStore()
    if (movieStore.movies.find(el => el.id === movie.id)) return
    movieStore.movies.push({ ...movie, isWatched: false })
  }

  return { movies, loader, fallback, searchStr, getMovies, addToFavorites }
})