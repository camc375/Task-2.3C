<!--3. Reactivity fundamentals-->
<template>
  <h1>Vue 3 Reactivity Fundamentals</h1>
    <div>
      <p> The number below is the value of a reactive "ref" variable called count. Click the button to double it's value;
          the reactive ref component will change in response.
      </p>
      <p>{{ count }}</p>
      <button @click="double">Double the Value</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(1);
  
  const double = () => {
  count.value *= 2; 
};

  </script>
  