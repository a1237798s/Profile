<script setup>
import { onMounted, onUnmounted } from "vue";

let canvas;
let context;
let fontSize;
let columns;
let rainDrops = [];

const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビ";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const alphabet = katakana + latin + nums;

let drawInterval;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = Math.max(window.innerHeight, document.body.scrollHeight);

  fontSize = Math.max(12, canvas.width * 0.012);
  columns = Math.floor(canvas.width / fontSize);

  rainDrops = [];
  for (let x = 0; x < columns; x++) {
    rainDrops[x] = Math.floor((Math.random() * canvas.height) / fontSize);
  }
}

function draw() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = `${fontSize}px monospace`;

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    const x = i * fontSize;
    const y = rainDrops[i] * fontSize;

    context.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    } else {
      rainDrops[i]++;
    }
  }
}

onMounted(() => {
  canvas = document.getElementById("Matrix");
  context = canvas.getContext("2d");

  resizeCanvas();
  drawInterval = setInterval(draw, 50);

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  clearInterval(drawInterval);
  window.removeEventListener("resize", handleResize);
});

function handleResize() {
  clearTimeout(window._resizeTimeout);
  window._resizeTimeout = setTimeout(resizeCanvas, 100);
}
</script>

<template>
  <canvas id="Matrix"></canvas>
</template>

<style scoped>
canvas {
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>
