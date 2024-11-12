s
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import LinkButton from '../Common/LinkButton.vue';
import SwiperPrevIcon from '../Icons/SwiperPrevIcon.vue';
import SwiperNextIcon from '../Icons/SwiperNextIcon.vue';

import Img_1 from '../../assets/gallery/cards-slider/houses.webp'
import Img_2 from '../../assets/gallery/cards-slider/water.webp'
import Img_3 from '../../assets/gallery/cards-slider/drone-shot.webp'
import Img_4 from '../../assets/gallery/cards-slider/window.webp'
import Img_5 from '../../assets/gallery/cards-slider/mushroms.webp'
import Img_6 from '../../assets/gallery/cards-slider/painting.webp'
import logoImg from '../../assets/Logo.Color=Dark.png'

const modules = [Pagination, Navigation, FreeMode]

// import { ref } from 'vue'

</script>

<template>
    <div class="card-slides__wrapper">
        <div class="card-slides-heading__wrapper wrapped">
            <div class="pb-8">
                <h1>
                    Headline
                </h1>
            </div>
            <div class="pb-12">
                <LinkButton :arrow="true" text="Visi prekių ženklai" link="/cia-ne-bugas"
                    alt="Čia ne bugas" />
            </div>
        </div>
        <div class="card-slider__wrapper">
            <div class="card-slider-navigation__wrapper">
                <button class="card-slider__previous-button">
                    <SwiperPrevIcon size="12" />
                </button>
                <button class="card-slider__next-button">
                    <SwiperNextIcon size="12" />
                </button>
            </div>
            <div class="card-slider-slides__wrapper wrapped">
                <Swiper :slides-per-view="'auto'" :space-between="32" :navigation="{
                    enabled: true,
                    prevEl: '.card-slider__previous-button',
                    nextEl: '.card-slider__next-button',
                    disabledClass: 'card-slider__button--disabled'

                }" :modules="modules">
                    <SwiperSlide>
                        <div class="card-slider-card__wrapper">
                            <img :src=Img_1 class="card-slider-card__image" />
                            <div class="card-slider-card__logo">
                                <img :src=logoImg alt="">
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card-slider-card__wrapper">
                            <img :src=Img_2 class="card-slider-card__image" />
                            <div class="card-slider-card__logo">
                                <img :src=logoImg alt="">
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card-slider-card__wrapper">
                            <img :src=Img_3 class="card-slider-card__image" />
                            <div class="card-slider-card__logo">
                                <img :src=logoImg alt="">
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card-slider-card__wrapper">
                            <img :src=Img_4 class="card-slider-card__image" />
                            <div class="card-slider-card__logo">
                                <img :src=logoImg alt="Nordcode">
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card-slider-card__wrapper">
                            <img :src=Img_5 class="card-slider-card__image" />
                            <div class="card-slider-card__logo">
                                <img :src=logoImg alt="Nordcode">
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card-slider-card__wrapper">
                            <img :src=Img_6 class="card-slider-card__image" />
                            <div class="card-slider-card__logo">
                                <img :src=logoImg alt="Nordcode">
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Overwrites */
.swiper-slide {
    width: auto !important;
    /* Fix: Issue when in auto mode swiper shows only one slide */
}

.card-slides__wrapper {
    @apply py-ct-space;
}

.card-slider__wrapper {
    @apply w-full relative;
}

.card-slider-navigation__wrapper {
    @apply flex absolute w-full z-20 justify-between mx-auto left-0 right-0 top-1/2 -translate-y-1/2 m-auto px-9;

    max-width: 1384px;
    /* special for this component */
}

.card-slider-slides__wrapper {
    @apply w-full relative;
}

.card-slider__previous-button,
.card-slider__next-button {
    @apply h-[52px] w-[52px] bg-[rgba(0,0,0,0.2)] text-[rgba(255,255,255,0.8)] flex justify-center items-center ease-in-out duration-500;
    @apply hover:text-white hover:bg-[rgba(0,0,0,0.4)];
}

.card-slider__button--disabled {
    @apply text-[#929393] bg-[rgba(0,0,0,0.1)] cursor-auto;
    @apply hover:text-[#929393] hover:bg-[rgba(0,0,0,0.1)];
}

.card-slider-card__wrapper {
    @apply h-[682px] w-full max-w-[488px] flex flex-col mb-2;
}

.card-slider-card__image {
    @apply h-full max-h-[610px] object-cover grayscale;
}

.card-slider-card__logo {
    @apply flex align-bottom justify-center mt-6 opacity-60 ease-in-out duration-500;
}

.card-slider-card__wrapper:hover>.card-slider-card__logo {
    @apply opacity-100 ease-in-out duration-500;
}

.card-slider-card__logo>img {
    @apply max-h-8 m-2;
}
</style>
