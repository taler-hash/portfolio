<template>
  <section class="page">
    <header class="page-head">
      <h1>Projects</h1>
    </header>
    <div class="grid gap-4 md:grid-cols-2">
      <article :id="project.name" v-for="project in projects" :key="project.name" class="panel flex flex-col p-5">
        <div class="flex items-center justify-between gap-3">
          <p class="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">{{ project.type }}</p>
          <span class="chip">{{ project.link ? 'Public' : 'Private' }}</span>
        </div>
        <h2 class="mt-3 text-lg font-semibold tracking-tight">{{ project.name }}</h2>
        <p class="mt-1 text-sm text-slate-400">{{ project.company }} · {{ project.role }}</p>
        <p class="mt-3 flex-1 text-sm leading-6 text-slate-300">{{ project.info }}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <span v-for="tech in project.techStacks || project.techStack || []" :key="tech" class="chip">{{ tech }}</span>
        </div>
        <a v-if="project.link" :href="project.link" target="_blank" rel="noreferrer" class="mt-4 text-sm text-sky-300">Open project</a>
      </article>
    </div>
  </section>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      projects: {
        'Tic Tac Toe Game': {
          show: true,
          name: 'Tic Tac Toe Game',
          company: 'Side Project',
          role: 'Developed',
          link: 'https://tictactoejtp.vercel.app',
          type: 'Side Project',
          info: `Tic Tac Toe is traditionally played on a 3 × 3 grid. Players take turns placing a mark in one of the cells of the grid. 
          The goal of the game is for players to position their marks so that they make a 
          continuous line of three cells vertically, horizontally, or diagonally.`,
          techStacks: [
            'React JS',
            'Tailwind CSS'
          ]
        },

        'IT Ticketing System': {
          show: false,
          name: 'IT Ticketing System',
          company: 'Tersus Services',
          role: 'Developed and Maintain',
          link: null,
          type: 'Company Based',
          info: `An IT ticketing system is a tool used to track IT service requests, events, incidents, and alerts 
          that might require additional action from IT.`,
          techStacks: [
            'PHP',
            'Laravel',
            'Mysql DB',
            'Tailwind CSS',
            'CSS',
            'Javascript',
            'Vue',
            'CPanel',
            'Node JS'
          ]
        },

        'Customer Relationship Management': {
          show: false,
          name: 'Customer Relationship Management',
          company: 'Tersus Services',
          role: 'Developed and Maintain',
          link: null,
          type: 'Company Based',
          info: `Customer relationship management (CRM) is a technology for managing all of your company's interactions 
          with current and potential customers. 
          The goal is simple: improve relationships to grow your business. 
          CRM technology helps companies stay connected to customers, streamline processes, and improve profitability.`,
          techStacks: [
            'PHP',
            'Laravel',
            'Mysql DB',
            'Tailwind CSS',
            'CSS',
            'Javascript',
            'Vue',
            'CPanel',
            'Node JS'
          ]
        },
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
    this.$nextTick(() => {
      document.getElementById(route.query.project)?.scrollIntoView({ block: 'center' })
    })
  },
  methods: {}
}
</script>