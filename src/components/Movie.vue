<script setup>
import { useMovieStore } from '@/stores/MovieStore'
import AppButton from './AppButton.vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => { }
  }
})

const movieStore = useMovieStore()

const formattedDate = (mov) => {
  return mov.release_date.split("-")[0]
}
</script>

<template>
  <div class="movie">
    <img class="movie__img" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.movie.poster_path}`"
      :alt="props.movie.original_title">

    <div class="movie__info">
      <h4>{{ props.movie.original_title }}</h4>
      <span>{{ formattedDate(props.movie) }}</span>
    </div>

    <div class="movie__buttons">
      <AppButton :text="!props.movie.isWatched ? 'Watched' : 'Unwatch'" @click="movieStore.toggleWatch(props.movie.id)" />
      <AppButton :text="'Delete'" @click="movieStore.deleteMovie(props.movie.id)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.movie {
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
    }

    span {
      color: $colorLightGray;
      font-size: 15px;
      font-weight: 700;
    }
  }

  &__buttons {
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