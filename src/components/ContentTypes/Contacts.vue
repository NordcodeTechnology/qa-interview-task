<script setup lang="ts">

// import { ref } from 'vue'

import ContactButton from '../Common/ContactButton.vue';


const data = {
    contactsTypes: [
        {
            title: "KONTAKTAS INVESTUOTOJAMS",
            description: '<p>Petras Petrauskas <br />„Nordcode“ grupės finansų ir ekonomikos direktorius',
            contacts: [
                {
                    type: 'email',
                    content: 'info@nordcode.io'
                },
                {
                    type: 'phone',
                    content: '+370 611 70000'
                },
                {
                    type: 'phone',
                    content: '+370 610 70000'
                },
                {
                    type: 'phone',
                    content: '+370 620 70000'
                }
            ]
        },
        {
            title: "KONTAKTAS INVESTUOTOJAMS",
            description: 'Petras Petrauskas <br />„Nordcode“ grupės finansų ir ekonomikos direktorius',
            contacts: [
                {
                    type: 'email',
                    content: 'info@nordcode.io'
                },
                {
                    type: 'phone',
                    content: '+370 611 70000'
                },
                {
                    type: 'phone',
                    content: '+370 620 70000'
                }
            ]
        },
        {
            title: "KONTAKTAS INVESTUOTOJAMS",
            description: 'Petras Petrauskas <br />„Nordcode“ grupės finansų ir ekonomikos direktorius',
            contacts: [
                {
                    type: 'email',
                    content: 'info@nordcode.io'
                },
                {
                    type: 'phone',
                    content: '+370 611 70000'
                },
                {
                    type: 'phone',
                    content: '+370 610 70000'
                },
                {
                    type: 'phone',
                    content: '+370 620 70000'
                }
            ]
        }
    ]
}

</script>

<template>
    <div class="contacts__wrapper wrapped">
        <div class="contacts__heading-wrapper">
            <div class="contacts__heading-name-wrapper">
                Kontaktai
            </div>
            <div class="contacts__heading-text-wrapper">
                Čia Jūs rasite „Nordcode“ kontaktus.
            </div>
        </div>
        <div class="contacts__blocks-wrapper" v-for="(contactType) in data.contactsTypes">
            <div class="contacts__block-title-wrapper">
                {{ contactType.title }}
            </div>
            <div class="contacts__block-description-wrapper" v-html="contactType.description"></div>
            <div class="contacts__block-contacts-wrapper">
                <template v-for="contact in contactType.contacts">
                    <ContactButton :type="contact.type"  :text="contact.content" :link="contact.content" :alt="contact.content" />
                </template>

            </div>
        </div>
    </div>
</template>

<style scoped>
.contacts__wrapper {
    @apply w-full flex flex-col py-ct-space justify-center;
}

.contacts__heading-wrapper {
    @apply flex-row pb-8;
}

.contacts__heading-name-wrapper {
    @apply font-bold text-2xl pb-2;
}

.contacts__blocks-wrapper {
    @apply flex w-full gap-8 p-8 flex-1;
}

.contacts__blocks-wrapper > div {
    @apply flex-1;
}

.contacts__block-title-wrapper {
    @apply font-semibold uppercase;
}

</style>
