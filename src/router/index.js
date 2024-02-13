import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Skills from '../pages/Skills.vue'
import Experience from '../pages/Experience.vue'
import Education from '../pages/Education.vue'
import Projects from '../pages/Projects.vue'
import Attainments from '../pages/Attainments.vue'
import notFound from '../pages/notFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:notFound",
      component: notFound,
    },
    {
      path: '/',
      name: 'home',
      redirect: to => { return {name : 'About Me'}},
      children: [
        {
          path: '/me',
          name: 'About Me',
          component: Main
        },
        {
          path: '/skills',
          name: 'Skills',
          component: Skills
        },
        {
          path: '/experience',
          name: 'Experience',
          component: Experience
        },
        {
          path: '/education',
          name: 'Education',
          component: Education
        },
        {
          path: '/projects',
          name: 'Projects',
          component: Projects
        },
        {
          path: '/attainments',
          name: 'Attainments',
          component: Attainments
        },
      ]
    },
  ]
})

export default router
