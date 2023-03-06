<script setup lang="ts">
const { params } = useRoute()
// When accessing /posts/1, route.params.id will be 1
const { data } = await useAsyncData(`${params.route}`, () => {
  return queryContent().findOne();
}) as any

const characterData: Character = data

</script>
<template>
  <ul>
    <li v-for="(value, name) in characterData.stats" v-text="`${name}: ${value}`" />
  </ul>
  <pre v-text="characterData" />

</template>