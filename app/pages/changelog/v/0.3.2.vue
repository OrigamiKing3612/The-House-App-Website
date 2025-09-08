<template>
    <Card :title="title">
        <p>This update adds the a game mode. Admins can now start a game to track points for a specific event. This can
            be done by going to the standings page and pressing "Start Game". Any user and view the game and watch the
            houses move in real time. After a game is over a podium view is shown.</p>
    </Card>
</template>

<script lang="ts" setup>

const title = ref("v0.3.2 - Game Mode")

definePageMeta({
    layout: "default",
    title: title.value
});
</script>

<style lang="scss" scoped></style>
