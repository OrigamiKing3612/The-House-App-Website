<template>
    <div class="context-menu" ref="dropdownRef">
        <div @click.stop="toggle">
            <slot name="default" />
        </div>

        <Teleport to="#teleports">
            <Transition name="fade">
                <div class="context-menu-button-content" ref="contentRef" :style="{
                }" v-if="show">
                    <div class="title" v-if="title">{{ title }}</div>
                    <slot name="content" />
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
}>();

const show = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null)
const position = ref({ top: '0px', left: '0px' })

function toggle() {
    show.value = !show.value
    if (show.value) {
        nextTick(() => {
            if (dropdownRef.value && contentRef.value) {
                const rect = dropdownRef.value.getBoundingClientRect()
                const menuWidth = contentRef.value!.offsetWidth

                position.value = {
                    top: `${rect.bottom + window.scrollY - 10}px`,
                    left: `${rect.left + window.scrollX - menuWidth + 10}px`
                }
            }
        })
    }
}

function handleClickOutside(e: MouseEvent) {
    if (
        dropdownRef.value &&
        !dropdownRef.value.contains(e.target as Node) &&
        (!contentRef.value || !contentRef.value.contains(e.target as Node))
    ) {
        show.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped lang="scss">
.context-menu {
    position: relative;
    display: inline-block;
}

.has-title {
    padding-top: 25px;
}

.context-menu-button-content {
    position: absolute;
    top: v-bind('position.top');
    left: v-bind('position.left');
    background-color: var(--main-background);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: 10px;
    z-index: 1000;
    min-width: max-content;


    .title {
        text-align: left;
        font-weight: bold;
    }
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.fade-enter-active {
    --time: 0.2s;
    transition: opacity var(--time) ease, transform var(--time) ease;
}

.fade-leave-active {
    --time: 0.1s;
    transition: opacity var(--time) ease, transform var(--time) ease;
}
</style>
