<template>
  <div class="hero-container">
    <!-- 背景動畫效果 -->
    <div class="matrix-bg"></div>

    <!-- 主要內容 -->
    <div class="hero-content">
      <!-- 標題區域 -->
      <div class="hero-header">
        <h1 class="hero-title">
          <span class="title-glow">Raiter</span>
        </h1>
        <h2 class="hero-subtitle">
          <span class="subtitle-text">Software Engineer</span>
          <span class="subtitle-cursor">|</span>
        </h2>
      </div>

      <!-- 個人介紹區域 -->
      <div class="intro-section">
        <div class="intro-card">
          <div class="card-header">
            <div class="terminal-icon">
              <Icon name="material-symbols:person" size="28" />
            </div>
            <h3>About Me</h3>
          </div>
          <div class="typing-container">
            <div class="typing-text">
              <span>{{ typedText }}</span>
              <span class="cursor">|</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 技能區域 -->
      <div class="skills-overview">
        <div class="skills-card">
          <div class="card-header">
            <div class="terminal-icon">
              <Icon name="material-symbols:handyman" size="28" />
            </div>
            <h3>Core Skills</h3>
          </div>
          <div class="skills-grid">
            <div class="skill-item" v-for="skill in coreSkills" :key="skill.name">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" :style="{ width: skill.percent + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 快速連結區域 -->
      <div class="quick-links">
        <div class="links-card">
          <div class="card-header">
            <div class="terminal-icon">
              <Icon name="material-symbols:link" size="28" />
            </div>
            <h3>Quick Access</h3>
          </div>
          <div class="links-grid">
            <NuxtLink to="/about" class="link-item">
              <div class="link-icon"><Icon name="material-symbols:person-book" size="28" /></div>
              <span>About</span>
            </NuxtLink>
            <NuxtLink to="/skill" class="link-item">
              <div class="link-icon"><Icon name="material-symbols:build" size="28" /></div>
              <span>Skills</span>
            </NuxtLink>
            <a href="mailto:raiter0010304@gmail.com" class="link-item">
              <div class="link-icon"><Icon name="material-symbols:mail" size="28" /></div>
              <span>Contact</span>
            </a>
            <a href="https://github.com/a1237798s" target="_blank" class="link-item">
              <div class="link-icon"><Icon name="octicon:mark-github-24" size="28" /></div>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// SEO 設定
useHead({
  title: "邱炫銘 | 個人履歷網站 | 全端工程師 | Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "你好我是邱炫銘 Raiter - 全端工程師 | Software Engineer，這是我的履歷網頁，專精 C#、ASP.NET、Vue.js、SQL Server 開發。具備企業級系統開發經驗，能獨立完成全端專案。歡迎企業合作與面試機會。",
    },
    {
      property: "og:title",
      content: "Raiter - 全端工程師履歷 | C# ASP.NET Vue.js 開發者",
    },
    {
      property: "og:description",
      content: "Raiter - 資深全端工程師履歷，專精 C#、ASP.NET、Vue.js、SQL Server 開發。具備企業級系統開發經驗，能獨立完成全端專案。",
    },
    {
      property: "og:url",
      content: "https://a1237798s.github.io/profile/",
    },
    {
      name: "keywords",
      content: "履歷網頁 ,全端工程師履歷, Software Engineer, C# 開發者, ASP.NET 工程師, Vue.js 開發, SQL Server, 軟體工程師求職, 後端開發, 前端開發",
    },
    {
      name: "job-title",
      content: "全端工程師",
    },
    {
      name: "experience-level",
      content: "資深",
    },
    {
      name: "availability",
      content: "可面試",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://a1237798s.github.io/profile/",
    },
  ],
});

const text = `Hello! 我是一位全端工程師，專長在企業網站與後台系統開發，具備 C#、ASP.NET MVC、Vue.js 與 SQL Server 的開發經驗，能從需求規劃、前後端開發到系統上線獨立完成。

如果你正在尋找一位可靠、有責任感、能解決問題的工程師，歡迎與我聯繫，我可以協助你把想法變成可用的產品。`;

const typedText = ref("");
let index = 0;

// 核心技能數據
const coreSkills = ref([
  { name: "C# / ASP.NET", level: "Expert", percent: 90 },
  { name: "Vue.js / Nuxt", level: "Advanced", percent: 85 },
  { name: "SQL Server", level: "Expert", percent: 90 },
  { name: "JavaScript", level: "Advanced", percent: 85 },
  { name: "HTML/CSS", level: "Advanced", percent: 80 },
  { name: "Node.js", level: "Intermediate", percent: 75 },
]);

function type() {
  if (index < text.length) {
    typedText.value += text[index];
    index++;
    setTimeout(type, 30);
  }
}

onMounted(() => {
  // 開始打字機效果
  setTimeout(type, 1000);

  // 技能條動畫
  setTimeout(() => {
    const skillFills = document.querySelectorAll(".skill-fill");
    skillFills.forEach((fill, index) => {
      setTimeout(() => {
        fill.style.width = fill.style.width;
        fill.classList.add("animate");
      }, index * 200);
    });
  }, 3000);
});
</script>

<style scoped>
.hero-container {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
}

.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 255, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(0, 255, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  z-index: 1;
}

.hero-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInDown 1s ease-out;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff00, #00cc00, #009900);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

.title-glow {
  text-shadow: 0 0 30px rgba(0, 255, 0, 0.8);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #00aa00;
  font-weight: 400;
  text-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
}

.subtitle-cursor {
  animation: blink 1s infinite;
  color: #00ff00;
}

.intro-section {
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.intro-card {
  background: rgba(0, 255, 0, 0.02);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(0, 255, 0, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 255, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.terminal-icon {
  font-size: 1.5rem;
  color: #00ff00;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
  background: rgba(0, 255, 0, 0.1);
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.card-header h3 {
  color: #00ff00;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

.typing-container {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.typing-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #00dd00;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
  white-space: pre-line;
}

.cursor {
  animation: blink 1s infinite;
  color: #00ff00;
  font-weight: bold;
}

.skills-overview {
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out 1s both;
}

.skills-card {
  background: rgba(0, 255, 0, 0.02);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(0, 255, 0, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 255, 0, 0.1);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.skill-item {
  background: rgba(0, 255, 0, 0.05);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(0, 255, 0, 0.1);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  color: #00dd00;
  font-weight: 500;
  font-size: 0.9rem;
}

.skill-level {
  color: #00ff00;
  font-size: 0.8rem;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

.skill-bar {
  background: rgba(0, 255, 0, 0.1);
  border-radius: 4px;
  height: 6px;
  overflow: hidden;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.skill-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #00ff00, #00cc00);
  border-radius: 4px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
}

.skill-fill.animate {
  animation: shimmer 2s ease-in-out;
}

.quick-links {
  animation: fadeInUp 1s ease-out 1.5s both;
}

.links-card {
  background: rgba(0, 255, 0, 0.02);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(0, 255, 0, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 255, 0, 0.1);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(0, 255, 0, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(0, 255, 0, 0.1);
  text-decoration: none;
  color: #00dd00;
  transition: all 0.3s ease;
}

.link-item:hover {
  background: rgba(0, 255, 0, 0.1);
  border-color: rgba(0, 255, 0, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 255, 0, 0.2);
}

.link-icon {
  font-size: 1.5rem;
  color: #00ff00;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
}

.link-item span {
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
}

/* 動畫定義 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes shimmer {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-content {
    padding: 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .intro-card,
  .skills-card,
  .links-card {
    padding: 1.5rem;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
