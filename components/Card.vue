<template>
  <div
    class="card"
    :style="{ width: props.width + 'vw', 'max-width': props.maxWidth + 'px', 'margin-bottom': props.marginBottom + 'px' }"
  >
    <div class="v-container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  marginBottom: {
    type: String,
    default: "10"
  },
  width: {
    type: String,
    default: "66"
  },
  maxWidth: {
    type: String,
    default: "450"
  }
});
</script>


<style lang="scss" scoped>
.card {
  padding: 20px;
  background-color: var(--main-background);
  border-radius: 20px;
  border: 1px solid var(--text);

  .v-container {
    flex-direction: column;
  }
}
</style>

