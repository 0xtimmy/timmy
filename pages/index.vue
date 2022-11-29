<template>
  <div id="layout">
    <script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>
    <script src="sketch.js"></script>
    <main class="">
      <h1 class="mb-0">Hi, I'm Timmy</h1>
      <p class="text-sm">
        <a href="mailto:timothyfhein@gmail.com">Email</a> |
        <a href="https://twitter.com/talltimofficial">Twitter</a> |
        <a href="https://github.com/0xtimotheus">Github</a> |
        <a href="#">ssh</a> |
        <a href="https://rainbow.me/0xtimotheus.eth">0xtimotheus.eth</a>
      </p>
      <p>
        I'm a just guy who really likes making things. Currently, I'm developing
        a text editor for <a href="https://urbit.org/">Urbit</a> w/
        <a href="https://avalonlabs.earth/">Avalon Labs</a> and playing with
        distributed systems along the way.
      </p>
      <button type="button" name="button" @click="say">
        <div class="">say hi!</div>
        <div class="">
          {{ `${hellos}`.padStart(3, '0') }}
        </div>
      </button>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      said: false,
      hellos: 0,
    }
  },
  mounted: function () {
    fetch('https://timmy-api.palou.workers.dev/', {
      method: 'GET',
    }).then((response: any) => {
      response.text().then((result) => {
        console.log('got result', result)
        this.hellos = parseInt(result)
      })
    })
  },
  methods: {
    say: function () {
      this.hellos = this.hellos + 1
      fetch('https://timmy-api.palou.workers.dev/', {
        method: 'POST',
      })
    },
  },
})
</script>

<style>
#layout {
  padding: 36px;
}
main {
  width: calc(50vw - 72px);
}

canvas {
  position: fixed;
  overflow: hidden;
  top: calc(50vh - 600px);
  right: 0;
  width: 720px;
  height: 1200px;
}

@media (max-width: 1440px) {
  canvas {
    left: 50vw;
  }
}

@media (max-width: 1000px) {
  #layout {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  main {
    position: absolute;
    width: 600px;
    max-width: calc(100vw - 60px);
    top: 160px;
  }

  canvas {
    transform: rotate(-90deg);
    top: -780px;
    left: 0;
  }
}
</style>
