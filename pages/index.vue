<template>
    <!-- cover -->
    <Stack class="basis-64 gap-2">
      <Heading level="1">{ }</Heading>
      <Heading level="2">Design System</Heading>
    </Stack>

    <!-- shapes -->
    <Stack class="basis-128 gap-2">
      <Shapes />
    </Stack>

    <!-- title -->
    <div class="basis-186 h-full flex flex-none items-center">
      <SectionTitle />
    </div>

    <!-- mobile -->
    <Stack class="basis-108 gap-2 flex-none items-center">
      <SectionMobile />
    </Stack>

    <!-- web -->
    <Stack class="basis-186 gap-2 flex-none items-center">
      <SectionWeb />
    </Stack>
</template>
