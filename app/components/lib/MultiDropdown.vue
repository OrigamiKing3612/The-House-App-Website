<template>
    <div>
        <div class="dropdown" :class="{ open: dropdownVisible }" @click="toggleDropdown">
            <div class="selected-option">
                <div class="selected-option-text">
                    <span v-if="model.length === 0">Select...</span>
                    <span v-else>
                        {{sortedSelected.map((option: any) => props.optionDisplay(option)).join(', ')}}
                    </span>
                </div>
                <div class="selected-option-icon" :style="{ transform: dropdownVisible ? 'rotate(90deg)' : '' }">
                    <ChevronRightIcon />
                </div>
            </div>
            <div v-if="dropdownVisible" class="options">
                <div v-for="(option, index) in props.options" :key="index" class="option"
                    :style="{ color: getColor(option) }" :class="{ selected: isSelected(option) }"
                    @click.stop="updateValue(option)">
                    {{ props.optionDisplay(option) }}
                </div>
            </div>
        </div>
        <div class="click-area" v-if="dropdownVisible" @click="dropdownVisible = false"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    options: any[],
    optionDisplay: (option: any) => string,
    optionColor?: (option: any) => string,
}>();

const model = defineModel<any>({ required: true })

const dropdownVisible = ref(false);
const sortedSelected = computed(() => [...model.value])

const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
};

const updateValue = (option: any) => {
    const newModel = [...model.value];

    const index = newModel.findIndex((selected) => selected === option);

    if (index >= 0) {
        newModel.splice(index, 1);
    } else {
        newModel.push(option);
    }

    model.value = newModel;
};

const getColor = (option: any | string) => {
    if (props.optionColor) {
        return props.optionColor(option);
    } else {
        return "var(--text-0)";
    }
};

const isSelected = (option: any) => {
    return model.value.includes(option);
};

</script>

<style scoped lang="scss">
.dropdown {
    position: relative;
    border: 1px solid var(--text-0);
    border-radius: var(--border-radius);
    width: var(--dropdown-width);
    height: 50px;
    line-height: 50px;
    background-color: var(--background-0);

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

    .selected-option-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 10px;
    }

    .selected-option-icon {
        height: 50px;
        display: flex;
        align-items: center;
        color: var(--text-0);
        margin-right: -7px;
        transition: transform 0.3s ease;
    }
}

.options {
    position: absolute;
    top: 100%;
    width: 100%;
    width: var(--dropdown-width);
    border: var(--border);
    border-top: none;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: var(--background-0);
    max-height: 188px;
    overflow-y: auto;
    transition: all 0.6s ease;
    z-index: 10;
    transform: translateX(-1px); // line up the selected part and the options

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
            background-color: var(--surface-0);
        }

        &:hover {
            background-color: var(--surface-1);
            border-radius: 10px;
        }
    }
}

.click-area {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9;
}
</style>
