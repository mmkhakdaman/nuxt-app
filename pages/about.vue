<template>
  <div>
    <button @click="navigateTo('/')">back</button>
    <h1>about</h1>
  </div>
</template>

<script setup>
definePageMeta({
    layout: false,
    path: '/about2',
})
</script>