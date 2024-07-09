import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import loadingComponent from '../components/LoadingComponent.vue'

const Main = defineAsyncComponent({
  loader:() => import('../pages/Main.vue'),
  loadingComponent: loadingComponent})
const Skills = defineAsyncComponent({
  loader:() => import('../pages/Skills.vue'),
  loadingComponent: loadingComponent})
const Experience = defineAsyncComponent({
  loader:() => import('../pages/Experience.vue'),
  loadingComponent: loadingComponent})
const Education = defineAsyncComponent({
  loader:() => import('../pages/Education.vue'),
  loadingComponent: loadingComponent})
const Projects = defineAsyncComponent({
  loader:() => import('../pages/Projects.vue'),
  loadingComponent: loadingComponent})
const Attainments = defineAsyncComponent({
  loader:() => import('../pages/Attainments.vue'),
  loadingComponent: loadingComponent})
const notFound = defineAsyncComponent({
  loader:() => import('../pages/notFound.vue'),
  loadingComponent: loadingComponent})

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
