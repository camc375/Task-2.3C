<template>
    <div>
      <p>{{ item.name }}</p>
      <button @click="toggleDetails">{{ item.showDetails ? 'Hide Details' : 'Show Details' }}</button>
      <p v-if="item.showDetails">{{ item.details }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const { item } = defineProps(['item']);
  
  const toggleDetails = () => {
    item.showDetails = !item.showDetails;
  };
  </script>
  