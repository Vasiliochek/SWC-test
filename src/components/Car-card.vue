<template>
  <div class="car-card">
    <div class="card-header">
      <img :src="props.car?.preview" alt="car" width="260" height="135" />
      <a class="dots" href="#">...</a>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ props.car?.vehicle_name }}</h3>
      <span class="VIN">{{ props.car?.vin }}</span>
    </div>
    <div class="card-footer">
      <div class="card-quantity">
        <CheckMark />
        <span>{{ props.car?.angles_count }}/30</span>
      </div>
      <span class="card-date-off">3 days left</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckMark from './icons/Check-mark.vue'
import type { Car } from '../types/Car'

const props = defineProps({
  car: {
    type: Object as () => Car
  }
})
</script>

<style scoped>
.car-card {
  width: 354px;
  height: 335px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 40px 24px 16px 24px;

  position: relative;

  background-color: rgba(243, 246, 248, 1);
}

.dots {
  position: absolute;
  top: 0px;
  right: 20px;

  color: rgba(41, 49, 72, 0.6);

  font-size: 40px;
}

.card-header {
  margin: 0 auto;

  margin-bottom: 24px;
}

.card-body {
  padding-bottom: 18px;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgba(228, 228, 228, 1);
}

.card-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;

  margin-bottom: 12px;
}

.VIN {
  font-size: 15px;
  line-height: 20px;
  color: rgba(41, 49, 72, 0.6);
}

.card-footer {
  padding-top: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-quantity {
  display: flex;
  align-items: center;

  padding: 4px 12px;

  gap: 10px;

  background-color: rgba(228, 245, 221, 1);
  color: rgba(127, 199, 94, 1);

  border-radius: 6px;
}

.card-date-off {
  font-size: 15px;
  line-height: 16px;

  color: rgba(41, 49, 72, 0.6);
}
</style>
