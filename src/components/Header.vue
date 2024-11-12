<script setup lang="ts">

import { ref } from 'vue';

import NavButton from './Header/NavButton.vue';
import Logo from './Header/Logo.vue'
import LeftSide from './Header/LeftSide.vue'
import SearchBar from "./Header/SearchBar.vue"
import Nav from "./Header/Nav.vue"

const searchBar = ref()
const nav = ref()

function handleSeachBarOpen() {
    searchBar.value.open()
}
function handleNavOpen() {
    nav.value.open()
    console.log('open')
}
function handleNavClose() {
    nav.value.close()
    console.log('close')
}


</script>

<template>
    <header class="header__wrapper">
        <div class="header-elements__wrapper">
            <SearchBar ref="searchBar"  />
            <NavButton @open-nav="handleNavOpen()" @close-nav="handleNavClose()" />
            <Logo />
            <LeftSide @open-seach-bar="handleSeachBarOpen()"/>
        </div>
        <Nav ref="nav" />
    </header>
</template>

<style scoped>
.header__wrapper {
    @apply bg-white;
}

.header-elements__wrapper {
    @apply w-full relative flex justify-between items-center text-xs m-auto px-9 z-20 bg-white; 
    
    max-width: 1280px;
    height: 60px;
}

</style>
