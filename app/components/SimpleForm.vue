<template>
    <UForm :state="state" class="w-full max-w-md mx-auto mt-8" @submit="submit">
        <UFormField name="firstName" label="First Name">
            <UInput v-model="state.firstName" placeholder="First Name" class="w-full" variant="soft" />
        </UFormField>
        <UButton type="submit" class="mt-4 w-full">
            Submit
        </UButton>
    </UForm>
    <div v-if="response" class="mt-4 p-4 bg-green-100 text-green-800 rounded">
        {{ response }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const state = ref({
    firstName: ''
})
const response = ref(null)
async function submit() {
    try {
        response.value = await $fetch('/api/contact/test', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: { firstName: state.value.firstName }
        })
    } catch (error) {
        alert('Submission failed.')
    }
}
</script>
