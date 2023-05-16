<template>
  <label :for="name">{{ label }}</label>
  <VueDatePicker
    v-model="inputValue"
    :id="name"
    :typeable="true"
    :name="name"
    :aria-label="label"
    :enable-time-picker="false"
    class="tw-rounded-md"
    :class="class"
    :dark="dark"
    format="dd/MM/yyyy"
    auto-apply
    locale="fr"
    utc
    text-input
    @update:model-value="$emit('update:modelValue', inputValue)"
    @cleared="emitClearEvent"
  ></VueDatePicker>
</template>

<script setup>
import { ref } from 'vue'

let inputValue = ref(undefined)
let locale = ref(localStorage ? localStorage.getItem('locale') : 'fr') //TODO : handle locale and format

const props = defineProps({
  modelValue: { type: Object, default: undefined },
  name: { type: String, default: undefined },
  label: { type: String, default: undefined },
  dark: { type: Boolean, default: true },
  class: { type: String, default: undefined }
})

// emits
const emit = defineEmits(['update:modelValue', 'cleared'])

const updateModelValue = newValue => {
  emit('update:modelValue', newValue)
}

const emitClearEvent = () => {
  emit('cleared')
}
</script>

<style lang="scss" scoped>
label {
  font-size: 0.8rem;
}
</style>
