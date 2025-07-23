<template>
    <div class="sidebar" :class="{ open: localValue }">
        <NuxtLink to="/" :class="{ active: route.path === '/' }" class="link">
            <h1 class="title">Home</h1>
        </NuxtLink>
        <NuxtLink to="/bugs" :class="{ active: route.path === '/bugs' }" class="link">
            <h1 class="title">Bug Tracker</h1>
        </NuxtLink>

        <div class="title back" @click="localValue = false">
            <h1 class="title">Back</h1>
            <ChevronRightIcon style="width: 35px; height: 35px;" />
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const props = defineProps<{
    value: boolean
}>();

const localValue = ref<boolean>(props.value)

watch(() => props.value, (newValue) => {
    localValue.value = newValue
})

watch(localValue, (newValue) => {
    emit('update:modelValue', newValue)
})

watch(route, () => {
    localValue.value = false; // Close sidebar when route changes
})
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    top: -1px;
    right: -600px;
    width: 85%;
    max-width: 550px;
    height: 100%;
    background-color: var(--main-background);
    color: var(--text);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    border: 1px solid var(--text);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    text-align: right;
    transition: all 0.5s ease;

    &.open {
        right: -1px
    }

    &.active {
        color: var(--primary);
        box-shadow: var(--hover-shadow);
    }
}

.title {
    margin: 10px;
    font-size: 38px;
    font-weight: bold;
    line-height: 144%;
    letter-spacing: -5%;
}

.back {
    bottom: 10px;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;

    .back-arrow {
        width: 30px;
        height: 30px;
        margin-left: 15px;
        fill: var(--text);
    }
}
</style>
