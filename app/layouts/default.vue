<template>
  <TitleBar
    :show-title="true" :show-back-button="true" :show-profile="false"
    :show-refresh-button="true"
  />
  <div class="all">
    <slot />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style scoped lang="scss">
.all {
}
</style>

