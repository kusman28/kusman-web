<script setup lang="ts">
import { ref } from 'vue'
import tech_stacks from '../static/tech_stacks.json'

const data = ref<TechStacks[]>(tech_stacks)
const techStacks = data

const me: AboutMe = {
  name: 'Khalid Usman',
  location: 'Philippines',
  description:
    'A Full-stack Developer with years of relevant experience in web development. I also have experience in Mobile App Development.'
}
</script>
<template>
  <div>
    <div
      class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        About Me
      </h5>
      <div class="dark:text-gray-300 mb-6">
        <p class="font-normal">Hello there, my name is {{ me.name }}</p>
        <div class="flex items-center">
          <span class="text-center">From the {{ me.location }}</span>
          <img
            width="50px"
            src="https://static.vecteezy.com/system/resources/previews/012/300/958/original/philippines-flag-free-png.png"
          />
        </div>
        <p>
          {{ me.description }}
        </p>
      </div>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Tech Stacks
      </h5>
      <div
        class="grid grid-cols-2 md:grid-cols-6 gap-8 items-center dark:text-gray-300 mb-6"
      >
        <div v-for="(tech, index) in techStacks" :key="index">
          <img
            :src="`${tech.imagePath}`"
            :alt="`${tech.name} Logo`"
            class="h-10 w-10 object-contain mx-auto mb-2"
          />
          <p class="text-center">{{ tech.name }}</p>
        </div>
      </div>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Work Experience
      </h5>
      <div class="dark:text-gray-300 mb-6">
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
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Get in Touch
      </h5>
      <div class="dark:text-gray-300 mb-6">
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
  </div>
</template>

<style scoped></style>
