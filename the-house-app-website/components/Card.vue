<template>
  <div class="card" :style="{ 'width': props.width + 'vw', 'margin-bottom': props.marginBottom + 'px' }">
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
    default: "45"
  }
});
</script>


<style lang="scss" scoped>
.card {
  padding: 5px;
  background-color: $background-primary;
  border-radius: 10px;
  box-shadow: $shadow;

  .v-container {
    flex-direction: column;
  }
}
</style>