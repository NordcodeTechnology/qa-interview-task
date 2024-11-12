<script setup lang="ts">
import { ref, defineEmits} from 'vue'

import CloseIcon from '../Icons/CloseIcon.vue';
import MenuOpenIcon from '../Icons/MenuOpenIcon.vue';


const isNavOpen = ref(false)

const emit = defineEmits(['open-nav', 'close-nav'])

function openOrCLoseNav() {
    if ( !isNavOpen.value ) {
        emit('open-nav')
        isNavOpen.value = !isNavOpen.value
    } else {
        emit('close-nav')
        isNavOpen.value = !isNavOpen.value
    }
}

</script>

<template>
    <div class="menu-button__wrapper">
        <button class="menu-button" @click="openOrCLoseNav()">
            <template v-if="!isNavOpen">
                <MenuOpenIcon size="16" />
            <div class="menu-button__text">
                Menu
            </div>
            </template>
            <template v-else>
                <CloseIcon size="16" />
            </template>
        </button>
    </div>
    
</template>

<style scoped>
.menu-button__wrapper {
    @apply flex-1 justify-start px-2.5;
}

.menu-button {
    @apply flex;
}

.menu-button__text {
    @apply pl-2;
}
</style>
