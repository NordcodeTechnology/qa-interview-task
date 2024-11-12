<script setup lang="ts">

// import { ref } from 'vue'


import BackgroundImage from '../../assets/gallery/0f1034046efa93334a98bc864e41175d.jpg'

const data = {
    statistics: [
        {
            title: '2022 m. grupės apyvarta, EUR',
            number: '293 mln.'
        },
        {
            title: 'Parduotuvės',
            number: '165'
        },
        {
            title: 'Prekių ženklai',
            number: '200'
        },
        {
            title: 'Šalys',
            number: '3'
        },
        {
            title: 'Darbuotojai',
            number: '2 000+'
        }
    ]
}

</script>

<template>
    <div class="statistics-bar__wrapper">
        <div class="statistics-bar__background-image-wrapper">
            <img :src=BackgroundImage class="statistics-bar__backgruond-image" />
        </div>
        <div class="statistics-bar__content-wrapper wrapped">
            <div class="statistics-bar__statistic-block-wrapper" v-for="(stats) in data.statistics">
                <div class="statistics-bar__statistic-number">
                    {{ stats.number }}
                </div>
                <div class="statistics-bar__statistic-title">
                    {{ stats.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.statistics-bar__wrapper {
    @apply w-full relative;
}

.statistics-bar__background-image-wrapper {
    @apply w-full;
}

.statistics-bar__backgruond-image {
    @apply w-full max-h-[256px] object-cover grayscale
}

.statistics-bar__content-wrapper {
    @apply flex absolute w-full z-20 justify-between mx-auto left-0 right-0 top-1/2 -translate-y-1/2 m-auto;
}

.statistics-bar__statistic-block-wrapper {
    @apply flex-row w-full text-white text-center;
}

.statistics-bar__statistic-number {
    @apply text-4xl font-bold tracking-tight;
}

.statistics-bar__statistic-title {
    @apply text-lg font-normal;
}
</style>
