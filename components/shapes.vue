<script setup>
import Matter from "matter-js";
import { sprite } from "../utils/sprite";

onMounted(() => {
  // Render sprites after dom is available
  const context = sprite(document.getElementById("scene"));
});
</script>

<template>
  <div id="scene" class="w-[600px] h-[600px]"></div>
</template>
