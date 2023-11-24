<script setup>
import { useRouter, useRoute } from 'vue-router'
import Button from './Button.vue'

const router = useRouter()
const route = useRoute()

const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header__title" @click="router.push({ name: 'favorite' })">
        <img :src="`${baseUrl}popcorn.svg`" alt="img">
        <h1>My favorite movies</h1>
      </div>

      <div class="header__buttons">
        <Button @click="router.push({ name: 'favorite' })" :text="'Favorite'" :isActive="route.path === '/'" />
        <Button @click="router.push({ name: 'search' })" :text="'Search'" :isActive="route.path === '/search'" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.header {
  text-align: center;
  padding: 50px 0;

  @media (max-width: $breakpoint768) {
    padding: 30px 0 40px;
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 30px;
    width: fit-content;
    margin: 0 auto;
    cursor: pointer;

    @media (max-width: $breakpoint768) {
      gap: 20px;
    }

    @media (max-width: $breakpoint400) {
      gap: 15px;
    }

    h1 {
      font-family: $fontSecondary;
      font-size: 36px;

      @media (max-width: $breakpoint768) {
        font-size: 30px;
      }

      @media (max-width: $breakpoint400) {
        font-size: 28px;
      }
    }

    img {
      @media (max-width: $breakpoint400) {
        max-width: 40px;
      }
    }
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;

    @media (max-width: $breakpoint768) {
      margin-top: 30px;
    }
  }
}
</style>