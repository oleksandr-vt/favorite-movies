import { defineStore } from 'pinia'

const url = `${import.meta.env.VITE_API_GENRE_URL}?api_key=${import.meta.env.VITE_API_KEY}`

export const useGenresStore = defineStore("genresStore", () => {
  const genres = ref([])

  const getGenres = async () => {
    const res = await fetch(url)
    const data = await res.json()
    genres.value = data.genres
  }

  return { genres, getGenres }
})