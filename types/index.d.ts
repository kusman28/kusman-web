export { 
  AboutMe,
  TechStacks
};

declare global {
  interface AboutMe {
    name: string
    location: string
    description: string
  }

  interface TechStacks {
    name: string
    imagePath: string
  }
}