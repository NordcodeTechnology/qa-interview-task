<script setup lang="ts">

import FacebookIcon from '../Icons/FacebookIcon.vue';
import InstagramIcon from '../Icons/InstagramIcon.vue';
import LinkedInIcon from '../Icons/LinkedInIcon.vue';

const props = defineProps<{
    type: string,
    link: string,
    alt: string
}>()

const isOutsideLink = props.link.includes('http') || props.link.includes('https') ||  props.link.includes('www') ? '_blank' : undefined;

</script>

<template>
    <div class="social-icon-link__wrapper">
        <a :href="link" :title="alt" :target="isOutsideLink" class="inline-flex items-center">
            <template v-if="type == 'facebook'">
                <div class="social-icon-link__icon">
                    <FacebookIcon size="16" />
                </div>
            </template>
            <template v-if="type == 'instagram'">
                <div class="social-icon-link__icon">
                    <InstagramIcon size="16" />
                </div>
            </template>
            <template v-if="type == 'linkedin'">
                <div class="social-icon-link__icon">
                    <LinkedInIcon size="16" />
                </div>
            </template>
        </a>
    </div>
</template>

<style scoped>
.social-icon-link__wrapper {
    @apply min-h-4;
}

.social-icon-link__wrapper > a {
    @apply hover:text-dark-green;
    @apply no-underline;
}

</style>