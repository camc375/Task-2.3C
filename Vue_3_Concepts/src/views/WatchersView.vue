<template>
  <div>
    <h1>Vue 3 Watchers</h1>
    <p>In the example below, a watcher observes changes in the inputValue data property.
      The watcher callback function is executed whenever inputValue changes. It calculates 
      the length of the input value (newValue.length) and updates the inputLength.</p>

    <!-- Watcher example -->
    <div class="example-box">
      <h2>Watcher Example</h2>
      <input type="text" v-model="inputValue" placeholder="Enter text" />
      <p>Input Value: {{ inputValue }}</p>
      <p>Length: {{ inputLength }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const inputValue = ref('');
const inputLength = ref(0);

// Watch for changes in inputValue and update inputLength
watch(inputValue, (newValue, oldValue) => {
  inputLength.value = newValue.length;
});
</script>

<style scoped>
/* Add styling for the example boxes */
.example-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
