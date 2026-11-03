<template>
  <section class="page narrow">
    <header class="page-head">
      <h1>Education</h1>
    </header>
    <div class="grid gap-4">
      <article v-for="education in educations" :key="education.name" class="panel p-5">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h2 class="text-lg font-semibold tracking-tight">{{ education.name }}</h2>
          <p class="text-sm text-slate-400">{{ education.year }}</p>
        </div>
        <p class="mt-2 text-sm text-slate-300">{{ education.stage }}</p>
        <p v-if="education.degree" class="mt-1 text-sm text-slate-400">{{ education.degree }}</p>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      educations: [
        {
          name: 'Cebu Technological University - Consolacion Campus',
          stage: 'College',
          year: '2018 - 2022',
          degree: 'Bachelor of Science in Information Technology',

        },
        {
          name: 'ACLC College of Mandaue',
          stage: 'Senior High School',
          year: '2016-2018',
          degree: 'TVL - ICT',

        },
        {
          name: 'Don Gerardo Memorial National Highschool',
          stage: 'Junior Highschool',
          year: '2012-2016',
          degree: '',
        },
        {
          name: 'Guadalupe Elementary School',
          stage: 'Elementary',
          year: '2006-2012',
          degree: '',
        },
      ]
    }
  }
}
</script>
  