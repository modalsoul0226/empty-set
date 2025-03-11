<script setup lang="ts">
type Level = "1" | "2" | "extra"
const props = defineProps<{ level: Level }>()

const heading = `h${props.level}`
</script>

<template>
    <h1 v-if="level =='extra'" class="extra">
      <slot></slot>
    </h1>
    <component v-else :is="heading">
      <slot></slot>
    </component>
</template>
