<script setup lang="ts">
import { computed } from 'vue';
const { data } = await useAsyncData(() =>  queryContent().find());

const computedData = computed(() => {
  return data?.value?.map((character) => {
    character.link = `/${character._path?.split("/").pop()}`;
    return character;
  })
})

</script>
<template>
  <div>
    <NuxtLink
      v-for="(character, index) in computedData"
      :key="index"
      :to="character.link"
      >{{ character.name }}
      </NuxtLink>
  </div>
</template>
