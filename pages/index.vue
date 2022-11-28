<template>
  <div id="layout">
    <main class="">
      <h1>Timmy</h1>
    </main>
    <div id="artboard">
      <div class="inline-block" :style="{ transform: 'rotate(-90deg)' }">
        artboard
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style>
#layout {
  display: flex;
  flex-flow: row nowrap;
}

main {
  flex-grow: 2;
  flex-basis: 0;
  flex-shrink: 1;
}

#artboard {
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 2;
}

@media (max-width: 800px) {
  #layout {
    display: flex;
    flex-flow: column nowrap;
  }
}
</style>
