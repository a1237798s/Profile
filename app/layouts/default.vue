<template>
  <main>
    <Navbar />
    <div class="content">
      <slot />
    </div>
  </main>
</template>
<style scoped>
main {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  position: relative;
  margin: 10px;
  margin-bottom: 30px;
  z-index: 10;
  color: #00ff00;
  max-width: 800px;
  min-width: 600px;
  min-height: 80vh;
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0.95); /* Slightly transparent background */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  animation: fadeInZoom 1s ease forwards;
}

@media screen and (max-width: 768px) {
  .content {
    width: 100%;
    min-width: 250px;
  }
}
</style>
