<template>
  <div id="layout">
    <script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>
    <script src="sketch.js"></script>
    <main class="">
      <h1>Timmy</h1>
      <div>links & socials</div>
      <h2>Projects</h2>
    </main>
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
  padding: 30px;
}
main {
  width: calc(100vw - 60px - 357px);
}

canvas {
  position: fixed;
  overflow: hidden;
  top: calc(50vh - 300px);
  right: 30px;
  width: 357px;
  height: 600px;
}

@media (max-width: 800px) {
  #layout {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  main {
    position: absolute;
    width: 600px;
    max-width: calc(100vw - 60px);
    top: 121px;
  }

  canvas {
    transform: rotate(-90deg);
    top: -357px;
    right: calc(50vw - 300px + 121px);
  }
}
</style>
