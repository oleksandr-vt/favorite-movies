<script setup>
const inputValue = ref('')

const props = defineProps({
  onGetMovies: {
    type: Function,
    required: false,
  },
  onHideError: {
    type: Function,
    required: false,
  },
  searchStr: {
    type: String,
    required: false,
  },
})

onMounted(() => {
  if (props.searchStr) inputValue.value = props.searchStr
})
</script>

<template>
  <form class="search" @submit.prevent="onGetMovies(inputValue)">
    <label for="search">
      <h6>Enter the name of the movie (in any language):</h6>
      <input v-model="inputValue" @input="onHideError()" id="search" type="search" placeholder="Search..." minlength="2"
        maxlength="80">
    </label>
  </form>
</template>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

.search {
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  padding-bottom: 50px;

  @media (max-width: $breakpoint768) {
    padding-bottom: 40px;
  }

  label {
    display: block;
  }

  h6 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: $breakpoint576) {
      font-size: 15px;
    }
  }

  input {
    width: 100%;
    border-radius: 8px;
    border: 2px solid $colorLightGray;
    background: $colorWhite;
    color: $colorLightGray;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 16px;
  }
}
</style>