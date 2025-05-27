<template>
  <nav class="navbar">
    <RouterLink to="/" class="link" :class="{ active: isActive('/') }">Home</RouterLink>
    <RouterLink to="/about" class="link" :class="{ active: isActive('/about') }">About</RouterLink>
    <RouterLink to="/contact" class="link" :class="{ active: isActive('/contact') }">Contact</RouterLink>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (path) => route.path === path
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  gap: 32px;
  padding: 24px 0px;
  position: sticky;
  top: 0;
  z-index: 10;

  .link {
    color: rgb(232, 232, 232);
    text-decoration: none;
    font-size: 19px;
    position: relative;
    padding-bottom: 4px;

    &.active {
      border-bottom: 2px solid gray;
    }

    &:hover {
      color: gray;
    }
  }
}
</style>
