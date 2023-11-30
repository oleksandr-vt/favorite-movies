import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore("movieStore", () => {
  const movie = ref({})

  const addMovie = (mov) => {
    movie.value = mov
  }

  return { movie, addMovie }
}, { persist: true })