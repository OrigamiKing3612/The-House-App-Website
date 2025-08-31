<template>
    <div class="setting">
        <label>{{ props.label }}</label>
        <div v-if="!props.isEditing">
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
    </div>
    <AppSubmitButton v-if="props.isEditing && showSaveButton" class="submit" @click="save">
        Save
    </AppSubmitButton>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
const emit = defineEmits<{
    save: [done: () => void]
}>();

const props = defineProps<{
    label: string,
    isEditing: boolean,
}>();

const model = defineModel<any>({ required: true });
const initialValue = ref<any>('');

const showSaveButton = computed(() => {
    return model.value.toString().trim() !== initialValue.value.toString().trim();
});

function save(done: () => void) {
    emit("save", () => {
        initialValue.value = model.value;
        done()
    });
}

watch(model, (newVal: any) => {
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
    text-align: left;

    .value {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}

.submit {
    margin-left: 10px;
}

label {
    text-align: left;
}
</style>
