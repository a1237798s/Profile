<template>
  <div class="skills-container">
    <div class="skills-header">
      <h2 class="skills-title">SKILLS</h2>
      <p class="skills-subtitle">我的技術棧與專業能力</p>
    </div>

    <div class="skills-grid">
      <!-- 前端技能 -->
      <div class="skill-card">
        <div class="card-header">
          <div class="card-icon">◢</div>
          <h2>前端技能</h2>
        </div>
        <div class="skills-list">
          <div class="skill-item" v-for="skill in frontendSkills" :key="skill.name">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percent">{{ skill.percent }}%</span>
            </div>
            <div class="skill-bar">
              <div class="fill" :style="{ width: skill.percent + '%', background: skill.color }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 後端技能 -->
      <div class="skill-card">
        <div class="card-header">
          <div class="card-icon">◣</div>
          <h2>後端技能</h2>
        </div>
        <div class="skills-list">
          <div class="skill-item" v-for="skill in backendSkills" :key="skill.name">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percent">{{ skill.percent }}%</span>
            </div>
            <div class="skill-bar">
              <div class="fill" :style="{ width: skill.percent + '%', background: skill.color }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 資料庫 -->
      <div class="skill-card">
        <div class="card-header">
          <div class="card-icon">
            <Icon name="material-symbols:database" size="24" />
          </div>
          <h2>資料庫</h2>
        </div>
        <div class="skills-list">
          <div class="skill-item" v-for="skill in databaseSkills" :key="skill.name">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percent">{{ skill.percent }}%</span>
            </div>
            <div class="skill-bar">
              <div class="fill" :style="{ width: skill.percent + '%', background: skill.color }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 雲服務 -->
      <div class="skill-card">
        <div class="card-header">
          <div class="card-icon">
            <Icon name="material-symbols:cloud" size="24" />
          </div>
          <h2>雲服務</h2>
        </div>
        <div class="skills-list">
          <div class="skill-item" v-for="skill in cloudSkills" :key="skill.name">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percent">{{ skill.percent }}%</span>
            </div>
            <div class="skill-bar">
              <div class="fill" :style="{ width: skill.percent + '%', background: skill.color }"></div>
            </div>
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
  title: "技術技能 - Raiter | C# ASP.NET Vue.js SQL Server 專業技能",
  meta: [
    {
      name: "description",
      content:
        "Raiter 的專業技術技能：C#、ASP.NET Core、Vue.js、SQL Server、JavaScript、HTML/CSS、Node.js 等全端開發技術。詳細的技能評估與專業能力展示，適合企業評估技術實力。",
    },
    {
      property: "og:title",
      content: "技術技能 - Raiter | C# ASP.NET Vue.js SQL Server 專業技能",
    },
    {
      property: "og:description",
      content: "Raiter 的專業技術技能：C#、ASP.NET Core、Vue.js、SQL Server、JavaScript、HTML/CSS、Node.js 等全端開發技術。",
    },
    {
      property: "og:url",
      content: "https://a1237798s.github.io/profile/skill",
    },
    {
      name: "keywords",
      content: "C# 技能, ASP.NET 開發, Vue.js 前端, SQL Server 資料庫, JavaScript 程式設計, 全端開發技能, 軟體工程師技能, 技術評估",
    },
    {
      name: "skill-level",
      content: "資深",
    },
    {
      name: "primary-skills",
      content: "C#, ASP.NET, Vue.js, SQL Server",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://a1237798s.github.io/profile/skill",
    },
  ],
});

// 技能數據 - 調整為更符合 Matrix 風格的配色
const frontendSkills = ref([
  {
    name: "HTML",
    percent: 90,
    color: "linear-gradient(90deg, #00ff00, #00cc00)",
  },
  {
    name: "CSS",
    percent: 90,
    color: "linear-gradient(90deg, #00dd00, #00aa00)",
  },
  {
    name: "Vue.js",
    percent: 90,
    color: "linear-gradient(90deg, #00ee00, #009900)",
  },
  {
    name: "JavaScript",
    percent: 85,
    color: "linear-gradient(90deg, #00ff00, #00bb00)",
  },

  {
    name: "Nuxt",
    percent: 80,
    color: "linear-gradient(90deg, #00cc00, #007700)",
  },
  {
    name: "React",
    percent: 70,
    color: "linear-gradient(90deg, #00bb00, #006600)",
  },
]);

