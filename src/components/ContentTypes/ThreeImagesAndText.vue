<script setup lang="ts">

// import { ref } from 'vue'

import LinkButton from '../Common/LinkButton.vue';

import Img_1 from '../../assets/gallery/city.webp'
import Img_2 from '../../assets/gallery/rocks.webp'
import Img_3 from '../../assets/gallery/forest.webp'

</script>

<template>
    <div class="three-images-and-text__wrapper m-auto px-9">
        <div class="three-images-and-text__images-wrapper">
            <div class="w-full">
                <img :src=Img_1 class="three-images-and-text__image" />
            </div>
            <div class="w-full">
                <img :src=Img_2 class="three-images-and-text__image" />
            </div>
            <div class="w-full">
                <img :src=Img_3 class="three-images-and-text__image" />
            </div>
        </div>

        <div class="three-images-and-text__content-wrapper">
            <div class="three-images-and-text__heading-wrapper">
                <h1 class="pb-8">
                    Headline
                </h1>
                <p class="pb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                </p>
                <div class="flex justify-center three-images-and-text__link">
                    <LinkButton :arrow="true" text="Daugiau" link="/cia-ne-bugas" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.three-images-and-text__wrapper {
    @apply w-full flex flex-col py-ct-space justify-center max-w-[1320px];
}

.three-images-and-text__content-wrapper {
    @apply flex align-middle justify-center;
}

.three-images-and-text__heading-wrapper > p {
    @apply text-lg flex-col mx-12 content-center max-w-[696px] text-center;
}

.three-images-and-text__heading-wrapper > h1 {
    @apply text-center;
}

.three-images-and-text__images-wrapper {
    @apply flex flex-row space-x-8 pb-10;
}

.three-images-and-text__image {
    @apply w-full max-h-[288px] min-h-[288px] object-cover grayscale;
}

</style>
