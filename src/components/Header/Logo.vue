<script setup lang="ts">

import logoImg from '../../assets/Logo.Color=Dark.png'


</script>

<template>
    <div class="logo__wrapper">
        <img :src=logoImg alt="Nordcode" class="logo-img">
    </div>
</template>

<style scoped>
.logo-img {
    @apply max-h-8;
}
</style>
