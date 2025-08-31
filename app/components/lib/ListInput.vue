<template>
    <div class="card-ignore">
        <div v-for="(_, index) in model" :key="index" class="array-item">
            <NumberField v-model.number="model[index]" class="array-input" />
            <AppSubmitButton type="button" @click="(done: () => void) => removeItem(done, index)" class="remove-button">
                ✕</AppSubmitButton>
        </div>
        <AppSubmitButton type="button" @click="addItem" class="add-button">Add Option</AppSubmitButton>
    </div>
</template>

<script setup lang="ts">
const model = defineModel<any[]>({ required: true });

function addItem(done: () => void) {
    model.value.push(0);
    done()
}

function removeItem(done: () => void, index: number) {
    model.value.splice(index, 1);
    done();
}
</script>

<style scoped>
.array-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
