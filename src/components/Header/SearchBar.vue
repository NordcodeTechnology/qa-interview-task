<script setup lang="ts">
import { ref, defineExpose } from 'vue'

import CloseIcon from '../Icons/CloseIcon.vue';
import SearchIcon from '../Icons/SearchIcon.vue';


const isSearchBarActive = ref(false);

defineExpose({
    open
})

function open() {
    isSearchBarActive.value = true;
}


function close() {
    isSearchBarActive.value = false;
}

</script>

<template>
    <div class="search-bar__wrapper" :data-search-bar-active="isSearchBarActive">
        <div class="search-bar-search-icon__wrapper">
            <button>
                <SearchIcon size="16" />
            </button>
        </div>
        <div class="search-bar-search-field__wrapper">
            <input type="text" placeholder="Įveskite tektą!">
        </div>
        <div class="search-bar-close-button__wrapper">
            <button
                @click="close()"
            >
                <CloseIcon size="16" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.search-bar__wrapper {
    @apply w-full flex items-center justify-center absolute bg-white;

    visibility: hidden;
    max-width: 1208px;
    height: 60px;
}
.search-bar-search-icon__wrapper {
    @apply flex;

}
.search-bar-search-field__wrapper {
    @apply text-base flex-1 w-full grow mx-6;
}

.search-bar-search-field__wrapper > input {
    @apply placeholder:text-black w-full;
}

.search-bar-close-button__wrapper {
    @apply flex mx-6;
}


[data-search-bar-active = "false"] {
    animation: 0.5s fadeOut;
    animation-fill-mode: forwards;
}

[data-search-bar-active = "true"] {
    animation: 0.5s fadeIn;
    animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
}



</style>
