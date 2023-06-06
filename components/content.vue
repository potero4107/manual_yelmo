<script setup>
  const { $notion } = useNuxtApp()

const { data } = await useAsyncData("notion", () => $notion.getPageBlocks("11c8b7b0e5f1429fb62a7c4c3de63270"))

    </script>

<template>
     <main class="main">
        <NotionRenderer :blockMap="data" fullPage prism />

        
      </main>
</template>

<style lang="sass" scoped>
.main
    @apply bg-white col-start-2 col-end-3
    .content
        @apply p-20 
        .title
             @apply font-bold text-lg
        .text
             @apply font-sans text-sm
            

</style>