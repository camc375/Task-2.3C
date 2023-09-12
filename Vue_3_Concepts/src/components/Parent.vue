<!-- Parent.vue -->
<template>
    <div class="parent">
      <h2>Parent Component</h2>
      <p class="message">Message from Child: {{ messageFromChild }}</p>
  
      <!-- Child component with props and event handling -->
      <Child :child-message="messageToChild" @child-event="handleChildEvent">
        <template #child-slot>
          <p>This paragraph is content defined in the parent component; it will be inserted into the child's slot, and appear
            in the slot.</p>
        </template>
      </Child>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Child from '../components/Child.vue';
  
  const messageToChild = ref('Hello from Parent!');
  const messageFromChild = ref('');
  
  const handleChildEvent = (message) => {
    messageFromChild.value = message;
  };
  </script>
  
  <style scoped>
  /* Add styling for the Parent component */
  .parent {
    background-color: #f0f0f0;
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
  
  .message {
    font-weight: bold;
  }
  </style>
  