<template>
    <form class="search-form">
        <TextField v-model="model" type="search" placeholder="Search" class="search-input" :autocapitalize="false"
            :autocorrect="false" />
        <AppSubmitButton v-if="model.trim() !== ''" @click="model = ''" style="transform: translateY(-3px)">
            Cancel
        </AppSubmitButton>
    </form>
</template>

<script setup lang="ts">
const model = defineModel<string>({ required: true });
</script>

<style lang="scss" scoped>
.search-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}
</style>
