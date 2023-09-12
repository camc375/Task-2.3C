<!--4. Computed Properties-->
<template>
  <h1> Vue 3 Computed Properties</h1>
    <div>
      <p>There are two messages below; the first is a ref component, and the second is a computed property based on the original, where
        I have passed the computed() function the value of the original message mutated by toUpperCase().
      </p>
      
      <p>Original Message: {{ message }}</p>
      <p>Uppercase Message: {{ uppercaseMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const message = ref('My name is Cameron Crabb');
  const uppercaseMessage = computed(() => { return message.value.toUpperCase()});
  </script>
  