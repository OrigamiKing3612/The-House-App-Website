<template>
    <div class="rounded-card">
        <div class="title-area">
            <h2 class="title">
                <slot name="title" />
            </h2>
            <slot name="right-side" class="link more-button" />
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.rounded-card {
    width: 100%;
    max-width: 700px;
    background-color: var(--main-background);
    border-radius: var(--border-radius);
    padding: 0px 0px 30px 0px;
    border: var(--border);
}

.title-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    margin: 15px 20px;
    font-size: 1.3rem;
    text-align: left;
}

.more-button {
    border-radius: 15px;
    display: flex;
    align-items: center;
    color: var(--text);
    padding: 7px;
    font-size: 0.9rem;
    margin-right: 13px;

    &:hover {
        background-color: var(--background-primary);
        color: var(--primary);
    }

    .more {
        margin-right: 7px;
    }
}
</style>
