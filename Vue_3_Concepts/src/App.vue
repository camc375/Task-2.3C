<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header class="logo-container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </header>
    <h1> Vue 3 Composition API with Single File Components - Concepts</h1>

    <!--11. Router-->
      <nav class="router-links">
        <!-- 1. Template Syntax -->
        <RouterLink to="/templatesyntax">Template Syntax</RouterLink>
        <!-- 2. Methods-->
        <RouterLink to="/methods">Methods</RouterLink>
        <!-- 3. Reactivity Fundamentals -->
        <RouterLink to="/reactivityfundamentals">Reactivity Fundamentals</RouterLink>
        <!-- 4. Computed Properties -->
        <RouterLink to="/computedproperties">Computed Properties</RouterLink>
        <!-- 5. Class and Style Bindings -->
        <RouterLink to="/classandstylebindings">Class and Style Bindings</RouterLink>
        <!-- 6. List Rendering -->
        <RouterLink to="/listrendering">List Rendering</RouterLink>
        <!-- 7. Event Handling-->
        <RouterLink to="/eventhandling">Event Handling</RouterLink>
        <!-- 8. Form Input Bindings -->
        <RouterLink to="/forminputbindings">Form Input Bindings</RouterLink>
        <!-- 9. Watchers -->
        <RouterLink to="/watchers">Watchers</RouterLink>
        <!-- 10. Components -->
        <RouterLink to="/components">Components</RouterLink>
        
      </nav>
    <div class="router-view">

      <RouterView />
    </div>

  </div>

</template>

<style scoped>
div {
  display: grid;
  place-items: center;
}

/* Style the logo container */
.logo-container {
  text-align: center;
}

/* Style the router links */
.router-links {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.router-link-exact-active {
  color: var(--color-text);
}

.router-link-exact-active:hover {
  background-color: transparent;
}

.router-links a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.router-links a:first-of-type {
  border: 0;
}

/* Style the RouterView content if needed */
.router-view {
  text-align: center;
  margin-top: 0rem;
}

</style>
