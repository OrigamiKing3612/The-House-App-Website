<template>
    <div class="sidebar" :class="{ open: model }">
        <NuxtLink to="/" active-class="active" class="link">
            <p class="title">Home</p>
        </NuxtLink>
        <NuxtLink to="/bugs-tracker" active-class="active" class="link">
            <p class="title">Bug Tracker</p>
        </NuxtLink>
        <NuxtLink to="/blog" active-class="active" class="link">
            <p class="title">Blog</p>
        </NuxtLink>
        <!-- <NuxtLink to="/about" active-class="active" class="link"> -->
        <!--     <p class="title">About</p> -->
        <!-- </NuxtLink> -->
        <NuxtLink to="/contact" active-class="active" class="link">
            <p class="title">Contact Us</p>
        </NuxtLink>

        <SwitchThemesButton class="theme-button" />
        <div class="title back" @click="model = false">
            <h1 class="title">Back</h1>
            <ChevronRightIcon style="width: 35px; height: 35px;" />
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

const model = defineModel<boolean>({ required: true });

watch(route, () => {
    model.value = false; // Close sidebar when route changes
})
</script>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    top: -1px;
    right: -600px;
    width: 85%;
    max-width: 550px;
    height: 100%;
    background-color: var(--background-0);
    color: var(--text-1);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    border: 1px solid var(--text-1);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    text-align: right;
    transition: all 0.5s ease;

    &.open {
        right: -1px
    }

    &.active {
        color: var(--accent);
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
        fill: var(--text-1);
    }
}

.theme-button {
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>
