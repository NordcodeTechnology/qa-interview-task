<script setup lang="ts">

// import { ref } from 'vue'

import Button from '../Common/Button.vue';

import FirstImage from '../../assets/gallery/egliukas.webp'

</script>

<template>
    <div class="hero-with-image__wrapper wrapped">
        <div class="hero-with-image-content__wrapper">
            <div class="hero-with-image-heading__wrapper">
                <h1 class="pb-8">
                    Headline
                </h1>
                <p class="pb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                </p>
                <Button :icon="'map-pin'" text="Parduotuvių paieška" link="/cia-ne-bugas" alt="Čia ne bugas" @click="console.error('TypeError: Cannot add property x, object is not extensible (V8-based)')" />
            </div>
        </div>
        <div class="hero-with-image__image-wrapper">
            <img :src=FirstImage class="hero-with-image__image" />
        </div>
    </div>
</template>

<style scoped>
.hero-with-image__wrapper {
    @apply flex py-ct-space;
}

.hero-with-image-content__wrapper {
    @apply flex-col mx-12 content-center;
}

.hero-with-image-heading__wrapper > p {
    @apply text-lg;
}

.hero-with-image__image-wrapper {
    @apply h-[610px] w-full min-w-[488px] ml-8;
}

.hero-with-image__image {
    @apply h-full w-full max-h-[610px] object-fill grayscale;
}

</style>
