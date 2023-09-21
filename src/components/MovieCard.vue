<script setup>
import { useFavoriteStore } from '@/stores/favoriteStore'
import { useSearchStore } from '@/stores/searchStore'
import { formatDate, formatRating } from '@/assets/js/helpers.js'
import Button from './Button.vue'
import Star from './icons/Star.vue'

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

const isMovieFavorite = (id) => {
  return !!favoriteStore.movies.find(el => el.id === id)
}
</script>

<template>
  <div class="movie">
    <div class="movie__img">
      <img :src="movie.poster_path ? `${posterURL}${movie.poster_path}` : '/not-found.jpg'" :alt="movie.original_title"
        loading="lazy">
      <div class="movie__img-overlay"></div>
    </div>

    <h4 class="movie__title" :title="movie.original_title">{{ movie.original_title }}</h4>

    <div class="movie__info">
      <span>{{ formatDate(movie.release_date) }}</span>

      <span>
        <Star />
        {{ formatRating(movie.vote_average) }}
      </span>
    </div>

    <div class="movie__buttons" v-if="storeName === 'favoriteStore'">
      <Button :isGilded="!movie.isWatched" :isActive="movie.isWatched"
        :text="!movie.isWatched ? 'Mark as watched' : 'Watched'" @click.stop="favoriteStore.toggleWatch(movie.id)" />
      <Button :text="'Delete'" :isDanger="true" @click.stop="favoriteStore.deleteMovie(movie.id)" />
    </div>

    <div class="movie__buttons" v-if="storeName === 'searchStore'">
      <Button :isActive="isMovieFavorite(movie.id)" :isGilded="true"
        :text="isMovieFavorite(movie.id) ? 'In Favorites' : 'Add to Favorites'"
        @click.stop="searchStore.addToFavorites(movie)" />
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
  cursor: pointer;

  &:hover {
    .movie__img-overlay {
      opacity: 0.15;
    }

    .movie__title {
      text-decoration-color: $colorWhite;
    }
  }

  &__img {
    position: relative;
    overflow: hidden;
    width: 100%;

    img {
      width: 100%;
      aspect-ratio: 2/3;
      object-fit: cover;
    }

    &-overlay {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: $colorBlack;
      transition: 0.3s all ease;
      opacity: 0;
    }
  }

  &__title {
    margin: 10px 0 7px;
    font-size: 22px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: 0.15s all ease;

    @media (max-width: $breakpoint576) {
      font-size: 18px;
    }
  }

  &__info {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    span {
      display: flex;
      align-self: center;
      gap: 4px;
      color: $colorLightGray;
      font-size: 15px;
      font-weight: 700;

      @media (max-width: $breakpoint576) {
        font-size: 14px;
      }

      svg {
        width: 100%;
        max-width: 16px;
      }
    }
  }

  &__buttons {
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .button {
      max-width: 100%;
    }
  }
}
</style>