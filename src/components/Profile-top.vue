<template>
  <div class="profile">
    <img class="profile-photo" src="../assets/img/profile-photo.jpg" alt="" />
    <p class="profile-name">John Doe</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.profile {
  display: flex;
  align-items: center;
  gap: 14px;
  .profile-photo {
    width: 46px;
    height: 46px;

    overflow: hidden;

    border-radius: 50%;
  }
  .profile-name {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: rgba(41, 49, 72, 1);
  }
}
</style>
