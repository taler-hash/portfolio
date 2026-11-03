<template>
  <main class="relative h-dvh w-full overflow-hidden text-slate-100">
    <SceneBackground />
    <div class="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,8,15,0.72)_100%)]"></div>
    <div class="relative z-10 h-full overflow-y-auto overflow-x-hidden">
      <router-view></router-view>
    </div>
    <div class="pointer-events-none fixed inset-x-0 bottom-0 z-20 px-4 pb-4">
      <Footer />
    </div>
  </main>
</template>
<script>
import Footer from './components/footer.vue'
import SceneBackground from './components/SceneBackground.vue'

export default {
  components: {
    Footer,
    SceneBackground
  },
  mounted() {
    document.title = 'Jurie Tylier Pedrogas'
  }
}
</script>
