<template>
  <NovoHeader />
  <MainMenu />

  <main class="is-flex is-justify-content-center is-align-items-center">
    <!-- routerView -->
    <img src="@/assets/logos/Emblem.svg" alt="">
  </main>

  <NovoFooter />
</template>

<script setup lang="ts">
import NovoFooter from './NovoFooter.vue';
import NovoHeader from './NovoHeader.vue';
import MainMenu from './MainMenu.vue';
</script>

<style scoped>
main {
  /* min-height: 100vh; */
  height: calc(100vh - 232px);
  background-image: url('../assets/logos/bg-content.jpg');
  background-repeat: repeat-x;
}
</style>
