<template>
  <section class="vechicles">
    <div class="vechicles__top-container flex">
      <div class="vechicles__title-container flex">
        <h2 class="vechicles__title">Vechicles</h2>
        <p class="vechicles__count">256</p>
      </div>
      <div class="vechicles__top-menu flex">
        <button class="vechicles__top-button">
          <PlusSvg />
        </button>
        <ProfileTop />
        <DropdownBtn />
      </div>
    </div>
    <div class="vechicles__search-container">
      <VechiclesSearch />
    </div>
    <div class="vechicles__content-container flex">
      <CarCard v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </section>
</template>

<script setup lang="ts">
import DropdownBtn from '../components/Dropdown-lang.vue'
import VechiclesSearch from '../components/Vechicles-search.vue'
import PlusSvg from '../components/icons/Plus-svg.vue'
import ProfileTop from '../components/Profile-top.vue'
import CarCard from '../components/Car-card.vue'
import { useCarStore } from '../stores/store'
import { storeToRefs } from 'pinia'

const store = useCarStore()
const cars = storeToRefs(store).cars

console.log(cars.value)
</script>

<style scoped lang="scss">
.vechicles {
  .vechicles__top-container {
    justify-content: space-between;
    align-items: center;

    padding: 30px;

    border-bottom: 1px solid rgba(228, 228, 228, 1);

    .vechicles__title-container {
      gap: 18px;
    }
    .vechicles__title {
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      color: rgba(41, 49, 72, 1);
    }
    .vechicles__count {
      font-weight: 400;
      font-size: 15px;
      line-height: 28px;
      color: rgba(41, 49, 72, 0.8);

      height: 35px;

      padding: 4px 14px;
      border-radius: 6px;

      text-align: center;

      background-color: rgba(243, 246, 248, 1);
    }
    .vechicles__top-menu {
      align-items: center;

      .profile {
        margin-right: 32px;
      }
    }
    .vechicles__top-button {
      padding: 9px;

      border: 1px solid rgba(232, 110, 132, 1);
      border-radius: 6px;

      margin-right: 40px;

      transition: all 0.3s ease-in-out;
    }
    .vechicles__top-button:hover {
      background-color: rgb(255, 205, 214);
    }
  }
  .vechicles__search-container {
    padding: 30px;
    padding-bottom: 0;
    padding-top: 36px;
  }
  .vechicles__content-container {
    padding: 31px;

    flex-wrap: wrap;

    gap: 30px;
  }
}
</style>
