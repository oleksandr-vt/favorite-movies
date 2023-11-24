<script setup>
import { useRouter } from 'vue-router'
import { useFavoriteStore } from '@/stores/favoriteStore'
import { useMovieStore } from '@/stores/movieStore'
import { MOVIE_TYPE } from '@/const/index.js'
import Block from '@/components/Block.vue'
import MovieCard from '@/components/MovieCard.vue'

const favoriteStore = useFavoriteStore()
const movieStore = useMovieStore()

const router = useRouter()

const openMovie = (mov) => {
  movieStore.addMovie(mov)
  router.push({ name: 'movie', params: { id: mov.id } })
}
</script>

<template>
  <main>
    <div class="container">
      <Block :title="'Favorite Movies'" :isError="!favoriteStore.movies.length"
        :errorMessage="'No favorite movies yet. Find them '" :hasLinkToSearch="true"
        :moviesLength="favoriteStore.movies.length">
        <template #movies>
          <MovieCard v-for="(movie) in favoriteStore.movies" :key="movie.id" :movie="movie"
            :movieType="MOVIE_TYPE.FAVORITE" @click="openMovie(movie)"
            :onToggleWatch="(id) => favoriteStore.toggleWatch(id)"
            :onDeleteMovie="(id) => favoriteStore.deleteMovie(id)" />
        </template>
      </Block>

      <Block v-if="favoriteStore.watchedMovies.length > 0" :title="'Watched Movies'"
        :moviesLength="favoriteStore.movies.length">
        <template #movies>
          <MovieCard v-for="(movie) in favoriteStore.watchedMovies" :key="movie.id" :movie="movie"
            :movieType="MOVIE_TYPE.FAVORITE" @click="openMovie(movie)"
            :onToggleWatch="(id) => favoriteStore.toggleWatch(id)"
            :onDeleteMovie="(id) => favoriteStore.deleteMovie(id)" />
        </template>
      </Block>
    </div>
  </main>
</template>