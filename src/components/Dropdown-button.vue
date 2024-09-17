<template>
  <div class="dropdown flex" @mouseleave="openDropdown = false">
    <div class="dropdown__btn-container flex" type="button" @click="openDropdown = !openDropdown">
      <p class="dropdown__text">{{ perPage }}</p>
      <ArrowSvg />
    </div>
    <ul :class="[openDropdown ? 'active' : '']" class="dropdown__wrapper flex">
      <li class="dropdown__item" @click="choosePerPage('3')">3</li>
      <li class="dropdown__item" @click="choosePerPage('6')">6</li>
      <li class="dropdown__item" @click="choosePerPage('9')">9</li>
      <li class="dropdown__item" @click="choosePerPage('All')">All</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ArrowSvg from './icons/Arrow-svg.vue'
import { useCarStore } from '../stores/store'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const store = useCarStore()
const perPage = storeToRefs(store).perPage
const fetchCars = store.fetchData
const openDropdown = ref<boolean>(false)

const choosePerPage = (qty: string) => {
  perPage.value = qty
  openDropdown.value = false
  fetchCars()
}
</script>

<style scoped>
.dropdown {
  position: relative;
  align-items: center;

  padding: 9px 16px;

  border: 1px solid rgba(228, 228, 228, 1);
  border-radius: 8px;

  .dropdown__btn-container {
    align-items: center;

    cursor: pointer;
  }

  .dropdown__text {
    margin-right: 30px;
  }

  .dropdown__wrapper {
    position: absolute;
    top: 40px;
    left: 0;

    opacity: 0;

    flex-direction: column;
    align-items: end;
    gap: 3px;

    width: 100%;

    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 8px;

    padding-top: 10px;
    padding-left: 15px;

    z-index: 10;

    background-color: rgb(243, 243, 243);

    .dropdown__item {
      cursor: pointer;
      width: 70%;
    }

    .dropdown__item:hover {
      width: 100%;
    }
  }
  .active {
    opacity: 1;
  }
}
</style>
