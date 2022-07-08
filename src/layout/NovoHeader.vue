<template>
  <header class="header is-flex is-justify-content-space-between">
    <div class="logo">
        <img src="@/assets/logos/Tu PruTec.svg" alt="TuPruTec">
    </div>
    <div class="user">
        User name
        <img src="@/assets/logos/Arrow Down.svg" alt="">
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
    background: #1500a1;
    color: white;
    height: 60px;
    padding: 10px;
}

.logo {
    padding-left: 20px;
}

.user {
    font-size: 1.3rem;
    text-transform: uppercase;
    padding-right: 30px;
}
</style>
