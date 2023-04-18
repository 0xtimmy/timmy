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
          I'm a just guy who likes computers. I'm currently studying <a href="https://github.com/0xtimotheus/cpu">digital design</a> at Purdue. In my spare time I'm developing
          a P2P text editor for <a href="https://urbit.org/" target="_blank">Urbit</a> w/ CRDTs. Below are some other things I've built for fun :)
        </p>
        <button type="button" name="button" @click="say">
          <div class="">say hi!</div>
          <div class="">
            {{ hellos < 10 ? "00" : hellos < 100 ? "0" : ""  }}{{ hellos }}
          </div>
        </button>
      </section>
      <section>
        <h2>Projects</h2>
        <h3><a href="https://github.com/holium/engram" target="_blank">Engram</a></h3>
        <p>
          A peer to peer document editor for the <a href="https://urbit.org/">urbit</a> ecosystem. Built with prosemirror, yjs and our own custom crdts. <br>
          <a href="https://www.youtube.com/watch?t=570&v=Q-MtMu-Jbf4&feature=youtu.be" target="_blank">At Assembly</a>
          <a href="https://twitter.com/jmrphy/status/1604583510014058497" target="_blank">On Twitter</a>
        </p>
        <h3><a href="https://github.com/0xtimotheus/cpu">Pipelined CPU</a></h3>
        <p>
          A simple single cycle CPU. Continously improving it as I learn new things.
        </p>
        <h3><a href="https://github.com/0xtimotheus/diffusioninanevening">Image Diffuser in One Weekend</a></h3>
        <p>
          An agressively basic image diffusion script. Outputs are pretty good if left running for several days.
        </p>
        <h3><a href="https://github.com/0xtimotheus/Ray-Tracing" target="_blank">Ray Tracing in One Week</a></h3>
        <p>
          A c++ script that uses ray tracing to render a scene. Inspired by the <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">Ray Tracing in One Weekend</a> book series.
        </p>
        <h3><a href="https://0xtimotheus.github.io/wiz-animations/" target="_blank">Wizards Animator</a></h3>
        <p>
          A script to give your <a href="https://wizardsdao.com/" target="_blank">wizard's dao</a> NFT fun lil animations.
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
    fetch('https://timmy-api.0xtimmy.workers.dev/', {
      method: 'GET',
    }).then((response: any) => {
      response.text().then((result: string) => {
        console.log('got result', result)
        let num = parseInt(result);
        (async () => {
          let start = Date.now()
          while(this.hellos < num) {
            const i = Date.now() - start
            this.hellos = Math.floor(num * (1 - Math.pow(Math.E, -i / (1.68 * num)))) + 1
            await new Promise((res) => { setTimeout(res, 10)});
          }
          this.hellos = num;
        })()
      })
    })
  },
  methods: {
    say: function () {
      this.hellos = this.hellos + 1
      fetch('https://timmy-api.0xtimmy.workers.dev/', {
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
