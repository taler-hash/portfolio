import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const Main = () => import('../pages/Main.vue')
const Skills = () => import('../pages/Skills.vue')
const Experience = () => import('../pages/Experience.vue')
const Education = () => import('../pages/Education.vue')
const Projects = () => import('../pages/Projects.vue')
const Attainments = () => import('../pages/Attainments.vue')
const notFound = () => import('../pages/notFound.vue')

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
