<!--1. Template Syntax-->
<template>
  <div>
    <h1>Vue 3 Template Syntax</h1>

    <!-- Text Interpolation -->
    <div>
      <p>The text below is displayed using Text Interpolation</p>
      <p>{{ message }}</p>
      <button @click="changeMessage">Change Message</button>
    </div>
    

    <!-- Raw HTML -->
    <div>
      <p>The text below is displayed using v-html; click the button to change the raw html.</p>
      <p v-html="rawHTML"></p>
      <button @click="changeRawHTML">Change Raw HTML</button>
    </div>
    
    <!-- Attribute Binding (Image Source) -->
    <div>
      <p>the image below is displayed using Attribute Binding; specifically, the src attribute. 
        Change the src attribute by clicking the button</p>
      <button @click="changeImageURL">Change Image</button>
      <p></p>
      <img class ="image" :src="imageURL" alt="Dynamic Image" />   
    </div>
   
    <!-- JavaScript expressions inside syntax -->
    <div>
      <p>The number below is computed with a javascript expression "5 + 3" inside curly brackets</p>
      <p>{{ 5 + 3 }}</p>
    </div>
    


  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'My first name is Cameron',
      rawHTML: '<strong>Raw HTML Content</strong>',
      imageURL: 'src/assets/placeholder.jpg',
    };
  },
  methods: {
    changeMessage() {
      this.message = 'My last name is Crabb';
    },
    changeRawHTML() {
      this.rawHTML = '<em>Updated Raw HTML</em>';
    },
    changeImageURL() {
      this.imageURL = 'src/assets/profile_pic.jpeg';
    }
  }
};
</script>

<style scoped>
.image{
  max-width: 200px;
  max-height: auto;
}

</style>
