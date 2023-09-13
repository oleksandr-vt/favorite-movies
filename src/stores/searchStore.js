import { defineStore } from 'pinia'
import { useMovieStore } from './movieStore'
const url = "https://api.themoviedb.org/3/search/movie?api_key=dfdcb281c851cc35c30f83224b622a8f&query="

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    movies: [],
    loader: false,
  }),
  actions: {
    async getMovies(search) {
      this.loader = true
      const res = await fetch(`${url}${search}`)
      const data = await res.json()
      this.movies = data.results
      this.loader = false
    },
    addToFavorites(movie) {
      const movieStore = useMovieStore()
      movieStore.movies.push({ ...movie, isWatched: false })
    }
  }
})