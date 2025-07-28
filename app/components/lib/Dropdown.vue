<template>
    <div>
        <div class="dropdown" :class="{ open: dropdownVisible }" @click="toggleDropdown">
            <div class="selected-option" :style="{ color: getColor(model) }">
                {{ props.optionDisplay(model) }}
                <div class="selected-option-icon" :style="{ transform: dropdownVisible ? 'rotate(90deg)' : '' }">
                    <svg width="13" height="22" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 2.31221C0 0.60949 1.99205 -0.31442 3.29188 0.785441L11.1956 7.47323C12.1398 8.27213 12.1398 9.72787 11.1956 10.5268L3.29189 17.2146C1.99205 18.3144 0 17.3905 0 15.6878V2.31221Z"
                            fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>

        <div v-if="dropdownVisible" class="options">
            <div v-for="(option, index) in props.options" :key="index" class="option"
                :style="{ color: getColor(option) }" :class="{ selected: model === props.optionDisplay(option) }"
                @click="updateValue(option)">
                {{ props.optionDisplay(option) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    options: Array<any>,
    optionDisplay: Function,
    optionColor?: Function
}>();

const model = defineModel({ required: true })
const dropdownVisible = ref(false);

const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
};

const getColor = (option: any | string) => {
    if (props.optionColor) {
        return props.optionColor(option);
    } else {
        return "var(--text)";
    }
};
const updateValue = (option: any) => {
    model.value = props.optionDisplay(option);
    dropdownVisible.value = false;
};
</script>

<style scoped lang="scss">
.dropdown {
    border: var(--border);
    border-radius: 25px;
    width: 145px;
    height: 50px;
    line-height: 50px;
    background-color: var(--main-background);
    cursor: pointer;

    .selected-option {
        display: flex;
        justify-content: space-between;
        padding-left: 24px;
        padding-right: 24px;
        align-items: left;
    }

    &.open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0px;
    }

    .selected-option-icon {
        height: 50px;
        display: flex;
        align-items: center;
        color: var(--text);
    }
}

.options {
    width: 145px;
    border: var(--border);
    border-top: none;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: var(--main-background);
    max-height: 188px;
    overflow-y: auto;
    transition: transform 0.6s ease;

    &::-webkit-scrollbar {
        width: 5px;
    }

    .option {
        padding: 10px 24px;
        cursor: pointer;
        text-align: left;
        height: 10px;
        line-height: 10px;



        &.selected {
            background-color: var(--background-primary);
        }

        &:hover {
            background-color: var(--background-secondary);
            border-radius: var(--border-radius);
        }
    }
}
</style>
