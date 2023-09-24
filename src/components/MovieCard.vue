<script setup>
import { formatDate, formatRating, makePosterUrl } from '@/assets/js/helpers.js'
import { MOVIE_TYPE } from '@/const/index.js'
import Button from './Button.vue'
import Star from './icons/Star.vue'

defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => { }
  },
  movieType: {
    type: String,
    validator: x => ['FAVORITE', 'REGULAR'].includes(x),
  },
  onAddToFavorites: {
    type: Function,
    required: false,
  },
  onToggleWatch: {
    type: Function,
    required: false,
  },
  onDeleteMovie: {
    type: Function,
    required: false,
  },
  isMovieFavorite: {
    type: Function,
    required: false,
  },
})
</script>

<template>
  <div class="movie">
    <div class="movie__img">
      <img :src="makePosterUrl(movie.poster_path)" :alt="movie.original_title" loading="lazy">
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

    <div class="movie__buttons" v-if="movieType === MOVIE_TYPE.FAVORITE">
      <Button :isGilded="!movie.isWatched" :isActive="movie.isWatched"
        :text="!movie.isWatched ? 'Mark as watched' : 'Watched'" @click.stop="onToggleWatch(movie.id)" />
      <Button :text="'Delete'" :isDanger="true" @click.stop="onDeleteMovie(movie.id)" />
    </div>

    <div class="movie__buttons" v-if="movieType === MOVIE_TYPE.REGULAR">
      <Button :isActive="isMovieFavorite(movie.id)" :isGilded="true"
        :text="isMovieFavorite(movie.id) ? 'In Favorites' : 'Add to Favorites'" @click.stop="onAddToFavorites(movie)" />
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