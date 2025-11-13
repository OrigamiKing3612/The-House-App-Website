<template>
    <div class="back-button-container">
        <button class="back-button" @click="router.go(-1);">
            <ArrowLeftIcon style="width: 30px; height: 25px;" />
        </button>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped lang="scss">
.back-button-container {
    z-index: 999;

    .back-button {
        text-decoration: none;
        border: 0;
        background: none;
        border-radius: 50px;
        font-weight: bold;
        color: var(--text-1);
        // padding: 10px;
        width: 40px;
        height: 40px;
        font-size: 16px;

        &:hover {
            background-color: var(--background-1);
            color: var(--accent);
        }
    }
}
</style>
