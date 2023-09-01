<script setup lang="ts">
import { ref } from 'vue'
import tech_stacks from '../static/tech_stacks.json'
import { TechStacks, AboutMe } from '../types/index'

const data = ref<TechStacks[]>(tech_stacks)
const techStacks = data

const me: AboutMe = {
  name: 'Khalid Usman',
  location: 'Philippines, Zamboanga City.',
  description:
    'A Full-stack developer with years of relevant experience in Web and Mobile development.',
  profile: './KKK.jpg'
}
</script>
<template>
  <div
    class="w-full p-10 border-gray-200 rounded-3xl shadow dark:bg-gray-800 grid grid-cols-5 gap-1 drop-shadow-xl"
  >
    <div class="col-span-3">
      <h5 class="about-me__title">About Me</h5>
      <div class="about-me__text">
        <p class="font-normal">
          Hello there, my name is {{ me.name }} from the {{ me.location }}
          <br />
          {{ me.description }}
        </p>
      </div>
      <h5 class="about-me__title">Tech Stacks</h5>
      <div
        class="grid grid-cols-2 md:grid-cols-6 gap-8 items-center dark:text-gray-300 mb-6"
      >
        <div v-for="(tech, index) in techStacks" :key="index">
          <img
            :src="`${tech.imagePath}`"
            :alt="`${tech.name} Logo`"
            class="h-10 w-10 object-contain mx-auto mb-2 hover:grayscale-[50%] hover:rotate-45"
          />
          <p class="text-center">{{ tech.name }}</p>
        </div>
      </div>
      <h5 class="about-me__title">Work Experience</h5>
      <div class="about-me__text">
        <p>
          Throughout my career, I've had the opportunity to work on various
          projects ranging from simple websites to complex enterprise-level
          applications. I've worked with clients across different domains such
          as healthcare, finance, e-commerce, and education. I enjoy working in
          a collaborative environment where I can learn and grow alongside other
          developers. I'm always excited to take on new challenges and explore
          innovative solutions to build better software.
        </p>
      </div>
      <h5 class="about-me__title">Get in Touch</h5>
      <div class="about-me__text">
        <p>
          If you'd like to discuss a project or just chat about software
          development, feel free to get in touch. You can reach me at
          <a href="mailto:kusman758@gmail.com" class="text-cyan-500"
            >kusman758@gmail.com</a
          >
          I look forward to hearing from you!
        </p>
      </div>
    </div>
    <div class="col-span-2 mx-auto my-auto">
      <img class="about-me__profile" :src="`${me.profile}`" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-me {
  &__title {
    @apply mb-2 text-2xl font-bold tracking-wide text-gray-900 dark:text-white drop-shadow-sm;
  }
  &__text {
    @apply dark:text-gray-300 mb-6;
  }
  &__profile {
    @apply rounded-full w-80 h-80 object-cover drop-shadow-lg;
  }
}
</style>
