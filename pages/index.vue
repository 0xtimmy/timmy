<template>
  <div id="layout">
    <script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>
    <script src="sketch.js"></script>
    <main class="">
      <section>
        <h1 class="mb-0">Hi, I'm Timmy</h1>
        <p class="text-sm">
          <a href="mailto:timothyfhein@gmail.com">Email</a> |
          <a href="https://github.com/0xtimmy">Github</a> |
          <a href="https://www.linkedin.com/in/timothy-hein-1a9810178/">LinkedIn</a> |
          <a href="https://twitter.com/gpucowboy">Twitter</a>
        </p>
        <p>
          I study <strong>computer engineering</strong> & research <strong>compilers</strong> under
          <a href="https://engineering.purdue.edu/ECE/News/2023/prof-milind-kulkarni-takes-over-as-interim-head-of-elmore-family-school-of-electrical-&-computer-engineering" target="_blank">Professor Kulkarni</a>
          at Purdue University.
          I'm fascinated by the <strong>relationships between computer hardware & software</strong>
          & spend my weekends using them to accelerate <strong>machine learning</strong>. 
        </p><p>
          I've been accepted to graduate school at Purdue & am <strong>looking for an internship</strong> at the <strong>intersection</strong> of <strong>machine learning & computer systems</strong>.
          If any of the below is interesting feel free to grab my 
          <strong><a href="https://docs.google.com/document/d/1NOS2OGzGnHa1Qe5jc1MfnIMcf8BYE1qIFokDsozPFa0/edit?usp=sharing" target="_blank"><u>resume</u></a></strong> & <strong>lets chat!</strong>
        </p>
        <p>
          Below is a quick roster of my work :)
        </p>
        <button type="button" name="button" @click="say">
          <div class="">say hi!</div>
          <div class="">
            {{ hellos < 10 ? "000" : hellos < 100 ? "00" : hellos < 1000 ? "0" : ""  }}{{ hellos }}
          </div>
        </button>
      </section>
      <section>
        <h2>Projects</h2>
        <h3><a href="https://github.com/iu-parfunc/gibbon" target="_blank">Gibbon Compiler</a></h3>
        <p>
          A haskell compiler for operating on serial data. 
          Gibbon transforms pointer based data representations into packed representations, & as a result yields much faster traversals for structures like binary trees.
        </p>

        <h3><a href="https://engineering.purdue.edu/SoC-Team" target="_blank">AFTx07 - Digital Design & Tapeout</a></h3>
        <p>
          A RISC-V microcontroller designed from scratch by the Purdue SoCET team.
          Currently I am working on the tapeout flow to take our digital designs to manufacture, specifcally place 'n route & post-layout verification.
          For digital design I worked on pipelining cache <-> memory transactions.
        </p>

        <h3>Glados</h3>
        <p>
          A AI voice assistant built from scratch on an NVIDIA Jetson. 
          Designed as an experiment in lifelong learning, it sports an open source LLM, vector database of textbooks, academic litterature & past conversation.
          Still in progress...
        </p>

        <h3>MIPS Multicore</h3>
        <p>
          A fully functional multicore, MIPS processor. Built from scratch for ECE 437. Can't link becasue prof will fail me :(
        </p>

        <h3><a href="https://github.com/0xtimmy/web-diffusion" target="_blank">Web Diffusion</a></h3>
        <p>
          A bare bones image <a href="https://arxiv.org/pdf/2006.11239.pdf" target="_blank">diffuser</a> that runs in the browser. 
          It uses a <a href="https://arxiv.org/pdf/1706.03762.pdf" target="_blank">transformer</a> based model & custom GPU kernels that are run through <a href="https://developer.chrome.com/blog/webgpu-release/" target="_blank">WebGPU</a>.
          You can access it live <a href="https://web-diffusion.pages.dev/" target="_blank">here</a>. 
        </p>

        <h3><a id="engram" href="https://github.com/holium/engram" target="_blank">Engram</a></h3>
        <p>
          An infrastructure-less collaborative document editor for the <a href="https://urbit.org/" target="_blank">urbit</a> ecosystem. Built with prosemirror, yjs & our own custom crdts. <br>
          <a href="https://www.youtube.com/watch?t=570&v=Q-MtMu-Jbf4&feature=youtu.be" target="_blank">At Assembly</a>
          <a href="https://twitter.com/jmrphy/status/1604583510014058497" target="_blank">On Twitter</a>
        </p>

        <h3><a href="https://github.com/0xtimmy/Ray-Tracing" target="_blank">Ray Tracing in One Week</a></h3>
        <p>
          A c++ script that uses ray tracing to render a scene. Inspired by the <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">Ray Tracing in One Weekend</a> book series.
        </p>
        <h3><a href="https://0xtimmy.github.io/wiz-animations/" target="_blank">Wizards Animator</a></h3>
        <p>
          A script to give your <a href="https://wizardsdao.com/" target="_blank">wizard's dao</a> NFT fun lil animations.
        </p>
      </section>
      <section>
        <h2>Personal History</h2>
        <p>
          I started <strong>researching distributed systems</strong> in my dorm room & after my first year of college <strong>I left to turn my work into a company</strong>.
          Our focus was <strong>improving performance via network locality</strong>: if we can avoid using a server, clients only have to communicate with each other. 
          Done right this is much faster.
          At some point I started playing with image generation models & 
          I realized <strong>machine learning</strong> was a much more <strong>important</strong> & <strong>daughting</strong> performance challenge than what we had been working on.
          <br><br>
          So I <strong>returned to Purdue</strong> to study the full breadth of computers, <strong>from high level software down to the silicon</strong>, in search for a solution.
          Most notably I joined the compilers research team & the SoC research team, to get comfortable working on the <strong>hardware/software boundary</strong> from both sides.
          <br><br>
          AI is going to demand a new class of computer, like the iPhone for mobile in 2007, that can meet the specific characteristics of ML operations.
          <strong>It is the purpose of my studies & work to engineer this next generation of computers.</strong>
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
      hellos: 0
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
            this.hellos = Math.floor(num * (1 - Math.pow(Math.E, -i / (2.8 * num)))) + 1
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
  max-width: 60ch;
}

canvas {
  position: fixed;
  overflow: hidden;
  top: calc(50vh - 600px);
  right: 0;
  width: 720px;
  height: 1200px;
}

strong a {
  text-decoration: none;
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
