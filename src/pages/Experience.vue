<template>
  <div class="h-[6%] font-bold px-4 py-2 text-2xl">Experiences</div>
  <div class="h-[82%] w-full flex justify-center ">
    <div class="w-[500px] py-4 space-y-4 text-wrap px-4 hover:overflow-y-auto overflow-hidden">
      <div v-for="exp in exps" class="p-3 px-5 rounded-lg border shadow-md">
        <div class="pb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
          </svg>
        </div>
        <div class="pb-1.5">
          <p class="font-bold text-xl">{{ exp.company }}</p>
          <div class="text-sm font-medium">
            {{ exp.years }}
          </div>
        </div>
        <div class="pb-3">
          <p class="font-bold">Been Handling:</p>
          <ul  class="list-disc list-inside font-medium">
            <li v-for="handling in exp.handlings"> {{ handling }}</li>
          </ul>
        </div>
        <div class=" font-medium flex gap-2 w-full flex-wrap">
          <div v-for="skill in exp.skillsets" class="p-1 px-2 bg-gray-800 text-white w-fit rounded-lg text-nowrap">{{ skill }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      exps: [
        {
          company: 'Cubic Solutions Inc',
          handlings: [
            'SportsBook API',
            'Web Scraper',
          ],
          years: '3 months',
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
        },
        {
          company: 'Metro Retail Store Group Inc',
          handlings: [
            'RMS User Access Control ( Design and Developed )',
            'Resa Session ( Design and Developed )',
            'EDI ( Level 3 Support )',
            'CMS ( Maintain and Co-developed )',
            'E Raffle Ticket ( Maintain )'
          ],
          years: '1 year and 2 months',
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

          ]
        }
      ]
    }
  }
}

</script>