<template>
  <header class="header">
    <h3 class="header__title">Demo Test</h3>
    <ul class="header__list">
      <li
        class="header__item flex"
        :class="{ active: router.currentRoute.value.path === '/profile' }"
      >
        <RouterLink to="/profile" class="header__link">
          <ProfileSvg />
          Profile
        </RouterLink>
      </li>
      <li class="header__item flex" :class="{ active: router.currentRoute.value.path === '/' }">
        <RouterLink to="/" class="header__link">
          <VechicleSvg />
          Vechicle
        </RouterLink>
      </li>
      <li
        class="header__item flex"
        :class="{ active: router.currentRoute.value.path === '/settings' }"
      >
        <RouterLink to="/settings" class="header__link">
          <SettingsSvg />
          Setting
        </RouterLink>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import ProfileSvg from './icons/Profile-svg.vue'
import SettingsSvg from './icons/Settings-svg.vue'
import VechicleSvg from './icons/Vechicle-svg.vue'

const router = useRouter()
</script>

<style scoped>
.header {
  background-color: rgba(40, 40, 40, 1);

  width: 256px;

  padding-top: 30px;
  padding-bottom: 30px;

  border-radius: 13px 0px 0px 13px;
}

.header__title {
  font-size: 24px;
  font-weight: 700;

  color: rgba(255, 255, 255, 1);

  margin-bottom: 102px;
  padding-left: 30px;
}

.header__item {
  padding-left: 30px;
  height: 48px;

  transition: all 0.3s ease-in-out;
}

.active {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-left: 2px solid rgba(217, 14, 50, 1);
}

.header__link {
  display: flex;
  align-items: center;
  gap: 24px;

  width: 100%;

  color: rgba(255, 255, 255, 0.45);
}

.header__item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
