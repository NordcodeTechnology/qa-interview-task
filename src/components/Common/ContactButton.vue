<script setup lang="ts">

import MailIcon from '../Icons/MailIcon.vue';
import PhoneIcon from '../Icons/PhoneIcon.vue';

const props = defineProps<{
    type: string,
    link: string,
    text: string,
    alt: string
}>()

let href:string = '';

switch(props.type) {
    case 'phone':
        href = `tel:${props.link}`
    break;
    case 'email':
        href = `mailto:${props.link}`
    break;
}

</script>

<template>
    <div class="link-button__wrapper">
        <a :href="href" :title="alt" class="inline-flex items-center">
            <template v-if="type == 'phone'">
                <div class="link-button__icon">
                    <PhoneIcon size="20" />
                </div>
            </template>
            <template v-if="type == 'email'">
                <div class="link-button__icon">
                    <MailIcon size="20" />
                </div>
            </template>
            <div class="link-button__text">
                {{ text }}
            </div>
        </a>
    </div>
</template>

<style scoped>
.link-button__wrapper {
    @apply min-h-4;
}

.link-button__wrapper > a {
    @apply hover:text-dark-green hover:border-b-[1px] hover:border-dark-green;
    @apply no-underline;
}

.link-button__text {
    @apply text-sm font-medium;
}

.link-button__icon {
    @apply pr-3;
}
</style>