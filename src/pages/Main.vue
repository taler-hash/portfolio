<template>
  <section class="mx-auto flex min-h-full w-full max-w-6xl items-start px-6 pb-32 pt-8 sm:px-10 lg:items-center">
    <div class="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div class="h-40 w-40 overflow-hidden rounded-full border border-white/15 bg-slate-700 shadow-[0_0_0_8px_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.45)] lg:h-80 lg:w-80">
          <img :src="img" alt="Jurie Tylier Pedrogas" class="h-full w-full object-cover object-top">
        </div>
      </div>
      <div class="order-2 max-w-xl lg:order-1">
        <p class="text-[12px] font-medium uppercase tracking-[0.32em] text-slate-400">Hello, I'm</p>
        <h1 class="mt-3 text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] lg:text-[64px]">
          Jurie Tylier<br>Pedrogas
        </h1>
        <p class="mt-3 h-8 text-xl leading-8 text-sky-300 lg:text-[26px]">
          <vue-typewriter-effect :strings="['a Full stack Developer', 'an Ethical Programmer']"></vue-typewriter-effect>
        </p>
        <div class="mt-4 flex gap-2">
          <button aria-label="Facebook" class="social" @click="redirect('https://www.facebook.com/JustBeingNic3')">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </button>
          <button aria-label="LinkedIn" class="social" @click="redirect('https://www.linkedin.com/in/jurie-tylier-pedrogas-a25299260/')">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
          </button>
          <button aria-label="GitHub" class="social" @click="redirect('https://github.com/taler-hash')">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </button>
        </div>
        <p class="mt-5 min-h-12 max-w-md text-[15px] leading-7 text-slate-400">“{{ quotes[selectedQuotes] }}”</p>
      </div>
    </div>
  </section>
</template>
<script>
import Me from '../assets/me.png'
import VueTypewriterEffect from "vue-typewriter-effect";

export default {
  components: {
    'vue-typewriter-effect': VueTypewriterEffect
  },
  data() {
    return {
      quotes: [
        "Simplicity is about subtracting the obvious and adding the meaningful",
        "Simplicity is the ultimate sophistication.",
        "Don’t make the process harder than it is.",
        "Simplicity is an exact medium between too little and too much.",
        "The greatest ideas are the simplest.",
        "I have the simplest tastes. I am always satisfied with the best.",
        "It is the essence of genius to make use of the simplest ideas."
      ],
      selectedQuotes: 4,
      img: Me,
    }
  },

  mounted() {
    this.timer = setInterval(() => {
      this.selectedQuotes = this.getQuotes()
    }, 5000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  },
  methods: {
    redirect(link) {
      window.open(link, '_blank')
    },

    getRandomIndex() {
      return Math.floor(Math.random() * (this.quotes.length))
    },

    getQuotes() {
      const newIndex = this.getRandomIndex()
      do {
        this.selectedQuotes = this.getRandomIndex()
      } while (newIndex === this.selectedQuotes)

      return newIndex
    }
  }
}
</script>
<style scoped>
.social {
  display: grid;
  height: 40px;
  width: 40px;
  place-items: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
}
.social svg {
  height: 16px;
  width: 16px;
}
</style>