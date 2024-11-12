<script setup lang="ts">

// import { ref } from 'vue'

import LinkButton from '../Common/LinkButton.vue';

</script>

<template>
    <div class="middle-text__wrapper wrapped">
        <div class="middle-text__content-wrapper">
            <div class="middle-text__heading-wrapper">
                <h1 class="pb-8">
                    Headline
                </h1>
                <p class="pb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                </p>
                <div class="flex justify-center">
                    <LinkButton :arrow="true" text="Visos naujienos" link="/naujienos" alt="This is not a bug" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.middle-text__wrapper {
    @apply w-full flex flex-col py-ct-space  pt-[240px] justify-center;
}

.middle-text__content-wrapper {
    @apply flex align-middle justify-center;
}

.middle-text__heading-wrapper > p {
    @apply w-full text-lg flex-col mx-12 content-center max-w-[800px] text-center;
}

.middle-text__heading-wrapper > h1 {
    @apply text-center;
}

</style>
