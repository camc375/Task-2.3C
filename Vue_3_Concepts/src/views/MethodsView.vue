<!--2. Methods-->
<template>
  <h1>Vue 3 Methods</h1>
    <div>
      <p>Clicking the button below activates the "sayHello" method that uses the alert function to display a message</p>
      <button @click="sayHello">Say Hello</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      sayHello() {
        alert('Hello, Welcome to my demonstration!');
      }
    }
  };
  </script>
  