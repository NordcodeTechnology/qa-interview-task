<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import SwiperPrevIcon from '../Icons/SwiperPrevIcon.vue';
import SwiperNextIcon from '../Icons/SwiperNextIcon.vue';

import FirstImage from '../../assets/gallery/large-slider/img-1.webp'
import SecondImage from '../../assets/gallery/large-slider/img-2.webp'
import ThirdImage from '../../assets/gallery/large-slider/img-3.webp'
import FourthImage from '../../assets/gallery/large-slider/img-4.webp'

const modules = [Pagination, Navigation, Autoplay]

// import { ref } from 'vue'

</script>

<template>
    <div class="hero-large-slider__wrapper">
        <div class="hero-large-slider-navigation__wrapper wrapped">
            <button class="hero-large-slider__previous-button">
                <SwiperPrevIcon size="14"/>
            </button>
            <button class="hero-large-slider__next-button">
                <SwiperNextIcon size="14"/>
            </button>
        </div>
        <Swiper 
        :modules="modules" 
        :slides-per-view="1"
        :autoplay="true"
        :delay="2000"
        :navigation="{ 
            enabled: true, 
            prevEl: '.hero-large-slider__previous-button', 
            nextEl: '.hero-large-slider__next-button',
            disabledClass: 'hero-large-slider__button--disabled'
            }"
        >
            <SwiperSlide><img :src=FirstImage class="hero-large-slider__image"/></SwiperSlide>
            <SwiperSlide><img :src=SecondImage class="hero-large-slider__image"/></SwiperSlide>
            <SwiperSlide><img :src=ThirdImage class="hero-large-slider__image"/></SwiperSlide>
            <SwiperSlide><img :src=FourthImage class="hero-large-slider__image"/></SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
.hero-large-slider__wrapper {
    @apply w-full relative;

    max-height: 650px;
}

.hero-large-slider__image {
    @apply w-full grayscale object-cover max-h-[650px];
}

.hero-large-slider-navigation__wrapper {
    @apply flex absolute w-full z-20 justify-between mx-auto left-0 right-0 top-1/2 -translate-y-1/2;
}

.hero-large-slider__previous-button, .hero-large-slider__next-button {
    @apply h-[44px] w-[44px] bg-tranparent-black text-tranparent-white flex justify-center items-center;
    @apply hover:text-white;
}

.hero-large-slider__button--disabled {
    @apply text-[#929393] cursor-auto;
    @apply hover:text-[#929393]

}

</style>
