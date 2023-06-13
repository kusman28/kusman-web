<script setup lang="ts"></script>
<template>
  <div class="antialiased">
    <nav class="w-full flex items-center justify-between flex-wrap bg-dark p-6">
      <div class="flex items-center flex-no-shrink mr-6 text-white">
        <p class="text-xl tracking-tight k"><span class="blinking-cursor">|</span>&lt;. Usman</p>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.k {
  -webkit-animation: type 0.5s 1s steps(20, end) forwards;
  -moz-animation: type 0.5s 1s steps(20, end) forwards;
  -o-animation: type 0.5s 1s steps(20, end) forwards;
  animation: type 0.5s 1s steps(20, end) forwards;
}
.blinking-cursor {
  -webkit-animation: blink 1s 1s infinite;
  -moz-animation: blink 1s 1s infinite;
  -o-animation: blink 1s 1s infinite;
  animation: blink 1s 1s infinite;
}

@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes type {
  to {
    width: 40em;
  }
}

@-moz-keyframes type {
  to {
    width: 40em;
  }
}

@-o-keyframes type {
  to {
    width: 40em;
  }
}

@keyframes type {
  to {
    width: 40em;
  }
}


</style>
