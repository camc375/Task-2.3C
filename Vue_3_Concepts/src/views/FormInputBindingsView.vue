<!--Form Input Bindings-->
<template>
  <div>
    <h1>Vue 3 Form Input Bindings</h1>

    <!-- Input Binding with <input type="text"> -->
    <div class="example-box">
      <h2>v-model with &lt;input type="text&gt;</h2>
      <input type="text" v-model="textInput" />
      <p>Text Input Value: {{ textInput }}</p>
    </div>

    <!-- Input Binding with <input type="checkbox"> -->
    <div class="example-box">
      <h2>v-model with &lt;input type="checkbox&gt;</h2>
      <input type="checkbox" v-model="checkboxInput" />
      <p>Checkbox Input Value: {{ checkboxInput }}</p>
    </div>

    <!-- Input Binding with <input type="radio"> -->
    <div class="example-box">
      <h2>v-model with &lt;input type="radio&gt;</h2>
      <input type="radio" id="option1" value="Option 1" v-model="radioInput" />
      <label for="option1">Option 1</label>
      <input type="radio" id="option2" value="Option 2" v-model="radioInput" />
      <label for="option2">Option 2</label>
      <p>Radio Input Value: {{ radioInput }}</p>
    </div>

    <!-- Input Binding with <select> -->
    <div class="example-box">
      <h2>v-model with &lt;select&gt;</h2>
      <select v-model="selectedOption">
        <option value="Option A">Option A</option>
        <option value="Option B">Option B</option>
        <option value="Option C">Option C</option>
      </select>
      <p>Selected Option: {{ selectedOption }}</p>
    </div>

    <!-- Input Binding with <textarea> -->
    <div class="example-box">
      <h2>v-model with &lt;textarea&gt;</h2>
      <textarea v-model="textAreaInput"></textarea>
      <p>Text Area Value: {{ textAreaInput }}</p>
    </div>

     <!-- v-model with .lazy modifier -->
     <div class="example-box">
      <h2>v-model with .lazy modifier</h2>
      <input type="text" v-model.lazy="lazyInput" />
      <p>Lazy Input Value: {{ lazyInput }}</p>
    </div>

   <!-- v-model with .number modifier -->
   <div class="example-box">
      <h2>v-model with .number modifier and inline method</h2>
      <input type="text" v-model.number="numericInput" @input="addValueToCount" />
      <p>Numeric Input Value: {{ numericInput }}</p>
      <p>Result: {{ result }}</p>
    </div>

    <!-- v-model with .trim modifier -->
    <div class="example-box">
      <h2>v-model with .trim modifier</h2>
      <input type="text" v-model.trim="trimmedInput" />
      <p>Trimmed Input Value: {{ trimmedInput }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const textInput = ref('');
const checkboxInput = ref(false);
const radioInput = ref('');
const selectedOption = ref('');
const textAreaInput = ref('');


const lazyInput = ref('');
const numberInput = ref(0);
const trimmedInput = ref('');

const numericInput = ref('');
const result = ref('');

const addValueToCount = () => {
  const parsedValue = parseFloat(numericInput.value);
  if (!isNaN(parsedValue)) {
    result.value = ` ${parsedValue + 10}`;
  } else {
    result.value = 'Input is not a number';
  }
};

</script>

<style scoped>
/* Add styling for the example boxes */
.example-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
