<template>
  <div class="about-container">
    <div class="about-header">
      <h1 class="about-title">關於我</h1>
      <p class="about-subtitle">About Me</p>
    </div>

    <div class="about-content">
      <div class="about-card">
        <div class="card-header">
          <div class="terminal-icon"><Icon name="material-symbols:person" size="28" /></div>
          <h2>個人簡介</h2>
        </div>
        <div class="about-text">
          <p>我是一位熱衷於軟體開發的全端工程師，擁有豐富的企業級應用開發經驗。</p>
          <p>專長於使用 C#、ASP.NET 技術棧開發後端系統，同時也精通前端技術如 Vue.js、JavaScript 等。</p>
          <p>我喜歡解決複雜的技術問題，並且注重程式碼品質與系統效能。</p>
        </div>
      </div>

      <div class="about-card">
        <div class="card-header">
          <div class="terminal-icon"><Icon name="material-symbols:work" size="28" /></div>
          <h2>工作經驗</h2>
        </div>
        <div class="experience-list">
          <div class="experience-item">
            <h3>軟體工程師</h3>
            <p class="company">金豐企業管理顧問股份有限公司 | 2025.05 - 現在</p>
            <ul>
              <li>負責企業級後台管理系統開發</li>
              <li>使用 ASP.NET Core 與 Vue.js 技術棧</li>
            </ul>
          </div>
          <div class="experience-item">
            <h3>理財專員</h3>
            <p class="company">永豐金證券 | 2024.04 - 2024.07</p>
            <ul>
              <li>持有證券分析師資格及多項金融專業證照，進一步承接高資產客戶，依其風險屬性與財務目標提供資產配置建議。</li>
              <li>延續既有客戶開發經驗，強化關係經營與客製化金融方案設計，促進產品成交與長期合作。</li>
            </ul>
          </div>
          <div class="experience-item">
            <h3>營業員</h3>
            <p class="company">統一綜合證券 | 2022.09 - 2024.04</p>
            <ul>
              <li>負責客戶開發與關係維護，根據客戶需求提供量身打造的金融解決方案，提升客戶滿意度與產品成交率。</li>
              <li>擅長分析各類金融商品（含股票、債券、基金、ETF），熟悉市場趨勢追蹤與風險評估。</li>
              <li>整理使用者回饋並回報內部團隊，促進功能優化與流程改善。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="about-card">
        <div class="card-header">
          <div class="terminal-icon"><Icon name="mdi:laptop" size="28" /></div>
          <h2>專業訓練</h2>
        </div>
        <div class="education-item">
          <h3>全端工程師就業養成班</h3>
          <p class="school">資展國際(資策會) 2024.09 - 2025.03</p>
          <p>涵蓋 C#、ASP.NET、MSQL、HTML、CSS、JavaScript、Vue.js、RWD 設計、API 串接與團隊協作流程。</p>
        </div>
      </div>

      <div class="about-card">
        <div class="card-header">
          <div class="terminal-icon"><Icon name="material-symbols:verified" size="28" /></div>
          <h2>金融證照</h2>
        </div>
        <div class="certificates-simple">
          <ul class="certificate-list">
            <li><span class="cert-name">證券分析師</span></li>
            <li><span class="cert-name">高級證券商業務員</span></li>
            <li><span class="cert-name">投信投顧業務員</span></li>
            <li><span class="cert-name">期貨商業務員</span></li>
            <li><span class="cert-name">信託業務員</span></li>
            <li><span class="cert-name">人身保險業務員</span></li>
            <li><span class="cert-name">財產保險業務員</span></li>
            <li><span class="cert-name">投資型保險商品業務員</span></li>
            <li><span class="cert-name">外幣收付非投資型保險業務員</span></li>
            <li><span class="cert-name">金融市場常識與職業道德</span></li>
          </ul>
        </div>
      </div>
      <div class="about-card">
        <div class="card-header">
          <div class="terminal-icon"><Icon name="material-symbols:school" size="28" /></div>
          <h2>教育背景</h2>
        </div>
        <div class="education-item">
          <h3>金融資訊系</h3>
          <p class="school">國立高雄科技大學 | 2018.09 - 2022.06</p>
          <p>
            主修金融科技與資訊管理，結合金融理論與實務應用，深入學習金融市場、投資學、財務工程等核心知識。 同時修習資料分析、Python
            程式設計、區塊鏈與金融科技應用等課程，具備跨領域整合能力。
          </p>
        </div>
      </div>

      <div class="about-card">
        <div class="card-header">
          <div class="terminal-icon"><Icon name="material-symbols:mail" size="28" /></div>
          <h2>聯絡方式</h2>
        </div>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-label">Email:</span>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=raiter0010304@gmail.com" target="_blank" rel="noopener">raiter0010304@gmail.com</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">GitHub:</span>
            <a href="https://github.com/a1237798s" target="_blank">github.com/a1237798s</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">Line:</span>
            <a href="https://line.me/ti/p/6tpZWQWJsL" target="_blank">點我掃描 QR Code</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO 設定
