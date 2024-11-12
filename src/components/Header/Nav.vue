<script setup lang="ts">
import { ref, defineExpose } from 'vue'


const isNavActive = ref(false);

defineExpose({
    open,
    close
})

function open() {
    isNavActive.value = true;
}


function close() {
    isNavActive.value = false;
}

const data = {
    navElements: [
        {
            title: 'Apie grupę',
            subElements: [
                {
                    title: 'Apie Mus',
                    route: '/link'
                },
                {
                    title: 'Naujienos ir esminiai įvykiai',
                    route: '/link'
                },
                {
                    title: 'Istorija',
                    route: '/link'
                },
                {
                    title: 'Kontaktai',
                    route: '/link'
                },

            ]
        },
        {
            title: 'Pirkėjams',
            subElements: [
                {
                    title: 'Prekės ženklas',
                    route: '/link'
                },
                {
                    title: 'Parduotuviu tinklai',
                    route: '/link'
                },
                {
                    title: 'Parduotuvių paieška',
                    route: '/link'
                },
                {
                    title: 'Dovanų kortelės',
                    route: '/link'
                },

            ]
        },
        {
            title: 'Investuotojams',
            subElements: [
                {
                    title: 'Bendrovės ataskaitos',
                    route: '/link'
                },
                {
                    title: 'Bendrovės valdymas',
                    route: '/link'
                },
                {
                    title: 'Informacija investuotojams',
                    route: '/link'
                },
                {
                    title: 'Kontaktai investuotojams',
                    route: '/link'
                },

            ]
        },
        {
            title: 'Karjera',
            route: '/link'
        }
    ]
}

</script>

<template>
    <div class="nav__wrapper" :data-nav-active="isNavActive">
        <div class="nav-list__wrapper">
            <div class="nav-list__cols" v-for="(category) in data.navElements">
                <div class="nav-list-item__title">
                    <template v-if="category.route">
                        <a :href="category.route">{{ category.title }}</a>
                    </template>
                    <template v-else>
                        {{ category.title }}
                    </template>
                </div>
                <template v-if="category.subElements">
                    <div v-for="(link) in category.subElements" class="nav-list-sub-item__title">
                        <a :href="link.route">{{ link.title }}</a>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav__wrapper {
    @apply w-full absolute bg-white z-10 pb-16;

    top: 60px;
    transition: 0.5s ease-in-out;
}

.nav-list__wrapper {
    @apply w-full flex justify-items-stretch m-auto px-9 mt-8 gap-6;
    max-width: 1280px;
}

.nav-list__cols {
    @apply w-full mb-3;
}

.nav-list-item__title {
    @apply uppercase text-sm font-medium mb-6;
}

.nav-list-sub-item__title {
    @apply text-xs text-light-grey mb-3;
}

.nav-list-sub-item__title > a {
    @apply hover:underline hover:text-black;
}

[data-nav-active="false"] {
    transform: translateY(-100%);
}

[data-nav-active="true"] {
    transform: translateY(0);
}
</style>
