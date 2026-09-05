<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h1>Case Study: {{ route.params.slug }}</h1>
</template>