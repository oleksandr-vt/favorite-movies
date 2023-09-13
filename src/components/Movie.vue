<script setup>
import { useMovieStore } from '@/stores/movieStore'
import { useSearchStore } from '@/stores/searchStore'
import AppButton from './AppButton.vue'

const props = defineProps({
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

const movieStore = useMovieStore()
const searchStore = useSearchStore()

const formattedDate = (date) => {
  return date.split("-")[0]
}
</script>

<template>
  <div class="movie">
    <img class="movie__img" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.movie.poster_path}`"
      :alt="props.movie.original_title" loading="lazy">

    <div class="movie__info">
      <h4 :title="props.movie.original_title">{{ props.movie.original_title }}</h4>
      <span>{{ formattedDate(props.movie.release_date) }}</span>
    </div>

    <div class="movie__buttons" v-if="props.storeName === 'movieStore'">
      <AppButton :text="!props.movie.isWatched ? 'Watched' : 'Unwatch'" @click="movieStore.toggleWatch(props.movie.id)" />
      <AppButton :text="'Delete'" @click="movieStore.deleteMovie(props.movie.id)" />
    </div>

    <div class="movie__buttons" v-if="props.storeName === 'searchStore'">
      <AppButton :text="'Add to Favorites'" @click="searchStore.addToFavorites(props.movie)" />
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
    }

    span {
      color: $colorLightGray;
      font-size: 15px;
      font-weight: 700;
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