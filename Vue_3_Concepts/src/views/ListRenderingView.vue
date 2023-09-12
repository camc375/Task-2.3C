<template>
  <div>
    <h1>Vue 3 List Rendering</h1>

    <!-- v-for with an Array -->
    <div class="example-box">
      <h2>v-for with an array</h2>
      <ul>
        <li v-for="item in items">{{ item }}</li>
      </ul>
    </div>

    <!-- v-for with an Object -->
    <div class="example-box">
      <h2>v-for with an Object</h2>
      <ul>
        <li v-for="(value, key) in object" :key="key">{{ key }}: {{ value }}</li>
      </ul>
    </div>

    <!-- v-for with a Range -->
    <div class="example-box">
      <h2>v-for with a Range</h2>
      <ul>
        <li v-for="n in 5">{{ n }}</li>
      </ul>
    </div>

    <!-- v-for on template -->
    <div class="example-box">
      <h2>v-for on template (combined with v-if to only show if showDetails = true)</h2>
      <template v-for="item in items">
        <ul>
          <li v-if="item.showDetails">{{ item.name }}: {{ item.details }}</li>
        </ul>
      </template>
    </div>

    <!-- v-for with a Component -->
    <div class="example-box">
      <h2>v-for with a Component(Component defines a showDetails toggle button)</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          <my-component :item="item"></my-component>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { name: 'Apple', details: 'Green, Crunchy', id: 1, showDetails: true },
  { name: 'Banana', details: 'Yellow, Long', id: 2, showDetails: false },
  { name: 'Cherry', details: 'Red, Small', id: 3, showDetails: true },
]);

const object = {
  prop1: 'Cameron',
  prop2: 'Crabb',
  prop3: 'SIT120',
};

import MyComponent from '../components/MyComponent.vue';
</script>

<style scoped>
/* Add styling for the example boxes */
.example-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
