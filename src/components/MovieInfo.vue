<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => { }
  },
})
</script>

<template>
  <div>
    {{ movie }}
  </div>
</template>

<style lang="scss" scoped></style>