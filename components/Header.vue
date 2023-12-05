<script setup>
import Button from './Button.vue'

const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="header">
    <div class="container">
      <NuxtLink to="/">
        <div class="header__title">
          <img :src="`${baseUrl}popcorn.svg`" alt="img">
          <h1>My favorite movies</h1>
        </div>
      </NuxtLink>

      <div class="header__buttons">
        <NuxtLink to="/">
          <Button :text="'Favorite'" :isActive="$route.path === '/'" />
        </NuxtLink>

        <NuxtLink to="/search">
          <Button :text="'Search'" :isActive="$route.path === '/search'" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

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

    a {
      width: 100%;
      max-width: 140px;
    }
  }
}
</style>