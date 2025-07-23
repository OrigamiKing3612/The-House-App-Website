<template>
    <div class="setting">
        <label :title="props.description">{{ props.label }}:</label>
        <div v-if="!props.isEditing" class="value">
            <p v-if="props.settingValue">
                {{ props.settingValue }}
            </p>
            <p v-else>
                None
            </p>
        </div>
        <div v-else class="value">
            <!--  @vue-ignore -->
            <TextField v-if="props.type == 'text'" :value="value" v-model="value" />
            <div v-else-if="props.type == 'picker_prefix'">
                <NamePrefixPicker v-if="typeof value == 'string'" :initial-value="initialValue.toString()"
                    v-model="value" />
            </div>
            <div v-else-if="props.type == 'picker_house'">
                <HousePicker v-if="typeof value == 'string'" :initial-value="initialValue.toString()" v-model="value" />
            </div>
            <div v-else-if="props.type == 'picker_user_type'">
                <UserTypePicker v-if="typeof value == 'string'" :initial-value="initialValue.toString()"
                    v-model="value" />
            </div>
            <div v-else-if="props.type == 'picker_color'">
                <ColorPicker v-if="typeof value == 'string'" :initial-value="initialValue.toString()" v-model="value" />
            </div>
            <!--  @vue-ignore -->
            <Checkbox v-else-if="props.type == 'toggle'" :value="value" v-model="value" />
        </div>
        <AppSubmitButton v-if="props.isEditing && showSaveButton" class="submit" @click="save">
            Save
        </AppSubmitButton>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    settingValue: {
        type: [String, Boolean],
        required: true
    },
    isEditing: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        default: "toggle",
        required: false
    },
    description: {
        type: String,
        default: "",
        required: false
    }
});
const getDefaultValue = () => {
    if (props.type == "toggle") {
        return props.settingValue == "Yes" ? true : false;
    } else {
        return props.settingValue;
    }
};

const initialValue = ref(props.settingValue);
const value = ref<string | boolean>(getDefaultValue());

const showSaveButton = computed(() => {
    if (props.type == "toggle") {
        return value.value !== (props.settingValue == "Yes" ? true : false);
    } else {
        return value.value.toString().trim() !== initialValue.value.toString().trim();
    }
});

watch(() => props.settingValue, (newValue) => {
    initialValue.value = newValue;
    value.value = getDefaultValue();
});

watch(value, (newValue) => {
    emit('update:modelValue', newValue)
})
function save() {
    emit("save", value.value);
    initialValue.value = value.value;
}
const emit = defineEmits(["update:modelValue", "save"]);
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
    }
}

.submit {
    margin-left: 10px;
}
</style>
