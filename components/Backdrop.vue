<script setup lang="ts">
const props = defineProps<{
  text: string;
  img: string;
  lang?: string;
}>();
</script>

<template>
  <Overlay>
    <template #overlay>
      <div class="w-full h-full flex items-center justify-center">
        <Heading level="extra" class="text-white"><span :lang="lang || 'en'">{{ text }}</span></Heading>
      </div>
    </template>
    <template #content>
      <NuxtImg class="h-full w-full object-cover" :src="img" />
    </template>
  </Overlay>
</template>
