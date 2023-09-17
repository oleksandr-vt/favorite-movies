<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  hasSpacing: {
    type: Boolean,
    required: false,
  }
})
</script>

<template>
  <h2 class="title" :class="{ 'spacing-bottom': hasSpacing }">{{ title }}</h2>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.title {
  font-size: 30px;
  font-weight: 700;

  @media (max-width: $breakpoint768) {
    font-size: 26px;
  }

  &.spacing-bottom {
    margin-bottom: 25px;

    @media (max-width: $breakpoint768) {
      margin-bottom: 18px;
    }
  }
}
</style>