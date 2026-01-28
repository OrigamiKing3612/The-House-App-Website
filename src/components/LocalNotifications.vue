<template>
    <Notifications :notifications @close="close" />
</template>

<script setup lang="ts">
import { useNotifications } from '@utils/useNotifications';
import { Notifications } from '@origami-systems/ui';
const { notifications, close } = useNotifications();
</script>
