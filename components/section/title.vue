<template>
    <stack class="gap-16 w-full">

      <!-- en -->
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2 w-3/4">
          <paragraph footnote="extra">
            <heading level="extra">Ways of Seeing</heading>
          </paragraph>
          <paragraph footnote="h2">
            <heading level="2">John Berger</heading>
          </paragraph>
        </div>
      </div>

      <!-- ja -->
      <div class="flex gap-2 justify-center">
        <div class="flex flex-col gap-2 w-2/3">
          <paragraph footnote="extra">
            <heading level="extra">見るというこ</heading>
          </paragraph>
          <paragraph footnote="h2">
            <heading level="2">John Berger</heading>
          </paragraph>
        </div>
      </div>

      <!-- ar -->
      <div class="flex gap-2 justify-end">
        <div class="flex flex-col gap-2 w-2/3 justify-items-end">
          <paragraph footnote="extra" :right="true">
            <heading level="extra" lang="ar" class="text-right">شیوه‌های دیدن</heading>
          </paragraph>
          <paragraph footnote="h2" :right="true">
            <heading level="2" class="text-right">John Berger</heading>
          </paragraph>
        </div>
      </div>
  </stack>
</template>
