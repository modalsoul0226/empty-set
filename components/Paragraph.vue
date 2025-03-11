<script setup lang="ts">

const props = defineProps<{
    footnote?: string
    right?: boolean
}>()
</script>

<template>
    <div class="grid grid-cols-8">
        <Sidenote v-if="footnote && !right">
          {{footnote}}
        </Sidenote>
        <div class="col-span-7">
          <slot></slot>
        </div>
        <Sidenote v-if="footnote && right" class="text-right">
          {{footnote}}
        </Sidenote>
    </div>
</template>
