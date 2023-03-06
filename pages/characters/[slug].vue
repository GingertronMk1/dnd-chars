<script setup lang="ts">
const { params: { slug } } = useRoute()
const { data } = await useAsyncData(
  slug,
  () =>  queryContent(`characters/${slug}`).findOne()
) as any

const characterData: Character = data

</script>
<template>
  <ul>
    <li v-for="(value, name) in characterData.stats" v-text="`${name}: ${value}`" />
  </ul>
  <pre v-text="characterData" />

</template>