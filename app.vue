<script setup lang="ts">

</script>
<template>
  <NavBarComponent/>
  <div class="sm:container sm:mx-auto sm:mt-10">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <AboutMeComponent/>
      </div>
      <div>
        <TerminalComponent/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>