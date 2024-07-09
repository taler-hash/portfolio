<template>
  <main class="w-full h-screen relative bg-no-repeat bg-cover bg-opacity-10 overflow-hidden">
    <div class="">
      {{ path }}
    </div>
    <div class="w-full h-full pb-[8rem]">
      <div class="w-full h-full overflow-y-scroll overflow-x-hidden">
        <router-view></router-view>
      </div>
    </div>
    <!-- Footer -->
    <div class="w-full h-[13%] fixed bottom-0">
      <Footer />
    </div>
  </main>
</template>
<script>
import Bg from './assets/bg2.gif'
import Footer from './components/footer.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    Footer: Footer
  },

  mounted() {
    const route = useRoute()

    this.path = route.name
    document.title = 'Portfolio'
  },

  data() {
    return {
      bg: Bg,
      path: 'test'
    }
  }
}
</script>
