<!--5. CLass and Style Bindings-->
<template>
  <div>
    <h1>Vue 3 Class and Style Bindings</h1>
    <p> The boxes below have dynamic classes and styles; clicking the button will dynamically update them and change how they appear</p>
    <!-- Class Binding -->
    <div :class="{ 'active': isActive, 'error': isError }">
      This is a box with dynamic classes.
    </div>
    <button @click="toggleClasses">Toggle Classes</button>

    <!-- Style Binding -->
    <div :style="dynamicStyles">
      This is a box with dynamic styles.
    </div>
    <button @click="toggleStyles">Toggle Styles</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      isError: false,
      dynamicStyles: {
        color: 'black',
        backgroundColor: 'white',
        padding: '10px',
      },
    };
  },
  methods: {
    toggleClasses() {
      this.isActive = !this.isActive;
      this.isError = !this.isError;
    },
    toggleStyles() {
      if (this.dynamicStyles.color === 'black') {
        this.dynamicStyles.color = 'white';
        this.dynamicStyles.backgroundColor = 'black';
      } else {
        this.dynamicStyles.color = 'black';
        this.dynamicStyles.backgroundColor = 'white';
      }
    },
  },
};
</script>

<style scoped>
/* Add styles for the active and error classes */
.active {
  border: 2px solid green;
}

.error {
  border: 2px solid red;
}
</style>
