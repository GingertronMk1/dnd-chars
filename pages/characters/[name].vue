<script setup>
const { params } = useRoute()
// When accessing /posts/1, route.params.id will be 1
const { data } = await useAsyncData(`${params.route}`, () => {
  return queryContent().findOne();
})


</script>
<template>
  <pre v-text="data" />

</template>