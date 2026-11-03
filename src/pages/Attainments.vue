<template>
  <section class="page">
    <header class="page-head">
      <h1>Awards</h1>
    </header>
    <div class="grid gap-4 sm:grid-cols-2">
      <article v-for="attainment in attainments" :key="attainment.eventName" class="panel overflow-hidden">
        <button
          v-if="attainment.image"
          class="block h-48 w-full bg-black/40"
          @click="previewImage(attainment.eventName)">
          <img v-lazy="{ src: attainment.image, delay: 200 }" :alt="attainment.eventName" class="h-full w-full object-cover">
        </button>
        <div v-else class="grid h-48 place-items-center bg-white/5 text-sm text-slate-500">No photo</div>
        <div class="p-5">
          <h2 class="text-lg font-semibold tracking-tight">{{ attainment.attained }}</h2>
          <p class="mt-1 text-sm text-slate-400">{{ attainment.eventName }}</p>
          <p v-if="attainment.info" class="mt-3 text-sm leading-6 text-slate-300">{{ attainment.info }}</p>
        </div>
      </article>
    </div>
  </section>
  <div v-if="showImage.show" class="fixed inset-0 z-30 flex flex-col bg-black/80 p-4 backdrop-blur-sm">
    <div class="flex items-start justify-between gap-4 text-white">
      <div>
        <p class="text-lg font-semibold">{{ attainments[showImage.eventName].attained }}</p>
        <p class="text-sm text-slate-300">{{ attainments[showImage.eventName].eventName }}</p>
      </div>
      <button class="grid h-10 w-10 place-items-center rounded-full border border-white/15" aria-label="Close" @click="showImage.show = false">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <div class="mt-4 grid min-h-0 flex-1 place-items-center">
      <img :src="attainments[showImage.eventName].image" :alt="showImage.eventName" class="max-h-full max-w-full rounded-xl object-contain">
    </div>
  </div>
</template>
<script>
import img from '../assets/attainments'

export default {
  data() {
    return {
      showImage: {
        eventName: null,
        show: false
      },
      attainments: {
        'Academic Degree Award ( BSIT )': {
          eventName: 'Academic Degree Award ( BSIT )',
          attained: 'Cum Laude',
          info: 'The first BSIT Cum Laude in School',
          image: img.cumlaude
        },
        'Academic Special Award ( BSIT )': {
          eventName: 'Academic Special Award ( BSIT )',
          attained: 'Best in On-The-Job Trainee',
          info: null,
          image: img.bestInOjt
        },
        'Cebu Techtalk 1.0': {
          eventName: 'Cebu Techtalk 1.0',
          attained: 'Guest Speaker',
          image: img.techtalk,
          info: 'Pioneering Guest Speaker'
        },
        'Departmental Position': {
          eventName: 'Departmental Position',
          attained: 'Vice Governor',
          image: img.viceGovernor,
          info: 'The first in first year to get the position as vice governor',
        },
        'ROTC Unit (Staff)': {
          eventName: 'ROTC Unit (Staff)',
          attained: 'S1 - Administrator',
          image: null,
          info: 'Serving as Admin from 2018 to 2020'
        },
        'ROTC Unit (ARAPT)': {
          eventName: 'ROTC Unit (ARAPT)',
          attained: 'Advanced ROTC Course Graduate',
          image: img.arapt,
          info: ''
        },
        'ROTC Unit (RSCT)': {
          eventName: 'ROTC Unit (RSCT)',
          attained: 'ROTC Summer Camp Training Graduate',
          image: img.rsct,
          info: ''
        },
        'ExtraCurricular Activities (video making)': {
          eventName: 'ExtraCurricular Activities (video making)',
          attained: 'Best in Cinematography',
          image: img.videoMaking,
        },
        'ExtraCurricular Activities (poster making)': {
          eventName: 'ExtraCurricular Activities (poster making)',
          attained: '1st Runner Up Poster Making Contest',
          image: img.posterMaking,
        },
        'ExtraCurricular Activities (culmination)': {
          eventName: 'ExtraCurricular Activities (culmination)',
          attained: '1st Runner Up Mr. Physical Education',
          image: img.mrPE,
        }
      }
    }
  },
  methods: {
    previewImage(eventName) {
      this.showImage.show = true
      this.showImage.eventName = eventName
    }
  }
}
</script>