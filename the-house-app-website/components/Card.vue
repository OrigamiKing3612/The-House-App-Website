<template>
  <div class="card" :style="{ width: props.width + 'px', 'margin-bottom': props.marginBottom + 'px' }">
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
    default: "450"
  }
});
</script>


<style lang="scss" scoped>
.card {
  padding: 20px;
  background-color: $background-primary;
  border-radius: 10px;
  box-shadow: $shadow;

  .v-container {
    flex-direction: column;
  }
}
</style>