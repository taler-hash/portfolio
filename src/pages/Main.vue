<template>
  <div class="h-full w-full flex flex-col lg:flex-row lg:px-48">
    <Transition name="slide-left" appear>
      <div class="w-full flex-1 lg:order-last">
        <div class="flex items-center h-full justify-center ">
          <div
            class="relative w-96 h-96 rounded-full overflow-hidden border bg-gradient-to-br from-neutral-50 via-slate-200 to-slate-400 shadow-sm">
            <img :src="img" alt="" class="w-96 absolute top-0 w-full h-full">
          </div>
        </div>
      </div>
    </Transition>
    <Transition name="slide-top" appear>
      <div class="flex items-center lg:flex-1 justify-center ">
        <div class="px-8 lg:px-0">
          <div class="space-y-1.5 font-bold">
            <p class="text-4xl">Hello, Its Me</p>
            <p class="text-6xl flex-1">
              Jurie Tylier Pedrogas
            </p>
            <p class="text-4xl">
              and im <vue-typewriter-effect class="text-rose-600"
                :strings="['a Full stack Developer', 'an Ethical Programmer']"></vue-typewriter-effect>
            </p>
          </div>
          <div class="pt-2 flex space-x-2 text-gray-600">
            <button @click="redirect('https://www.facebook.com/JustBeingNic3')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
            <button @click="redirect('https://www.linkedin.com/in/jurie-tylier-pedrogas-a25299260/')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
            <button @click="redirect('https://github.com/taler-hash')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
          </div>
          <Transition name="slide-top" appear>
            <p v-if="show" class="pt-4 font-medium text-gray-400 italic">“{{ quotes[selectedQuotes] }}.”</p>
          </Transition>
        </div>
      </div>
    </Transition>
  </div>
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
      show: true,
      selectedQuotes: 4,
      img: Me,
    }
  },

  mounted() {
    setInterval(() => {
      this.show = false
      this.selectedQuotes = this.getQuotes()
      setTimeout(() => {
        this.show = true
      }, 100)
    }, 5000)

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
<style>
.slide-top-enter-active,
.slide-top-leave-active {
  animation: bounce-in 0.5s ease-in;
}


.slide-left-enter-active {
  animation: bounce 0.5s;
}

.slide-left-leave-active {
  animation: bounce 0.5s reverse;
}


@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(10%);
  }

  50% {
    transform: translateY(-5%);
  }

  70% {
    opacity: 1;
    transform: translateY(0%);
  }

  85% {
    opacity: 1;
    transform: translateY(-2%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>