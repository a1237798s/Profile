<template>
  <div class="app-wrapper">
    <MatrixBackground />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.app-wrapper {
  background-color: black; /* ✅ Matrix 還沒載入前，就已黑底 */
  min-height: 100vh;
  overflow: hidden;
}
</style>
