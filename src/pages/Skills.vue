<template>
  <div class="h-[6%] font-bold px-4 py-2 text-2xl sticky top-0 -top-[1px] backdrop-blur-lg antialised">Skills</div>
  <div class="h-[82%] w-full flex flex-col justify-center items-center lg:px-48 transition-all pb-24">
    <div class="max-h-[94%] lg:w-[800px] w-full py-4  px-4 ">
      <div class="h-[94%] w-full flex flex-wrap h-fit justify-center  transition-all">
        <TransitionGroup tag="ul" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" appear
          class="flex flex-wrap gap-4 justify-center w-full">
          <li v-for="skill in filterSkills" :key="skill" class="w-full md:w-[200px] overflow-hidden">
            <div class="p-3 px-5 rounded-lg border shadow-md w-full h-fit">
              <div class="font-medium text-center">
                <p class="text-lg">{{ skill.name }}</p>
                <p class="text-gray-500 text-xs">{{ skill.language }}</p>
                <div class="w-full pt-2">
                  <div class="">{{ skill.rate }}/10</div>
                  <div class="h-2 w-full rounded-lg" :class="handleColorRating(skill.rate)"></div>
                </div>
              </div>
            </div>
          </li>
        </TransitionGroup>
      </div>
      <div class="pt-12"></div>
    </div>
    <div class="h-[6%] w-full flex justify-center items-center space-x-2 fixed bottom-[6.5rem] bg-white">
      <select v-model="filterBy" name="" id="" class="px-1 py-1 rounded-md border ">
        <option value="" selected>All</option>
        <option v-for="language of filterLanguage()" :value="language"> {{ language }}</option>
      </select>
      <button @click="sortType = 'ascending'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
      <button @click="sortType = 'descending'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      sortType: 'descending',
      filterBy: "",
      skills: [
        {
          name: 'CPanel',
          rate: 6.5,
          language: 'Deployment'
        },
        {
          name: 'PHP',
          rate: 6.5,
          language: 'PHP'
        },
        {
          name: 'Laravel',
          rate: 8,
          language: 'PHP'
        },
        {
          name: 'Javascript',
          rate: 8.5,
          language: 'Javascript'
        },
        {
          name: 'Typescript',
          rate: 5,
          language: 'Javascript'
        },
        {
          name: 'Vue.JS',
          rate: 8,
          language: 'Javascript'
        },
        {
          name: 'React.JS',
          rate: 7,
          language: 'Javascript'
        },
        {
          name: 'Node.JS',
          rate: 7.5,
          language: 'Javascript'
        },
        {
          name: 'Koa.JS',
          rate: 7.5,
          language: 'Javascript'
        },
        {
          name: 'Express.JS',
          rate: 8,
          language: 'Javascript'
        },
        {
          name: 'JQuery',
          rate: 7.5,
          language: 'Javascript'
        },
        {
          name: 'CSS',
          rate: 6.5,
          language: 'CSS'
        },
        {
          name: 'Tailwind CSS',
          rate: 8,
          language: 'CSS'
        },
        {
          name: 'Bootstrap CSS',
          rate: 7.5,
          language: 'CSS'
        },
        {
          name: 'Relational Database',
          rate: 6.5,
          language: 'SQL Database'
        },
        {
          name: 'Mysql DB',
          rate: 7.5,
          language: 'SQL Database'
        },
        {
          name: 'Oracle DB',
          rate: 6.5,
          language: 'SQL Database'
        },
        {
          name: 'Redis',
          rate: 6.5,
          language: 'Cache'
        },
        {
          name: 'Linux',
          rate: 6.5,
          language: 'Linux'
        },
        {
          name: 'Ubuntu',
          rate: 6.5,
          language: 'Linux'
        },
        {
          name: 'Oracle Linux',
          rate: 6.5,
          language: 'Linux'
        },

      ]
    }
  },
  mounted() {
    this.skills = this.skills.sort((a, b) => b.rate - a.rate)
  },

  computed: {
    filterSkills() {
      const res = !this.filterBy.length ? this.skills : this.skills.filter((a) => a.language === this.filterBy)
      return res.sort((a, b) => this.sortType === 'descending' ? b.rate - a.rate : a.rate - b.rate)
    }
  },

  methods: {
    handleColorRating(rate) {
      return rate <= 3 ? 'bg-red-500'
        : rate <= 5 ? 'bg-amber-500'
          : rate <= 7 ? 'bg-lime-500'
            : 'bg-green-500'
    },

    filterLanguage() {
      const res = [... new Set(this.skills.map(v => v.language))]

      return res
    },

    handleFilter() {
      this.skills = this.skills.map(v => {
        if (this.selected === "" || this.selected === v.language) {
          v.show = true
        } else {
          v.show = false
        }

        return v
      })
    },

    handleSort(type) {
      if (this.sortBy === type) return
      this.skills = this.skills.sort((a, b) => type === 'descending' ? b.rate - a.rate : a.rate - b.rate)
      this.sortBy = type
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