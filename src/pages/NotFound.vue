<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container page">
    <div class="prose">
      <p class="label">404</p>
      <h1>That page doesn't exist.</h1>
      <p>The link may be out of date. <RouterLink to="/work">See all work</RouterLink> or <RouterLink to="/">go to the homepage</RouterLink>.</p>
    </div>
  </div>
</template>
