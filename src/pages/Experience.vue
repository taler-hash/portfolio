<template>
  <section class="page narrow">
    <header class="page-head">
      <h1>Experience</h1>
      <p class="pb-1 text-sm text-slate-400">{{ getTotalExp() }}</p>
    </header>
    <div class="grid gap-4">
      <article v-for="exp in exps" :key="exp.company" class="panel p-5">
        <h2 class="text-xl font-semibold tracking-tight">{{ exp.company }}</h2>
        <p class="mt-1 text-[15px] text-slate-200">{{ exp.role }}</p>
        <p class="mt-1 text-sm text-slate-400">{{ exp.years }}</p>
        <p class="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Been handling</p>
        <ul class="mt-2 space-y-1 text-sm leading-6 text-slate-200">
          <li v-for="handling in exp.handlings" :key="handling.name">
            <router-link
              v-if="handling.show"
              class="underline decoration-white/20 underline-offset-4 hover:decoration-white"
              :to="{ path: '/projects', query: { project: handling.name } }">
              {{ handling.name }}
            </router-link>
            <span v-else>{{ handling.name }}</span>
          </li>
        </ul>
        <div v-if="exp.skillsets" class="mt-4 flex flex-wrap gap-1.5">
          <span v-for="skill in exp.skillsets" :key="skill" class="chip">{{ skill }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      exps: [
        {
          company: 'Cyberland Consultancy Pte Ltd.',
          role: 'Mid Level Software Engineer',
          handlings: [
            {
              name: 'AWWA School ( Co Lead and Maintain)',
              show: true,
            },
            {
              name: 'AWWA SSCC - Special Student Care Centre (Lead and Maintain)',
              show: true,
            }
          ],
          years: `April 2025 - Present | ${this.getMonthsFrom(2025, 4)} months | Fulltime`,
          skillsets: [
            'React.JS',
            'PHP',
            'Git',
            'Docker',
            'AWS',
            'SugarCRM',
            'Laravel',
            'Mysql',
          ],
          monthsOfExp: this.getMonthsFrom(2025, 4)
        },
        {
          company: 'CRM Online Australia Pty Ltd.',
          role: 'Junior Software Engineer',
          handlings: [
            {
              name: 'Sugar CRM ( Deep customization )',
              show: true,
            },
            {
              name: 'Pet Tracker Mobile ( Maintain )',
              show: true,
            },
            {
              name: 'Vet Portal ( Maintain )',
              show: true,
            },
          ],
          years: `August 2024 - April 2025 | 8 months | Fulltime`,
          skillsets: [
            'React.JS',
            'Lumen',
            'PHP',
            'Angular',
            'Ionic',
            'Git',
            'Docker',
            'AWS',
            'SugarCRM',
            'Laravel',
            'Mysql',
          ],
          monthsOfExp: 8
        },
        {
          company: 'Tersus Services',
          role: 'Full stack Developer',
          handlings: [
            {
              name: 'Customer Relationship Management',
              show: true,
            },
            {
              name: 'IT Ticketing System',
              show: true,
            },
          ],
          years: 'March 2023 - Present | 5 months | Fulltime',
          skillsets: [
            'Vue.JS',
            'Laravel',
            'PHP',
            'Node JS',
            'Mysql',
            'CPanel',
          ],
          monthsOfExp: 5
        },
        {
          company: 'Cubic Solutions Inc',
          role: 'Full stack Developer',
          handlings: [
            {
              name: 'SportsBook API',
              show: true,
            },
            {
              name: 'Web Scraper',
              show: true,
            },
          ],
          years: 'Oct 2023 - Jan 2024 | 3 months | Fulltime',
          skillsets: [
            'Vue.JS',
            'Redis',
            'Javascript',
            'Node.JS',
            'Koa.JS',
            'Express.JS',
            'SCSS',
            'Tailwind CSS',
            'Bootstrap CSS',
            'Mysql',
            'Linux',
            'Ubuntu'
          ],
          monthsOfExp: 3
        },
        {
          company: 'Metro Retail Store Group Inc',
          role: 'Software Developer',
          handlings: [
            {
              name: 'RMS User Access Control',
              show: true,
            },
            {
              name: 'Resa Session',
              show: true,
            },
            {
              name: 'Electronic Data Interchange',
              show: true,
            },
            {
              name: 'Contract Management System',
              show: true,
            },
            {
              name: 'E Raffle Ticket',
              show: true,
            },
          ],
          years: 'Aug 2022 – Sept 2023 | 1 year and 2 months | Fulltime',
          skillsets: [
            'Mysql',
            'Jquery',
            'Tailwind CSS',
            'Bootstrap CSS',
            'Mysql',
            'Oracle DB',
            'Node.JS',
            'Express.JS',
            'Laravel',
            'PHP',
            'Javascript',
            'Adonis.JS',
            'Linux',
            'Oracle Linux',
            'Ubuntu',
          ],
          monthsOfExp: 14
        },
        {
          company: 'Cold Link Asia Logistic',
          role: 'IT Technician',
          years: 'Sep 2019 - Dec 2019 | 3 months | Intern',
          handlings: [
            {
              name: 'Computer Repair',
              show: false,
            },
          ],
          monthsOfExp: 0
        }
      ]
    }
  },
  methods: {
    getTotalExp() {
      const totalMonths = this.exps.reduce((acc, curr) => acc + curr.monthsOfExp, 0)
      const years = Math.floor(totalMonths / 12)
      const months = totalMonths % 12
      const yearLabel = years === 1 ? 'year' : 'years'
      const monthLabel = months === 1 ? 'month' : 'months'
      if (!years) return `${months} ${monthLabel}`
      if (!months) return `${years} ${yearLabel}`
      return `${years} ${yearLabel}, ${months} ${monthLabel}`
    },
    getMonthsFrom(startYear, startMonth) {
      const startDate = new Date(startYear, startMonth - 1); // Month is 0-indexed (0 = Jan, 3 = April)
      const today = new Date();

      // Calculate years difference * 12 + months difference
      let months = (today.getFullYear() - startDate.getFullYear()) * 12;
      months -= startDate.getMonth();
      months += today.getMonth();

      // Ensure result is not negative if start date is in future
      return months <= 0 ? 0 : months;
    }
  }
}
</script>