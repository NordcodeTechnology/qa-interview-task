<script setup lang="ts">

import logoImg from '../assets/Logo.Color=Dark.png'

import SocialIconLink from '../components/Common/SocialIconLink.vue'

const data = {
    nav: [
        {
            title: 'Svetainės medis',
            link: '/svetaines-medis'
        },
        {
            title: 'Apie grupę',
            link: '/apie-grupe'
        },
        // {
        //     title: 'Pirkėjams',
        //     link: '/pirkejams'
        // },
        {
            title: 'Parduotuvių paieška',
            link: '/parduotuviu-paieska'
        },
        {
            title: 'Investuotojams',
            link: '/investuotojams'
        },
        {
            title: 'Dovanų kortelės',
            link: '/dovanu-korteles'
        },
        {
            title: 'Privatumo politika',
            link: '/privatumo-politika'
        },
        {
            title: 'Kontaktai',
            link: '/kontaktai'
        }
    ],
    socials: [
        {
            title: 'Facebook',
            icon: 'facebook',
            link: 'https://www.instagram.com/nordcode.io/'
        },
        {
            title: 'Instagram',
            icon: 'instagram',
            link: 'https://www.linkedin.com/company/nordcode/'
        },
        {
            title: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.facebook.com/nordcodegroup'
        }
    ]
}

</script>

<template>
    <footer class="footer__wrapper wrapped">
        <div class="footer__top-wrapper">
            <div class="footer__logo-wrapper">
                <img :src=logoImg alt="Nordcode" class="logo-img">
            </div>
            <div class="footer__nav-wrapper">
                <template v-for="naEl in data.nav">
                    <a :href="naEl.link" class="footer__nav-link"> {{ naEl.title }}</a>
                </template>
            </div>
        </div>
        <div class="footer__copy-wrapper">
            <div class="footer__text-wrapper">
                © 2024 Nordcode. All rights reserved
            </div>
            <div class="footer__socials-wrapper">
                <template v-for="social in data.socials">
                    <div class="footer__social-icon-wrapper">
                        <SocialIconLink :type="social.icon" :link="social.link" :alt="social.title"/>
                    </div>
                </template>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer__top-wrapper {
    @apply flex justify-between pb-8 border-b-[#BFBCBC];
}

.footer__nav-wrapper {
    @apply flex gap-6 items-center;
}

.footer__nav-wrapper > a {
    @apply font-medium text-xs underline-offset-8;
}

.logo-img {
    @apply max-h-7;
}

.footer__copy-wrapper {
    @apply flex justify-between items-center pt-8 pb-12;
}

.footer__text-wrapper {
    @apply font-normal text-xs;
}

.footer__socials-wrapper {
    @apply flex;
}

.footer__social-icon-wrapper {
    @apply px-2.5;
}
</style>
