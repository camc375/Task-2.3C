<!-- Child.vue -->
<template>
    <div class="child">
      <h3>Child Component</h3>
      <p class="message">Message from Parent: {{ childMessage }}</p>
  
      <!-- Slot for content from the parent component -->
      <slot name="child-slot"></slot>
  
      <button @click="sendMessageToParent">Send Message to Parent</button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const { childMessage } = defineProps(['childMessage']);
  const emits = defineEmits(['child-event']);
  
  const sendMessageToParent = () => {
    emits('child-event', 'Hello from Child!');
  };
  </script>
  
  <style scoped>
  /* Add styling for the Child component */
  .child {
    background-color: #e0e0e0;
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
  
  .message {
    font-weight: bold;
  }
  </style>
  