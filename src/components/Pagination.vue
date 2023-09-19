<script setup>
import { useSearchStore } from '@/stores/searchStore'

defineProps({
  totalPages: {
    type: Number,
    required: false
  }
})

const searchStore = useSearchStore()

const paginationClick = (page) => {
  searchStore.getMovies({ str: searchStore.searchStr, page })
}
</script>

<template>
  <Paginate :pageCount="totalPages" :clickHandler="paginationClick" :prevText="'Prev'" :nextText="'Next'"
    :containerClass="'pagination'">
  </Paginate>
</template>

<style lang="scss">
@import "@/assets/css/variables.scss";

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  gap: 10px;
  margin-bottom: 50px;

  li {
    font-size: 18px;
    font-weight: 600;
    background-color: transparent;
    color: $colorWhite;
    border: 2px solid $colorGold;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.15s all ease;

    @media (max-width: $breakpoint576) {
      font-size: 16px;
    }

    a {
      padding: 6px 10px;
      transition: 0.15s all ease;
    }

    &:hover {
      background-color: $colorGold;

      a {
        color: $colorBlack;
      }
    }

    &:first-child,
    &:last-child {
      border-color: $colorWhite;

      &:hover {
        background-color: $colorWhite;

        a {
          color: $colorBlack;
        }
      }
    }

    &.disabled {
      border-color: $colorLightGray;

      a {
        color: $colorLightGray;
      }

      &:hover {
        background-color: transparent;
        cursor: default;

        a {
          color: $colorLightGray;
        }
      }
    }

    &.active {
      background-color: $colorGold;
      border-color: $colorGold;

      a {
        color: $colorBlack;
      }
    }
  }
}
</style>