<template>
  <div class="h-[6%] font-bold px-4 py-2 text-2xl">Skills</div>
  <div class="h-[82%] w-full flex flex-col justify-center items-center lg:px-48">
    <div class="max-h-[94%] lg:w-[800px] w-96 py-4  px-4 hover:overflow-auto overflow-hidden ">
      <div class="h-[94%] w-full flex flex-wrap h-fit justify-center gap-4">
        <template v-for="skill in skills">
          <div v-if="skill.show" class="p-3 px-5 rounded-lg border shadow-md w-fit h-fit">
            <div class="font-medium text-center">
              <p class="text-lg">{{ skill.name }}</p>
              <p class="text-gray-500 text-xs">{{ skill.language }}</p>
              <div class="w-full pt-2">
                <div class="">{{ skill.rate }}/10</div>
                <div class="h-2 w-full rounded-lg" :class="handleColorRating(skill.rate)"></div>
              </div>
            </div>
          </div>
        </template>
      </div>

    </div>
    <div class="h-[6%] w-full flex justify-center items-center space-x-2">
      <select @change="handleFilter()" v-model="selected" name="" id="" class="px-1 py-1 rounded-md border ">
        <option value="" selected>All</option>
        <option v-for="language of filterLanguage()" :value="language"> {{ language }}</option>
      </select>
      <button @click="handleSort('ascending')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
      <button @click="handleSort('descending')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  data() {
    return {
      sortBy: 'descending',
      selected: "",
      skills: [
        {
          show: true,
          name: 'PHP',
          rate: 6.5,
          language: 'PHP'
        },
        {
          show: true,
          name: 'Laravel',
          rate: 8,
          language: 'PHP'
        },
        {
          show: true,
          name: 'Javascript',
          rate: 8.5,
          language: 'Javascript'
        },
        {
          show: true,
          name: 'Node.JS',
          rate: 7.5,
          language: 'Javascript'
        },
        {
          show: true,
          name: 'Koa.JS',
          rate: 7.5,
          language: 'Javascript'
        },
        {
          show: true,
          name: 'Express.JS',
          rate: 8,
          language: 'Javascript'
        },
        {
          show: true,
          name: 'JQuery',
          rate: 7.5,
          language: 'Javascript'
        },
        {
          show: true,
          name: 'CSS',
          rate: 5,
          language: 'CSS'
        },
        {
          show: true,
          name: 'Tailwind CSS',
          rate: 8,
          language: 'CSS'
        },
        {
          show: true,
          name: 'Bootstrap CSS',
          rate: 7.5,
          language: 'CSS'
        },
        {
          show: true,
          name: 'Relational Database',
          rate: 6.5,
          language: 'SQL Database'
        },
        {
          show: true,
          name: 'Mysql DB',
          rate: 7.5,
          language: 'SQL Database'
        },
        {
          show: true,
          name: 'Oracle DB',
          rate: 6.5,
          language: 'SQL Database'
        },
        {
          show: true,
          name: 'Redis',
          rate: 6.5,
          language: 'Cache'
        },
        {
          show: true,
          name: 'Linux',
          rate: 6.5,
          language: 'Linux'
        },
        {
          show: true,
          name: 'Ubuntu',
          rate: 6.5,
          language: 'Linux'
        },
        {
          show: true,
          name: 'Oracle Linux',
          rate: 6.5,
          language: 'Linux'
        },
      ]
    }
  },
  mounted() {
    this.skills  = this.skills.sort((a, b) => b.rate - a.rate)
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
  }
}

</script>