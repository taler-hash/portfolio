<template>
  <div class="h-[6%] font-bold px-4 py-2 text-2xl sticky top-0 -top-[1px] backdrop-blur-lg antialised z-50">Attainments
  </div>
  <div class="h-[82%] w-full flex flex-col justify-center items-center lg:px-48 transition-all">
    <TransitionGroup :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" tag="div" appear
      class="max-h-[94%] lg:w-[800px] w-full py-4  px-4 flex flex-wrap justify-center gap-3 relative">
      <div v-for="attainment in attainments" :key="attainment" class="p-3 px-5 rounded-lg border shadow-md w-[23rem] flex flex-col h-fit overflow-hidden">
        <button @click="previewImage(attainment.eventName)"
          class="w-full h-48 bg-gray-900  rounded-md border overflow-hidden">
          <img :src="attainment.image" :alt="attainment.eventName" class="object-contain w-full h-full text-white">
        </button>
        <div class="pt-2 text-center">
          <p class="text-2xl font-bold">{{ attainment.attained }}</p>
          <p class="font-medium text-gray-600">{{ attainment.eventName }}</p>
          <p class="pt-2 font-medium">{{ attainment.info }}</p>
        </div>
      </div>
    </TransitionGroup>
  </div>
  <!-- Show Image -->
  <div v-if="showImage.show" class="absolute top-0 w-full h-screen overflow-hidden bg-black/[.75] z-50">
    <div class="flex w-full h-full flex-col">
      <div class="flex text-white font-medium items-center justify-between px-4">
        <div class="p-2 px-4 bg-gray-900 mt-1 rounded-lg">
          <p class="text-xl">{{ attainments[showImage.eventName].attained }}</p>
          <p class="text-lg">{{ attainments[showImage.eventName].eventName }}</p>
        </div>
        <div class="">
          <button @click="showImage.show = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
              class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div class="w-full h-[90%] grid place-items-center">
        <div class="w-[85%] h-[90%] overflow-hidden rounded-md">
          <img 
            v-lazy="{
              src: attainments[showImage.eventName].image, 
              loading: LoadingComponent,  
              delay: 200}" 
            class="min-w-48 min-h-48 object-contain">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img from '../assets/attainments'
import gsap from 'gsap'
import LoadingComponent from '@/components/LoadingComponent.vue';

export default {
  data() {
    return {
      showImage: {
        eventName: null,
        show: false
      },
      LoadingComponent: LoadingComponent,
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
    },
    onBeforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: 'auto',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    }
  }
}
</script>