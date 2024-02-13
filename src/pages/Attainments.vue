<template>
  <div class="h-[6%] font-bold px-4 py-2 text-2xl">Attainments</div>
  <div class="h-[82%] w-full flex flex-col justify-center items-center lg:px-48 transition-all">
    <div
      class="max-h-[94%] lg:w-[800px] w-96 py-4  px-4 hover:overflow-auto overflow-hidden flex flex-wrap gap-3 relative">
      <div v-for="attainment in attainments" class="p-3 px-5 rounded-lg border shadow-md w-[23rem] flex flex-col h-fit">
        <button @click="previewImage(attainment.eventName)" class="w-full h-48 bg-gray-900  rounded-md border overflow-hidden">
          <img :src="attainment.image" :alt="attainment.eventName" class="object-contain w-full h-full text-white">
        </button>
        <div class="pt-2 text-center">
          <p class="text-2xl font-bold">{{ attainment.attained }}</p>
          <p class="font-medium text-gray-600">{{ attainment.eventName }}</p>
          <p class="pt-2 font-medium">{{ attainment.info }}</p>
        </div>
      </div>
    </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
              stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div class="w-full h-[90%] grid place-items-center">
        <div class="w-[85%] h-[90%] overflow-hidden rounded-md">
          <img :src="attainments[showImage.eventName].image" class="w-full h-full object-contain">
        </div>
      </div>
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