export { AboutMe };

declare global {
  interface AboutMe {
    name: string
    location: string
    description: string
  }
}