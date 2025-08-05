<template>
  <div>
    <button id="toggleSidebar" @click="toggleSidebar">☰</button>
    <nav ref="sidebarRef" class="sidebar" :class="{ active: isActive }">
      <NuxtLink to="/" @click="closeSidebar">Home</NuxtLink>
      <NuxtLink to="/about" @click="closeSidebar">About</NuxtLink>
      <NuxtLink to="/skill" @click="closeSidebar">Skill</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isActive = ref(false);
const sidebarRef = ref(null);

function toggleSidebar() {
  isActive.value = !isActive.value;
}

function closeSidebar() {
  isActive.value = false;
}

// 點擊外部區域關閉選單
function handleClickOutside(event) {
  if (isActive.value && sidebarRef.value && !sidebarRef.value.contains(event.target)) {
    // 檢查是否點擊了切換按鈕
    const toggleButton = document.getElementById("toggleSidebar");
    if (toggleButton && !toggleButton.contains(event.target)) {
      closeSidebar();
    }
  }
}

// 監聽路由變化，自動關閉選單
function handleRouteChange() {
  if (isActive.value) {
    closeSidebar();
  }
}

onMounted(() => {
  // 添加點擊外部關閉選單的監聽器
  document.addEventListener("click", handleClickOutside);

  // 監聽路由變化
  if (process.client) {
    window.addEventListener("popstate", handleRouteChange);
  }
});

onUnmounted(() => {
  // 清理監聽器
  document.removeEventListener("click", handleClickOutside);
  if (process.client) {
    window.removeEventListener("popstate", handleRouteChange);
  }
});
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.92);
  border-right: 2px solid #0f0;
  box-shadow: 0 0 20px #0f0;
  padding: 100px 20px;
  transition: left 0.3s ease;
  z-index: 999;
}

.sidebar.active {
  left: 0;
}

.sidebar a {
  display: block;
  color: #00ff00;
  text-decoration: none;
  margin: 50px 30px;
  font-size: 1.2rem;
  transition: color 0.3s, text-shadow 0.3s;
  cursor: pointer;
}

.sidebar a:hover {
  color: #b0ffb0;
  text-shadow: 0 0 10px #0f0, 0 0 20px #0f0;
}

.sidebar a.router-link-active {
  color: #b0ffb0;
  text-shadow: 0 0 10px #0f0, 0 0 20px #0f0;
  font-weight: bold;
}

/* Toggle Button */
#toggleSidebar {
  position: fixed;
  top: 20px;
  left: 20px;
  background: black;
  color: #0f0;
  border: 2px solid #0f0;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 0 10px #0f0;
  animation: slideUp 1s ease forwards;
  transition: all 0.3s ease;
}

#toggleSidebar:hover {
  background: rgba(0, 255, 0, 0.1);
  box-shadow: 0 0 15px #0f0;
}

/* 按鈕滑入效果 */
@keyframes slideUp {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}

/* RWD設計 */
@media screen and (max-width: 768px) {
  .sidebar {
    background: rgba(0, 0, 0, 0.97);
    width: 100%;
    left: -150%;
    text-align: center;
  }

  .sidebar.active {
    left: 0;
  }

  .sidebar a {
    font-size: 1.5rem;
    margin: 40px 0;
  }

  #toggleSidebar {
    border: 1px solid #0f0;
    font-size: 12px;
    padding: 8px 12px;
    top: 10px;
    left: 10px;
    padding: 10px;
    font-size: 24px;
  }
}
</style>
