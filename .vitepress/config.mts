/*import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Questions",
  description: "Competitive Exams questions",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})*/
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Q&A Web App",
  description: "Study guide web app",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Q&A Bank', link: '/Complete_QA_Bank_By_Focus_Areas' },
      { text: '30-Day MCQ Roadmap', link: '/30_Day_MCQ_Roadmap' },
      { text: 'Day 1 of 30 MCQs', link: '/Day01_of_30_MCQ_Set' }
    ],

    sidebar: [
      {
        text: 'Study Material',
        items: [
          { text: 'Complete Q&A Bank', link: '/Complete_QA_Bank_By_Focus_Areas' },
          { text: '30-Day MCQ Roadmap', link: '/30_Day_MCQ_Roadmap' },
      { text: 'Day 1 of 30 MCQs', link: '/Day01_of_30_MCQ_Set' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})