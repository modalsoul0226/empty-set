<script setup lang="ts">

const props = defineProps<{
    footnote?: string
    right?: boolean
}>()
</script>

<template>
    <div class="grid grid-cols-8">
        <sidenote v-if="footnote && !right">
          {{footnote}}
        </sidenote>
        <p class="col-span-7">
          <slot></slot>
        </p>
        <sidenote v-if="footnote && right" class="text-right">
          {{footnote}}
        </sidenote>
    </div>
</template>
