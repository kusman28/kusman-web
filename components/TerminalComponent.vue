<script setup lang="ts"></script>

<template>
  <div>
    <div class="fakeMenu">
      <div class="fakeButtons fakeClose"></div>
      <div class="fakeButtons fakeMinimize"></div>
      <div class="fakeButtons fakeZoom"></div>
    </div>
    <div class="fakeScreen">
      <p class="line1">$ whoami<span class="cursor1">_</span></p>
      <p class="line2">Hello, I'm K. Usman</p>
      <p class="line3">$ cd tech-stacks<span class="cursor3">_</span></p>
      <p class="line5">$ K. Usman\tech-stacks<span class="cursor3">_</span></p>
      <p class="line6">$ ls -a<span class="cursor3">_</span></p>
      <p class="tech-stacks">
        ./ ../ .git laravel vue.js react.js bootstrap <br />
        tailwindcss typescript flutter mysql postgresql<br />
        strapi firebase
      </p>
      <p class="line4">><span class="cursor4">_</span></p>
    </div>
  </div>
</template>

<style scoped>
@import "/assets/css/terminal.css";
</style>
