<!--7. Event Handling-->
<template>
  <h1>Vue 3 Event Handling</h1>
    <div>
      <p> the number below can be doubled using the "Click Me" button. The button uses inline handling to handle the multiplication event</p>
      <button @click="count*=2">Click Me</button> <!-- Inline Handlers -->
      <p>Count is: {{ count }}</p>
    </div>
    <div>
      <p> Similar to the demo on the "Methods" page, the button below handles the "sayHello" method, causing an alert to
        pop up when the button is clicked</p>
      <button @click="sayHello">Say Hello</button> <!-- Method Handlers -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const count = ref(1)
  
  const sayHello = () => {
    alert('Hello, Welcome to my demonstration!');
  };
  </script>
  