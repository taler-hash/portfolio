<template>
  <div class="h-[6%] font-bold px-4 py-2 text-2xl">Education</div>
  <div class="h-[82%] w-full flex justify-center">
    <div class="w-[500px] py-4 space-y-4 text-wrap px-4">
      <div v-for="education in educations" class="p-3 px-5 rounded-lg border shadow-md">
        <div class="pb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
        </div>
        <div class="pb-1.5">
          <p class="font-bold text-xl">{{ education.name }}</p>
          <div class="text-sm font-medium text-gray-600">
            <p>{{ education.year }}</p>
            <p>{{ education.stage }}</p>
          </div>
          <div class="font-medium text-lg">{{ education.degree }}</div>
        </div>
      </div>
    </div>
  </div>
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
  