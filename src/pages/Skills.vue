<template>
  <section class="page">
    <header class="page-head">
      <h1>Skills</h1>
      <div class="flex items-center gap-2">
        <select v-model="filterBy" class="h-9 rounded-lg border border-white/10 bg-[#0c1018] px-3 text-sm">
          <option value="">All</option>
          <option v-for="language of filterLanguage()" :key="language" :value="language">{{ language }}</option>
        </select>
        <button class="grid h-9 w-9 place-items-center rounded-lg border border-white/10" aria-label="Sort ascending" @click="sortType = 'ascending'">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>
        </button>
        <button class="grid h-9 w-9 place-items-center rounded-lg border border-white/10" aria-label="Sort descending" @click="sortType = 'descending'">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
        </button>
      </div>
    </header>
    <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      <li v-for="skill in filterSkills" :key="skill.name" class="panel px-4 py-4">
        <p class="truncate text-[15px] font-medium">{{ skill.name }}</p>
        <p class="mt-0.5 text-xs text-slate-400">{{ skill.language }}</p>
        <div class="mt-4 flex items-center gap-2">
          <div class="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <div class="h-full rounded-full bg-sky-400" :style="{ width: `${skill.rate * 10}%` }"></div>
          </div>
          <span class="w-8 text-right text-xs tabular-nums text-slate-400">{{ skill.rate }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      sortType: 'descending',
      filterBy: "",
      skills: [
        {
          name: 'SugarCRM',
          rate: 7,
          language: 'Platform'
        },
        {
          name: 'AWS',
          rate: 6,
          language: 'Server'
        },
        {
          name: 'Angular',
          rate: 6,
          language: 'Javascript'
        },
        {
          name: 'Git',
          rate: 7,
          language: 'Versioning'
        },
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
    filterLanguage() {
      return [...new Set(this.skills.map(v => v.language))]
    }
  }
}

</script>