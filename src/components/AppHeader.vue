<script setup>
import { useRoute } from 'vue-router'
import AppButton from './AppButton.vue'

const route = useRoute()
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header__title" @click="$router.push('/')">
        <img :src="'/popcorn.svg'" alt="img">
        <h1>My favorite movies</h1>
      </div>

      <div class="header__buttons">
        <AppButton @click="$router.push('/')" :text="'Favorite'" :active="route.path === '/'" />
        <AppButton @click="$router.push('/search')" :text="'Search'" :active="route.path === '/search'" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.header {
  text-align: center;
  padding: 50px 0;

  &__title {
    display: flex;
    align-items: center;
    gap: 30px;
    width: fit-content;
    margin: 0 auto;
    cursor: pointer;

    h1 {
      font-family: $fontSecondary;
      font-size: 36px;
    }
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 26px;
    margin-top: 50px;
  }
}
</style>