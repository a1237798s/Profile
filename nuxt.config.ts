// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  compatibilityDate: "2025-08-05",
  devtools: { enabled: true },
  modules: ["@nuxt/icon"],
  ssr: false,
  // SEO 配置
  app: {
    baseURL: "/profile/",
    head: {
      title: "邱炫銘 | 個人履歷網站 | 全端工程師 | Software Engineer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "你好我是邱炫銘 Raiter - 全端工程師 | Software Engineer，這是我的履歷網頁，專精 C#、ASP.NET、Vue.js、SQL Server 開發。具備企業級系統開發經驗，能獨立完成全端專案。歡迎企業合作與面試機會。",
        },
        { name: "author", content: "Raiter" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:title", content: "邱炫銘 Raiter | 全端工程師 | C# ASP.NET Vue.js 開發者" },
        {
          property: "og:description",
          content: "邱炫銘 Raiter - 全端工程師，專精 C#、ASP.NET、Vue.js、SQL Server 開發。具備企業級系統開發經驗，能獨立完成全端專案。",
        },
        {
          property: "og:url",
          content: "https://a1237798s.github.io/profile/",
        },
        { property: "og:site_name", content: "Raiter 工程師履歷" },
        { property: "og:locale", content: "zh_TW" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Raiter - 全端工程師履歷 | C# ASP.NET Vue.js 開發者" },
        {
          name: "twitter:description",
          content: "Raiter - 資深全端工程師，專精 C#、ASP.NET、Vue.js、SQL Server 開發。",
        },
        { name: "twitter:creator", content: "@raiterportfolio" },

        // 履歷網站專用 SEO 標籤
        {
          name: "keywords",
          content: "全端工程師, Software Engineer, C#, ASP.NET, Vue.js, SQL Server, 軟體工程師, 履歷, 求職, 面試, 後端開發, 前端開發, 資料庫設計, 企業系統開發",
        },
        { name: "theme-color", content: "#00ff00" },
        { name: "msapplication-TileColor", content: "#00ff00" },
        { name: "job-title", content: "全端工程師" },
        { name: "experience-level", content: "資深" },
        { name: "location", content: "台灣" },
        { name: "availability", content: "可面試" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: process.env.NODE_ENV === "production" ? "/profile/favicon.ico" : "/favicon.ico" },
        {
          rel: "canonical",
          href: "https://a1237798s.github.io/profile/",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
      script: [
        {
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Raiter",
            jobTitle: "全端工程師",
            description: "資深全端工程師，專精 C#、ASP.NET、Vue.js、SQL Server 開發",
            url: "https://a1237798s.github.io/profile/",
            sameAs: ["https://github.com/a1237798s"],
            knowsAbout: ["C#", "ASP.NET", "Vue.js", "SQL Server", "JavaScript", "HTML/CSS", "Node.js", "企業系統開發"],
            worksFor: {
              "@type": "Organization",
              name: "自由接案 / 求職中",
            },
            alumniOf: {
              "@type": "Organization",
              name: "資訊工程相關科系",
            },
            hasOccupation: {
              "@type": "Occupation",
              name: "軟體工程師",
              occupationLocation: {
                "@type": "Country",
                name: "台灣",
              },
            },
          }),
          type: "application/ld+json",
        },
        {
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Raiter 工程師履歷",
            url: "https://a1237798s.github.io/profile/",
            description: "Raiter 的個人履歷網站 - 全端工程師求職履歷",
            author: {
              "@type": "Person",
              name: "Raiter",
            },
          }),
          type: "application/ld+json",
        },
        {
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "全端工程師職位",
            description: "尋找具備 C#、ASP.NET、Vue.js、SQL Server 經驗的全端工程師",
            hiringOrganization: {
              "@type": "Organization",
              name: "歡迎各企業聯繫",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "TW",
              },
            },
            employmentType: "FULL_TIME",
            datePosted: "2024-12-19",
          }),
          type: "application/ld+json",
        },
      ],
    },
  },

  // 靜態網站生成配置 (適用於 GitHub Pages)
  nitro: {
    prerender: {
      routes: ["/", "/about", "/skill"],
    },
  },
});