useHead({
  title: "關於我 - Raiter | 全端工程師工作經驗與專業背景",
  meta: [
    {
      name: "description",
      content:
        "了解 Raiter 的專業背景、工作經驗、教育背景與聯絡方式。資深全端工程師，具備豐富的企業級系統開發經驗，專精 C#、ASP.NET、Vue.js 技術棧。歡迎企業聯繫面試。",
    },
    {
      property: "og:title",
      content: "關於我 - Raiter | 全端工程師工作經驗與專業背景",
    },
    {
      property: "og:description",
      content: "了解 Raiter 的專業背景、工作經驗、教育背景與聯絡方式。資深全端工程師，具備豐富的企業級系統開發經驗。",
    },
    {
      property: "og:url",
      content: "https://a1237798s.github.io/profile/about",
    },
    {
      name: "keywords",
      content: "全端工程師經驗, 軟體工程師背景, C# 開發經驗, ASP.NET 工作經驗, 企業系統開發, 軟體工程師履歷, 工作經歷, 專業背景",
    },
    {
      name: "work-experience",
      content: "資深軟體工程師",
    },
    {
      name: "education",
      content: "資訊工程學系",
    },
    {
      name: "contact-available",
      content: "可面試",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://a1237798s.github.io/profile/about",
    },
  ],
});
</script>

<style scoped>
.about-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInDown 1s ease-out;
}

.about-title {
  font-size: 3rem;
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

.about-subtitle {
  font-size: 1.2rem;
  color: #00aa00;
  font-style: italic;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-card {
  background: rgba(0, 255, 0, 0.02);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(0, 255, 0, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 255, 0, 0.1);
  animation: fadeInUp 1s ease-out;
  animation-fill-mode: both;
}

.about-card:nth-child(1) {
  animation-delay: 0.2s;
}
.about-card:nth-child(2) {
  animation-delay: 0.4s;
}
.about-card:nth-child(3) {
  animation-delay: 0.6s;
}
.about-card:nth-child(4) {
  animation-delay: 0.8s;
}
.about-card:nth-child(5) {
  animation-delay: 1s;
}
.about-card:nth-child(6) {
  animation-delay: 1.2s;
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
  /* padding-top: 0.rem; */
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

.about-text p {
  color: #00dd00;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.experience-item {
  background: rgba(0, 255, 0, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 255, 0, 0.1);
}

.experience-item h3 {
  color: #00ff00;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.5);
}

.company {
  color: #00aa00;
  font-style: italic;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
}

.experience-item ul {
  list-style: none;
  padding: 0;
}

.experience-item li {
  color: #00dd00;
  margin-bottom: 0.5rem;
  padding-left: 1.2rem;
  position: relative;
  text-shadow: 0 0 3px rgba(0, 255, 0, 0.3);
}

.experience-item li::before {
  content: "◢";
  position: absolute;
  top: 0.25rem;
  left: 0;
  color: #00ff00;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.8);
}

.certificates-simple {
  padding: 0.5rem 0;
}

.certificate-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.6rem;
}

.certificate-list li {
  color: #00dd00;
  line-height: 1.4;
  padding: 0.4rem 0.8rem;
  background: rgba(0, 255, 0, 0.05);
  border-radius: 6px;
  border: 1px solid rgba(0, 255, 0, 0.1);
  text-shadow: 0 0 3px rgba(0, 255, 0, 0.3);
  transition: all 0.3s ease;
}

.certificate-list li:hover {
  background: rgba(0, 255, 0, 0.1);
  border-color: rgba(0, 255, 0, 0.2);
  transform: translateY(-1px);
}

.cert-name {
  color: #00ff00;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

.education-item h3 {
  color: #00ff00;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.5);
}

.school {
  color: #00aa00;
  font-style: italic;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-label {
  color: #00ff00;
  font-weight: bold;
  min-width: 80px;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

.contact-item a {
  color: #00dd00;
  text-decoration: none;
  transition: all 0.3s ease;
  text-shadow: 0 0 3px rgba(0, 255, 0, 0.3);
}

.contact-item a:hover {
  color: #00ff00;
  text-shadow: 0 0 8px rgba(0, 255, 0, 0.8);
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

/* 響應式設計 */
@media (max-width: 768px) {
  .about-container {
    padding: 0.5rem;
  }

  .about-title {
    font-size: 2rem;
  }

  .about-card {
    padding: 1.5rem;
  }

  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .contact-label {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 1.5rem;
  }

  .about-subtitle {
    font-size: 1rem;
  }

  .about-card {
    padding: 1rem;
  }
}
</style>
