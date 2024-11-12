<script setup lang="ts">
import { defineEmits} from 'vue'

import MapPinIcon from '../Icons/MapPinIcon.vue';
import SearchIcon from '../Icons/SearchIcon.vue';
import LanguageChange from './LanguageChange.vue'

const emit = defineEmits(['open-seach-bar'])

function openSearchBar() {
    emit('open-seach-bar')
}

</script>

<template>
    <div class="left-side__wrapper">
        <div class="pr-3">
            NORD 2.60 €
        </div>
        <div>
            <a href="">E.Prekyba </a>
        </div>
        <div class="icon">
            <MapPinIcon size="18" />
        </div>
        <div class="icon">
            <button
                @click="openSearchBar()"
            >
                <SearchIcon size="18" />
            </button>
        </div>
        <div>
            <LanguageChange />
        </div>
    </div>
</template>

<style scoped>
.left-side__wrapper {
    @apply flex space-x-8 font-medium flex-1;
    
    justify-content: flex-end;
}

.left-side__wrapper > .icon {
    @apply px-2.5;
}

.left-side__wrapper > .icon > svg, .left-side__wrapper > .icon > button > svg  {
    @apply hover:text-light-grey hover:cursor-pointer;
}
</style>
