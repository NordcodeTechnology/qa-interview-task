<script setup lang="ts">

import MapPinIcon from '../Icons/MapPinIcon.vue';

defineProps<{
    icon?: string,
    link: string,
    text: string,
    alt: string
}>()
</script>

<template>
    <div class="link-button__wrapper inline-flex">
        <button :href="link" :title="alt" class="inline-flex items-center">
            <div class="link-button__text">
                {{ text }}
            </div>
            <template v-if="icon === 'map-pin'">
                <div class="link-button__icon">
                    <MapPinIcon size="16" />
                </div>
            </template>
        </button>
    </div>
</template>

<style scoped>
.link-button__wrapper {
    @apply p-2.5 bg-black text-white;
}

.link-button__text {
    @apply text-xs font-medium;
}

.link-button__icon {
    @apply pl-2;
}
</style>