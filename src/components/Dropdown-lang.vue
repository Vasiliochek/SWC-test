<template>
  <div class="dropdown flex">
    <UKFlagSvg v-if="chooseLang === 'Eng'" class="dropdown__flag" />
    <USFlagSvg v-if="chooseLang === 'US'" class="dropdown__flag" />
    <PortFlagSvg v-if="chooseLang === 'Pt'" class="dropdown__flag" />
    <GerFlagSvg v-if="chooseLang === 'De'" class="dropdown__flag" />
    <div
      class="dropdown__btn-container"
      type="button"
      @click="showDropdown = !showDropdown"
      @mouseleave="showDropdown = false"
    >
      <span class="dropdown__text">{{ chooseLang }}</span>
      <ArrowSvg class="dropdown__arrow" />
      <div :class="[showDropdown ? 'dropdown__active' : '']" class="dropdown__wrapper flex">
        <div class="dropdown__item US" @click="chooseLang = 'US'">Us</div>
        <div class="dropdown__item Pt" @click="chooseLang = 'Pt'">Por</div>
        <div class="dropdown__item De" @click="chooseLang = 'De'">Deu</div>
        <div class="dropdown__item Eng" @click="chooseLang = 'Eng'">Eng</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowSvg from './icons/Arrow-svg.vue'
import GerFlagSvg from './icons/Ger-flag-svg.vue'
import PortFlagSvg from './icons/Port-flag-svg.vue'
import UKFlagSvg from './icons/UK-flag-svg.vue'
import USFlagSvg from './icons/US-flag-svg.vue'

import { ref } from 'vue'

const showDropdown = ref<boolean>(false)
const chooseLang = ref<string>('Eng')
</script>

<style scoped lang="scss">
.dropdown {
  width: 83px;
  height: 24px;

  align-items: center;

  .dropdown__flag {
    margin-right: 14px;
  }

  .dropdown__btn-container {
    cursor: pointer;
    position: relative;

    .dropdown__text {
      margin-right: 5px;
    }

    .dropdown__wrapper {
      position: absolute;
      opacity: 0;

      top: -94px;
      right: -5px;

      border-radius: 4px 4px 0px 0px;
      padding: 4px;
      padding-bottom: 8px;

      width: 60px;

      z-index: 10;

      background-color: rgb(243, 243, 243);

      flex-direction: column;
      align-items: end;

      transition: 0.3s ease-in-out;

      .dropdown__item:hover {
        width: 50px;
      }
    }
    .dropdown__active {
      opacity: 1;
    }
  }
}
</style>
