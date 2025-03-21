<template>
  <div class="h-[6%] font-bold px-4 py-2 text-2xl sticky -top-[1px] backdrop-blur-lg antialised z-50 flex items-center space-x-4">
    <p>Experiences</p>
    <span class="text-sm font-medium text-gray-500">{{ this.getTotalExp() }}</span>
  </div>
  <div class="h-[82%] w-full flex justify-center lg:px-48">
    <div class="w-[500px] py-4 space-y-4 text-wrap px-4 ">
      <TransitionGroup tag="ul"
        :css="false"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
        appear>
        <li v-for="exp in exps" :key="exp" class="p-3 px-5 rounded-lg border shadow-md w-full mb-4 h-fit overflow-hidden">
          <div class="pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>
          </div>
          <div class="pb-1.5">
            <p class="font-bold text-xl">{{ exp.company }}</p>
            <p class="font-medium underline underline-offset-[2.5px]">{{ exp.role }}</p>
            <div class="text-sm font-medium text-gray-600">
              {{ exp.years }}
            </div>
          </div>
          <div class="pb-3">
            <p class="font-bold">Been Handling:</p>
            <ul class="list-disc list-inside font-medium">
              <li v-for="handling in exp.handlings"><router-link
                  :to="handling.show ? { path: '/projects', query: { project: handling.name } } : {}">
                  {{ handling.name }}</router-link> </li>
            </ul>
          </div>
          <div class=" font-medium flex gap-2 w-full flex-wrap">
            <div v-for="skill in exp.skillsets" class="p-1 px-2 bg-gray-800 text-white w-fit rounded-lg text-nowrap">{{
              skill }}</div>
          </div>
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      exps: [
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
          years: 'August 2024 - April 2025 | 8 months | Fulltime',
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
    },
    getTotalExp() {
      const totalMonths = this.exps.reduce((acc, curr) => acc + curr.monthsOfExp, 0);
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;
      return `${years} years and ${months} months`;
    }
  }
}
</script>