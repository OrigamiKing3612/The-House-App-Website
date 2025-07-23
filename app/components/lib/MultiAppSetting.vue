<template>
    <div class="setting">
        <label>{{ props.label }}:</label>
        <div v-if="!props.isEditing" class="value">
            <p v-if="props.settingValue && props.settingValue.length > 0">
                {{ text() }}
            </p>
            <p v-else>
                None
            </p>
        </div>
        <div v-else class="value">
            <input v-if="props.type === 'text'" v-model="value" type="text" class="input-text"
                @input="updateValueEvent">
            <div v-else-if="props.type === 'user_type'">
                <MultiDropdown :option-display="(option: string) => { return normalizeString(option) + 's' }"
                    :options="allUserTypes" :initial-value="props.settingValue" @input="updateValue" />
            </div>
        </div>
    </div>
    <AppSubmitButton v-if="props.isEditing && showSaveButton" class="submit" @click="save">
        Save
    </AppSubmitButton>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    settingValue: {
        type: [Array, String],
        required: true
    },
    isEditing: {
        type: Boolean,
        required: true
    },
    optionDisplay: {
        type: Function,
        required: true
    },
    type: {
        type: String,
        default: "toggle",
        required: false
    }
});

const initialValue = ref(props.settingValue);
const value = ref(getDefaultValue());

const showSaveButton = computed(() => {
    return value.value.toString().trim() !== initialValue.value.toString().trim();
});

function getDefaultValue() {
    return props.settingValue;
}

function updateValue(newValue: string) {
    value.value = newValue;
    emit("input", newValue);
}

function updateValueEvent(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    value.value = newValue;
    emit("input", newValue);
}

function text() {
    if (Array.isArray(props.settingValue)) {
        //@ts-ignore
        return props.settingValue.map((item: string) => props.optionDisplay(item)).join(", ");
    } else {
        return props.optionDisplay(props.settingValue);
    }
}

function save() {
    emit("save");
    initialValue.value = value.value;
}

const emit = defineEmits(["input", "save"]);
</script>

<style scoped lang="scss">
.setting {
    display: flex;
    align-items: center;
    margin-bottom: 1px;
    margin-top: 1px;

    .value {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}

.submit {
    margin-top: 8px;
    margin-bottom: 10px;
}
</style>
