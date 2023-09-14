<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <button class="button" :class="props.active ? 'active' : ''">{{ props.text }}</button>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.button {
  font-family: $fontMain;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  max-width: 140px;
  text-align: center;
  background-color: transparent;
  color: $colorWhite;
  border: 2px solid $colorWhite;
  border-radius: 4px;
  padding: 8px 10px;
  transition: 0.15s all ease;

  &:hover {
    background-color: $colorWhite;
    color: $colorBlack;
  }

  &.active {
    background-color: $colorGold;
    color: $colorBlack;
    border-color: $colorGold;
  }

  &.gilded {
    border-color: $colorGold;

    &:hover {
      background-color: $colorGold;
    }
  }

  &.danger {
    border-color: $colorRed;

    &:hover {
      background-color: $colorRed;
      color: $colorWhite;
    }
  }
}
</style>