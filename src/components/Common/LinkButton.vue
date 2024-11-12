<script setup lang="ts">

import ArrowRightIcon from '../Icons/ArrowRightIcon.vue';

defineProps<{
    arrow?: boolean,
    link: string,
    text: string,
    alt: string
}>()
</script>

<template>
    <div class="link-button__wrapper">
        <a :href="link" :title="alt" class="inline-flex items-center">
            <div class="link-button__text">
                {{ text }}
            </div>
            <template v-if="arrow">
                <div class="link-button__icon">
                    <ArrowRightIcon size="20" />
                </div>
            </template>
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
    @apply pl-3;
}
</style>