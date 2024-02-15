<template>
  <div class="h-[6%] font-bold px-4 py-2 text-2xl fixed top-0 sticky top-0 -top-[1px] backdrop-blur-lg antialised z-50">
    Projects</div>
  <div class="h-[82%] w-full flex flex-col justify-center items-center lg:px-48">
    <TransitionGroup class="max-h-[94%] lg:w-[800px] w-full py-4  px-4 flex flex-wrap justify-center gap-3 relative"
      :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" tag="div" appear>
      <button v-for="(project, key) in projects" :key="project" :ref="`${key.replace(/\s/g, '').toLowerCase()}`"
        class="p-3 px-5 rounded-lg border shadow-md w-[23rem] flex flex-col h-fit cursor-pointer group text-start relative focus:shadow-gray-600 overflow-hidden"
        :class="{ 'border-gray-200 border-2 shadow-gray-700': project.show }">
        <div class="flex-1">
          <div class="px-2 py-1 rounded-md bg-gray-800 w-fit text-white font-medium mb-2">
            {{ project.link ? 'public' : 'private' }}
          </div>
          <p class="font-bold text-xl">{{ project.name }}</p>
          <p class="font-medium text-lg">{{ project.company }}</p>
          <p class="text-gray-400 font-medium text-sm">{{ project.role }}</p>
          <p class="text-gray-400 font-medium text-sm">{{ project.type }}</p>
        </div>

        <div class="group-focus:block hidden absolute top-0 group-focus:relative">
          <div v-if="project.link" @click="redirect(project.link)" href="http://google.com"
            class="cursor-pointer text-sm py-1 underline">{{ project.link }}</div>
          <div class="transition-all font-medium text-lg flex-1">{{ project.info }}</div>
          <div class=" font-medium flex gap-2 w-full flex-wrap pt-3 ">
            <div v-for="techStack in project.techStacks"
              class="p-1 px-2 bg-gray-800 text-white w-fit rounded-lg text-nowrap">{{ techStack }}</div>
          </div>
        </div>
      </button>
    </TransitionGroup>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import gsap from 'gsap'

