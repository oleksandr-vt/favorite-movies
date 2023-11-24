<script setup>
import { useRouter } from 'vue-router'
import { formatDate, formatRating, makePosterUrl } from '@/assets/js/helpers.js'
import Button from './Button.vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => { }
  },
  isMovieFavorite: {
    type: Function,
    required: false,
  },
  onAddToFavorites: {
    type: Function,
    required: false,
  },
})

const router = useRouter()
</script>

<template>
  <div class="movie">
    <h2 class="movie__title" :title="movie.original_title">{{ movie.original_title }}</h2>

    <div class="movie__block">
      <div class="movie__intro">
        <img class="movie__img" :src="makePosterUrl(movie.poster_path)" :alt="movie.original_title" loading="lazy">
        <Button class="movie__button" :isActive="isMovieFavorite(movie.id)" :isGilded="true"
          :text="isMovieFavorite(movie.id) ? 'In Favorites' : 'Add to Favorites'"
          @click.stop="isMovieFavorite(movie.id) ? router.push({ name: 'favorite' }) : onAddToFavorites(movie)" />
      </div>

      <ul class="movie__list">
        <li>
          <p><b>Vote:</b> {{ formatRating(movie.vote_average) }} <span>({{ movie.vote_count }})</span></p>
        </li>

        <li>
          <p><b>Genre:</b></p>
        </li>

        <li>
          <p><b>Original title:</b> {{ movie.original_title }}</p>
        </li>

        <li v-if="movie.original_language">
          <p><b>Original language:</b> {{ movie.original_language.toUpperCase() }}</p>
        </li>

        <li>
          <p><b>Release date:</b> {{ formatDate(movie.release_date) }}</p>
        </li>

        <li>
          <p><b>Description:</b> {{ movie.overview }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.movie {
  &__title {
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 32px;

    @media (max-width: $breakpoint768) {
      font-size: 36px;
      margin-bottom: 24px;
    }

    @media (max-width: $breakpoint576) {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }

  &__block {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 50px;

    @media (max-width: $breakpoint768) {
      gap: 20px;
    }

    @media (max-width: $breakpoint576) {
      flex-direction: column;
    }
  }

  &__intro {
    width: 100%;
    max-width: 300px;

    @media (max-width: $breakpoint768) {
      max-width: 220px;
    }

    @media (max-width: $breakpoint576) {
      max-width: 100%;
    }
  }

  &__img {
    aspect-ratio: 2/3;
    object-fit: cover;
    width: 100%;
  }

  &__button {
    max-width: 100%;
    align-self: center;
    margin-top: 24px;

    @media (max-width: $breakpoint768) {
      margin-top: 20px;
    }
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: $breakpoint768) {
      gap: 16px;
    }

    li {
      font-size: 24px;

      @media (max-width: $breakpoint768) {
        font-size: 20px;
      }

      span {
        color: $colorLightGray;
        font-size: 18px;
        font-weight: 500;

        @media (max-width: $breakpoint768) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>