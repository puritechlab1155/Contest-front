<!-- components/CustomButton.vue -->
<template>
    <button
      class="btn01 black custom"
      :disabled="disabled"
      @click="$emit('click')"
    >
      {{ label }}
    </button>
</template>

<script setup>

defineProps({
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])

</script>

<style scoped>

.custom {
  margin: 0 auto;
  padding: 10px 80px;
  margin-top: 50px;
}
.custom:disabled {
  background: #aaa;
  cursor: not-allowed;
  border: 1px solid #aaa;
}


</style>