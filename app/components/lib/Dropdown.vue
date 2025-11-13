<template>
    <div>
        <div class="dropdown" :class="{ open: dropdownVisible }" @click="toggleDropdown">
            <div class="selected-option" :style="{ color: getColor(model) }">
                <span class="selected-option-text">{{ displayText(model) }}</span>
                <div class="selected-option-icon" :style="{ transform: dropdownVisible ? 'rotate(90deg)' : '' }">
                    <ChevronRightIcon />
                </div>
            </div>
            <div v-if="dropdownVisible" class="options">
                <div v-for="(option, index) in allOptions" :key="index" class="option"
                    :style="{ color: getColor(option) }" :class="{ selected: model === option }"
                    @click.stop="updateValue(option)">
                    {{ displayText(option) }}
                </div>
            </div>
        </div>
        <div class="click-area" v-if="dropdownVisible" @click="dropdownVisible = false"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    options: any[],
    optionDisplay: (o: any) => string,
    optionColor?: (o: any) => string,
    noneOption?: boolean,
    noneOptionText?: string
}>();

const model = defineModel({ required: true })
const dropdownVisible = ref(false);

const allOptions = computed(() => {
    if (props.noneOption) {
        return [null, ...props.options];
    }
    return props.options;
});

const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
};

const getColor = (option: any | string) => {
    if (props.optionColor && option) {
        return props.optionColor(option);
    } else {
        return "var(--text-1)";
    }
};

const displayText = (option: any) => {
    if (option === null && props.noneOption) {
        return props.noneOptionText || "None";
    }
    return props.optionDisplay(option);
};

const updateValue = (option: any) => {
    model.value = option;
    dropdownVisible.value = false;
};
</script>

<style scoped lang="scss">
.dropdown {
    position: relative;
    border: var(--border);
    border-radius: var(--border-radius);
    width: var(--dropdown-width);
    height: 50px;
    line-height: 50px;
    background-color: var(--background-0);
    cursor: pointer;

    .selected-option {
        display: flex;
        justify-content: space-between;
        padding-left: 24px;
        padding-right: 24px;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    &.open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0px;
    }

    .selected-option-text {
        padding-right: 10px;
    }

    .selected-option-icon {
        height: 50px;
        display: flex;
        align-items: center;
        color: var(--text-1);
        margin-right: -7px;
        transition: transform 0.3s ease;
    }
}

.options {
    position: absolute;
    top: 100%;
    width: 100%;
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
        line-height: 10px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 100%;

        &.selected {
            background-color: var(--surface-0);
        }

        &:hover {
            background-color: var(--surface-1);
            border-radius: var(--border-radius);
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
