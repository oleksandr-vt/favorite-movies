<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  hasSpacing: {
    type: Boolean,
    required: false
  },
  totalResults: {
    type: String,
    required: false
  }
})
</script>

<template>
  <h2 class="title" :class="{ 'spacing-bottom': hasSpacing }">
    {{ title }}
    <span class="title__results" v-if="totalResults">{{ totalResults }}</span>
  </h2>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.title {
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 7px;

  @media (max-width: $breakpoint768) {
    font-size: 26px;
  }

  &.spacing-bottom {
    margin-bottom: 25px;

    @media (max-width: $breakpoint768) {
      margin-bottom: 18px;
    }
  }

  &__results {
    display: inline-block;
    font-size: 20px;
    line-height: 1;
    color: $colorGold;
    margin-bottom: 6px;

    @media (max-width: $breakpoint768) {
      font-size: 17px;
      margin-bottom: 5px;
    }
  }
}
</style>