export default {
  data() {
    return {
      projects: {
        'Contract Management System': {
          show: false,
          name: 'Contract Management System',
          company: 'Metro Retail Store Group Inc',
          role: 'Maintain and Co-developed',
          link: null,
          type: 'Company Based',
          info: `Contract Management System is an
          automation on making a contract 
          to the supplier and sending it via 
          EDI (Electronic Data Interchange)`,
          techStacks: [
            'PHP',
            'Laravel',
            'Mysql DB',
            'Oracle DB',
            'Bootstrap CSS',
            'CSS',
            'Oracle Linux',
            'Javascript',
          ]
        },
        'RMS User Access Control': {
          show: false,
          name: 'RMS User Access Control',
          company: 'Metro Retail Store Group Inc',
          role: 'Design and Developed',
          link: null,
          type: 'Company Based',
          info: `RMS User Access Control is 
          a management system that will control 
          the role of every user in the Oracle Database`,
          techStacks: [
            'PHP',
            'Laravel',
            'Javascript',
            'Tailwind CSS',
            'Javascript',
            'Vue.JS',
            'Mysql DB',
            'Linux',
            'Oracle Linux'
          ]
        },
        'Resa Session': {
          show: false,
          name: 'Resa Session',
          company: 'Metro Retail Store Group Inc',
          role: 'Design and Developed',
          link: null,
          type: 'Company Based',
          info: `Resa Session is an application that will control the session of user who is accessing in the Oracle Database`,
          techStacks: [
            'PHP',
            'Laravel',
            'Javascript',
            'Tailwind CSS',
            'Javascript',
            'React.JS',
            'Mysql DB',
            'Linux',
            'Oracle Linux'
          ]
        },
        'Electronic Data Interchange': {
          show: false,
          name: 'Electronic Data Interchange',
          company: 'Metro Retail Store Group Inc',
          role: 'Level 3 Support',
          link: null,
          type: 'Company Based',
          info: `Electronic Data Interchange (EDI) is the computer-to-computer exchange of business documents in a 
          standard electronic format between business partners. 
          By moving from a paper-based exchange of business document to one that is electronic, 
          businesses enjoy major benefits such as reduced cost, increased processing speed, reduced errors and improved relationships with business partners.`,
          techStacks: []
        },
        'E Raffle Ticket': {
          show: false,
          name: 'E Raffle Ticket',
          company: 'Metro Retail Store Group Inc',
          role: 'Maintain and Level 3 Support',
          link: null,
          type: 'Company Based',
          info: 'This application is used to generate and record Raffle numbers; account for sales of Raffle Tickets',
          techStacks: [
            'PHP',
            'Linux',
            'Oracle Linux'
          ]
        },
        'Sportsbook API': {
          show: false,
          name: 'Sportsbook API',
          company: 'Cubic Solutions Inc.',
          role: 'Developed',
          link: null,
          type: 'Company Based',
          info: 'This application will serve api live data from any sports with betting state and odds',
          techStacks: [
            'Node.JS',
            'Koa.JS',
            'Redis',
            'JWT',
            'PM2',
            'Linux',
            'Ubuntu',
          ]
        },
        'Web Scraper': {
          show: false,
          name: 'Web Scraper',
          company: 'Cubic Solutions Inc.',
          role: 'Developed',
          link: null,
          type: 'Company Based',
          info: 'Web scraping is the process of using bots to extract content and data from a website',
          techStacks: [
            'Node.JS',
            'Koa.JS',
            'PM2',
            'Linux',
            'Ubuntu',
          ]
        },
        'School Event Management System': {
          show: false,
          name: 'School Event Management System',
          company: 'School',
          role: 'Design and Developed',
          link: 'https://github.com/taler-hash/School-Event-Management-System-by-Tylier',
          type: 'Capstone Based',
          info: 'This application will manage the events of the school',
          techStacks: [
            'PHP',
            'Laravel',
            'Javascript',
            'Tailwind CSS',
            'Javascript',
            'Jquery.JS',
          ]
        },
        'Appointment System': {
          show: false,
          name: 'Appointment System',
          company: 'School',
          role: 'Design and Developed',
          link: 'https://github.com/taler-hash/Appointment-System',
          type: 'Own Capstone Based',
          info: 'This application will set Appointment in registrar. My final capstone Project',
          techStack: [
            'PHP',
            'Boostrap CSS',
            'Javascript',
            'Mysql',
            'Jquery'
          ]
        },
        'Evaluation System': {
          show: false,
          name: 'Evaluation System',
          company: 'School',
          role: 'Design and Developed',
          link: 'https://github.com/taler-hash/Evaluation-System',
          type: 'Capstone Based',
          info: 'This application will manage the evaluation of an intern student',
          techStacks: [
            'PHP',
            'Laravel',
            'Javascript',
            'Tailwind CSS',
            'Javascript',
            'Alpine.JS',
          ]
        },
        'ROTC Management System': {
          show: false,
          name: 'ROTC Management System',
          company: 'School',
          role: 'Still Designing and Developing',
          link: null,
          type: 'ROTC Unit Based',
          info: 'This application will manage the datas of the cadets',
          techStacks: [
            'PHP',
            'Laravel',
            'Javascript',
            'Tailwind CSS',
            'Javascript',
            'Vue.JS',
            'Linux',
            'Ubuntu'
          ]
        },
      },

    }
  },
  mounted() {
    const route = useRoute()

    if (!route.query.project) return

    const key = route.query.project.replace(/\s/g, '').toLowerCase()
    this.$refs[key][0].focus()
  },

  watch: {
    projects: {
      handler: function (n, o) {
        console.log(o)
      },
      deep: true
    },
  },

  methods: {
    redirect(link) {
      window.open(link, '_blank')
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