const backendSkills = ref([
  {
    name: "C#",
    percent: 95,
    color: "linear-gradient(90deg, #00ff00, #00dd00)",
  },
  {
    name: "ASP.NET Core 6+",
    percent: 90,
    color: "linear-gradient(90deg, #00ee00, #00cc00)",
  },
  {
    name: "ASP.NET MVC",
    percent: 90,
    color: "linear-gradient(90deg, #00dd00, #00bb00)",
  },
  {
    name: "Entity Framework 4.8",
    percent: 80,
    color: "linear-gradient(90deg, #00cc00, #00aa00)",
  },
  {
    name: "Node.js",
    percent: 75,
    color: "linear-gradient(90deg, #00bb00, #009900)",
  },
  {
    name: "Java",
    percent: 50,
    color: "linear-gradient(90deg, #00aa00, #007700)",
  },
]);

const databaseSkills = ref([
  {
    name: "Microsoft SQL Server",
    percent: 90,
    color: "linear-gradient(90deg, #00ff00, #00dd00)",
  },
  {
    name: "MySQL",
    percent: 80,
    color: "linear-gradient(90deg, #00ee00, #00bb00)",
  },
  {
    name: "MongoDB",
    percent: 70,
    color: "linear-gradient(90deg, #00dd00, #00aa00)",
  },
]);

const cloudSkills = ref([
  {
    name: "Azure",
    percent: 60,
    color: "linear-gradient(90deg, #00cc00, #009900)",
  },
]);

onMounted(() => {
  // 添加進入動畫
  const cards = document.querySelectorAll(".skill-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.classList.add("animate-in");
  });

  // 技能條動畫
  setTimeout(() => {
    const fills = document.querySelectorAll(".fill");
    fills.forEach((fill, index) => {
      setTimeout(() => {
        fill.style.width = fill.style.width;
        fill.classList.add("animate-fill");
      }, index * 100);
    });
  }, 500);
});
</script>

<style scoped>
.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
}

.skills-header {
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
}

.skills-title {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00ff00, #00cc00, #009900);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}

.skills-subtitle {
  font-size: 1.2rem;
  color: #00aa00;
  font-style: italic;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: rgba(0, 255, 0, 0.02);
  border-radius: 8px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  box-shadow: 0 4px 20px rgba(0, 255, 0, 0.05);
}

.skill-card.animate-in {
  animation: slideInUp 0.8s ease-out forwards;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 255, 0, 0.15);
  border-color: rgba(0, 255, 0, 0.3);
  background: rgba(0, 255, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.card-icon {
  font-size: 1.5rem;
  color: #00ff00;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
  font-weight: bold;
  background: rgba(0, 255, 0, 0.1);
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.card-header h2 {
  color: #00ff00;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 0.5s;
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
  font-size: 0.95rem;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
}

.skill-percent {
  color: #00ff00;
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
}

.skill-bar {
  background: rgba(0, 255, 0, 0.1);
  border-radius: 4px;
  height: 6px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.fill {
  height: 100%;
  width: 0%;
  border-radius: 4px;
  transition: width 2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
}

.fill.animate-fill {
  animation: shimmer 2s ease-in-out;
}

.fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.4), transparent);
  animation: shimmer 2s infinite;
}

/* 動畫定義 */
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

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .skills-container {
    padding: 1rem;
  }

  .skills-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .skills-title {
    font-size: 1.5rem;
  }

  .skills-subtitle {
    font-size: 1rem;
  }

  .skill-card {
    padding: 1rem;
  }
}
</style>
