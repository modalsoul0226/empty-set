<script setup lang="ts">
const props = defineProps<{
  hover?: boolean;
}>();
</script>

<template>
  <Stack class="group relative w-full h-full">
    <div
      class="absolute top-0 left-0 w-full h-full"
      :class="
        hover
          ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          : ''
      "
    >
      <slot name="overlay" />
    </div>
    <slot name="content" />
  </Stack>
</template>
