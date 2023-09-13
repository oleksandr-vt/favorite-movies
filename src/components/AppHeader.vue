<script setup>
import { useRoute } from 'vue-router'
import AppButton from './AppButton.vue'

const route = useRoute()
</script>

<template>
  <div class="header">
    <div class="header__title">
      <img :src="'/popcorn.svg'" alt="img">
      <h1>My favorite movies</h1>
    </div>

    <div class="header__buttons">
      <AppButton @click="$router.push('/')" :text="'Favorite'" :active="route.path === '/'" />
      <AppButton @click="$router.push('/search')" :text="'Search'" :active="route.path === '/search'" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px;

  &__title {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 50px;

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
  }
}
</style>