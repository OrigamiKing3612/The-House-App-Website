<template>
    <div>
        <div class="dropdown" :class="{ open: dropdownVisible }" @click="toggleDropdown">
            <div class="selected-option">
                <span v-if="selectedValue.length === 0">Select...</span>
                <span v-else>
                    <span :style="{ color: getColor(firstSelected) }">
                        {{ props.optionDisplay(firstSelected) }}
                    </span>
                    <span v-if="moreCount > 0" style="color: var(--text)">
                        + {{ moreCount }} more
                    </span>
                </span>
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
                :style="{ color: getColor(option) }" :class="{ selected: isSelected(option) }"
                @click="updateValue(option)">
                {{ props.optionDisplay(option) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["input"]);
const props = defineProps({
    initialValue: {
        type: [Array, String],
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    optionDisplay: {
        type: Function,
        required: true,
    },
    optionColor: {
        type: Function,
        required: false,
    },
});

const dropdownVisible = ref(false);
const selectedValue = ref([...props.initialValue]);
const sortedSelected = computed(() => [...selectedValue.value].sort())
const firstSelected = computed(() => sortedSelected.value[0])
const moreCount = computed(() => sortedSelected.value.length - 1)

const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
};

const updateValue = (option: any) => {
    const index = selectedValue.value.findIndex(
        (selected) => selected === option,
    );
    if (index >= 0) {
        selectedValue.value.splice(index, 1);
    } else {
        selectedValue.value.push(option);
    }
    emit("input", [...selectedValue.value]);
};

const getColor = (option: any | string) => {
    if (props.optionColor) {
        return props.optionColor(option);
    } else {
        return "var(--text)";
    }
};

const isSelected = (option: any) => {
    return selectedValue.value.includes(option);
};

</script>

<style scoped lang="scss">
.dropdown {
    border: 1px solid var(--text);
    border-radius: 25px;
    // width: 300px;
    height: 50px;
    line-height: 50px;
    background-color: var(--main-background);

    .selected-option {
        display: flex;
        justify-content: space-between;
        padding-left: 24px;
        padding-right: 24px;
        align-items: center;
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
        padding-left: 20px;
    }
}

.options {
    width: 300px;
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
            border-radius: 10px;
        }
    }
}
</style>
