<template>
  <div class="vechicles__search flex">
    <div class="input-container">
      <input
        @input="search"
        @blur="blur"
        v-model="searchVal"
        type="text"
        class="input"
        placeholder="Search VIN"
      />
      <SearchSvg class="input-svg" />
    </div>
    <div class="per-page-container flex">
      <p class="per-page-text">Select vehicles per page:</p>
      <DropdownBtn />
    </div>
    <button class="vechicles__add-button flex">
      <PlusWhiteSvg />
      <span>ADD VECHICLE</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import SearchSvg from './icons/Search-svg.vue'
import DropdownBtn from './Dropdown-button.vue'
import PlusWhiteSvg from '../components/icons/Plus-white-svg.vue'
import { useCarStore } from '../stores/store'

import { storeToRefs } from 'pinia'

const store = useCarStore()
const searchVal = storeToRefs(store).searchVal
const fetchData = store.fetchData

const search = () => {
  if (typeof searchVal.value === 'string') {
    const searching = searchVal.value as string
    if (searching.length > 2) {
      fetchData()
    }
  } else {
    return
  }
}

const blur = () => {
  if (searchVal.value === null) {
    fetchData()
  } else {
    return
  }
}
</script>

<style scoped lang="scss">
.vechicles__search {
  .input-container {
    position: relative;
    max-width: 354px;

    margin-right: 32px;
    .input {
      width: 354px;
      height: 42px;

      padding: 9px 16px;

      border: 1px solid rgba(228, 228, 228, 1);
      border-radius: 8px;
    }

    .input-svg {
      position: absolute;
      right: 10px;
      top: 11px;
    }
  }
  .per-page-container {
    align-items: center;
    gap: 8px;
    .per-page-text {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: rgba(41, 49, 72, 1);

      margin-right: 16px;
    }
  }
  .vechicles__add-button {
    width: 180px;
    height: 42px;

    gap: 20px;
    align-items: center;

    padding: 9px 18px;

    background-color: rgba(217, 14, 50, 1);

    color: white;
    font-weight: 700;
    font-size: 12px;

    margin-left: auto;

    border-radius: 8px;

    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: rgb(211, 128, 143);
    }
  }
}
</style>
