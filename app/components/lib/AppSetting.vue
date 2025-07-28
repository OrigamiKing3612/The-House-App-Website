<template>
    <div class="setting">
        <label :title="props.description">{{ props.label }}:</label>
        <div v-if="!props.isEditing" class="value">
            <p v-if="model !== undefined && model !== null && model !== ''">
                <slot name="display">
                    {{ model }}
                </slot>
            </p>
            <p v-else>(None)</p>
        </div>
        <div v-else class="value">
            <slot />
        </div>
        <AppSubmitButton v-if="props.isEditing && showSaveButton" class="submit" @click="save">
            Save
        </AppSubmitButton>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: "save"): void
}>();
const props = defineProps<{
    label: string,
    isEditing: boolean,
    description?: string
}>();

const model = defineModel<string | boolean>({ required: true });
const initialValue = ref<string | boolean>('');

function save() {
    emit("save");
    initialValue.value = model.value;
}

const showSaveButton = computed(() => {
    if (typeof model.value === 'boolean') {
        return model.value !== initialValue.value;
    }

    return model.value?.toString().trim() !== initialValue.value?.toString().trim();
});

watch(model, (newVal) => {
    if (!props.isEditing) {
        initialValue.value = newVal;
    }
});

onMounted(() => {
    initialValue.value = model.value;
});
</script>

<style scoped lang="scss">
.setting {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .value {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}

.submit {
    margin-left: 10px;
}
</style>
