<template>
  <div id="layout">
    <script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>
    <script src="sketch.js"></script>
    <main class="">
      <section>
        <h1 class="mb-0">Hi, I'm Timmy</h1>
        <p class="text-sm">
          <a href="mailto:timothyfhein@gmail.com">Email</a> |
          <a href="https://twitter.com/talltimofficial">Twitter</a> |
          <a href="https://github.com/0xtimotheus">Github</a> |
          <a href="https://dalsyr-diglyn.avalonlabs.earth">~dalsyr-diglyn</a> |
          <a href="https://rainbow.me/0xtimotheus.eth">0xtimotheus.eth</a>
        </p>
        <p>
          I'm a just guy who really likes making things. Currently, I'm developing
          a text editor for <a href="https://urbit.org/">Urbit</a> w/
          <a href="https://avalonlabs.earth/">Avalon Labs</a> and playing with
          distributed systems along the way.
        </p>
        <!--
        <button type="button" name="button" @click="say">
          <div class="">say hi!</div>
          <div class="">
            {{ hellobutton }}
          </div>
        </button>
        -->
      </section>
      <section>
        <h2>Projects</h2>
        <h3><a href="https://github.com/holium/engram" target="_blank">Engram</a></h3>
        <p>
          A peer to peer document editor for the <a href="https://urbit.org/">urbit</a> ecosystem. Built with prosemirror, yjs and our own custom crdts. </br>
          <a href="https://www.youtube.com/watch?t=570&v=Q-MtMu-Jbf4&feature=youtu.be", target="_blank">At Assembly</a>
          <a href="https://twitter.com/jmrphy/status/1604583510014058497" target="_blank">On Twitter</a>
        </p>
        <h3><a href="https://lab.avalonlabs.earth/" target="_blank">UX Lab</a></h3>
        <p>
          A small prototyping repo.
        </p>
        <h3><a href="https://0xtimotheus.github.io/wiz-animations/" target="_blank">Wizards Animator</a></h3>
        <p>
          A lil script to give your <a href="https://wizardsdao.com/" target="_blank">wizard</a> fun lil animations.
        </p>
      </section>
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
      response.text().then((result: string) => {
        console.log('got result', result)
        this.hellos = parseInt(result)
      })
    })
  },
  computed: {
    hellobutton: function() {
      return `${this.hellos}`.padStart(3, "0");
    }
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
