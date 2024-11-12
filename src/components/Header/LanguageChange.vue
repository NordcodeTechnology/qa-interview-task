<script setup lang="ts">
import { ref } from 'vue'

const currentLanguage = ref('lt')

function setLanguage(code:string) {
    currentLanguage.value = code

    console.log(`Language was set to ${code} 🦄.`)
}

function isActive(languageCode:string) {
    return languageCode === currentLanguage.value
}


</script>

<template>
    <div class="language-change__wrapper">
        <button 
            @click="setLanguage('lt')"
            :class="{'language-change__button--active': isActive('lt')}"
            >
            LT
        </button>
        <button
            @click="setLanguage('en')"
            :class="{'language-change__button--active': isActive('en')}"
        >
            EN
        </button>
    </div>
</template>

<style scoped>
.language-change__wrapper {
    @apply flex space-x-2 text-light-grey;
}

.language-change__wrapper > button {
    @apply hover:underline hover:text-dark-green;
    @apply underline-offset-1;
}

.language-change__button--active {
    @apply text-black;
}

</style>
