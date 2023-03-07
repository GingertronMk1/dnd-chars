<script setup lang="ts">
import { computed } from "vue";

const { params: { slug } } = useRoute();
const { data }: { data: Ref<any> } = await useAsyncData(
  slug,
  () => queryContent(`characters/${slug}`).findOne()
);

const newStats: ComputedRef<Statistics> = computed(() => {
  const ret: Statistics = {};
  const oldStats = data?.value?.stats;
  if (
    typeof oldStats !== "object"
  ) {
    return {};
  }
  Object.keys(oldStats).forEach((key: string) => {
    const value: number = oldStats[key];
    const modifier: number = Math.floor((value - 10) / 2);
    let displayModifier: string = "";
    switch(Math.sign(modifier)) {
      case 1: displayModifier = "+"; break;
      case -1: displayModifier = "-"; break;
      case 0: displayModifier = "±"; break;
    }
    displayModifier = `${displayModifier}${Math.abs(modifier)}`;
    ret[key] = {
      value,
      modifier,
      displayModifier
    }
  });
  return ret;
})

</script>
<template>
  <h1 v-text="data.name" class="text-2xl" />
  <div class="flex flex-row space-x-4">
    <div class="grid grid-cols-4">
      <template
        v-for="(value, name) in newStats"
        :key="name"
      >
        <span class="capitalize col-span-2" v-text="name" />
          <input
            type="number"
            :name="`statistic-${name}`"
            :id="`statistic-${name}`"
            v-model="data.stats[name]"
          />
          <span v-text="value.displayModifier" />
      </template>
    </div>
  </div>
</template>