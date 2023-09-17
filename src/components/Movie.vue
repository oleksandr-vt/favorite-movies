<script setup>
import { useFavoriteStore } from '@/stores/favoriteStore'
import { useSearchStore } from '@/stores/searchStore'
import Button from './Button.vue'

defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => { }
  },
  storeName: {
    type: String,
    required: false,
  }
})

const favoriteStore = useFavoriteStore()
const searchStore = useSearchStore()

const posterURL = import.meta.env.VITE_API_POSTER_URL

const formattedDate = (date) => {
  return date.split("-")[0]
}

const isMovieFavorite = (id) => {
  return !!favoriteStore.movies.find(el => el.id === id)
}
</script>

<template>
  <div class="movie">
    <img class="movie__img" :src="`${posterURL}${movie.poster_path}`"
      :alt="movie.original_title" loading="lazy">

    <div class="movie__info">
      <h4 :title="movie.original_title">{{ movie.original_title }}</h4>
      <span>{{ formattedDate(movie.release_date) }}</span>
    </div>

    <div class="movie__buttons" v-if="storeName === 'favoriteStore'">
      <Button :isGilded="!movie.isWatched" :isActive="movie.isWatched" :text="!movie.isWatched ? 'Mark as watched' : 'Watched'"
        @click="favoriteStore.toggleWatch(movie.id)" />
      <Button :text="'Delete'" :isDanger="true" @click="favoriteStore.deleteMovie(movie.id)" />
    </div>

    <div class="movie__buttons" v-if="storeName === 'searchStore'">
      <Button :isActive="isMovieFavorite(movie.id)" :isGilded="true" :text="isMovieFavorite(movie.id) ? 'In Favorites' : 'Add to Favorites'" @click="searchStore.addToFavorites(movie)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.movie {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid $colorGray;
  border-radius: 4px;

  &__img {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
  }

  &__info {
    padding-top: 10px;

    h4 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 4px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      @media (max-width: $breakpoint576) {
        font-size: 18px;
      }
    }

    span {
      color: $colorLightGray;
      font-size: 15px;
      font-weight: 700;

      @media (max-width: $breakpoint576) {
        font-size: 14px;
      }
    }
  }

  &__buttons {
    margin-top: auto;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .button {
      max-width: 100%;
    }
  }
}
</style>