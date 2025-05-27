<template>
  <section class="home">
    <h1 ref="title">
      Home
    </h1>

    <p ref="paragraph" class="info">Starter Vue 3 avec Lenis, GSAP et SCSS.</p>
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'

const title = ref(null)
const paragraph = ref(null)

onMounted(async () => {
  await nextTick()
  const el = title.value
  const text = el.innerText
  el.innerHTML = ''

  text.split('').forEach((char) => {
    const span = document.createElement('span')
    span.className = 'char'
    if (char === ' ') {
      span.innerHTML = '&nbsp;'
      span.classList.add('space')
    } else {
      span.textContent = char
    }
    el.appendChild(span)
  })

  gsap.set(paragraph.value, {opacity: 0 })

  gsap.to(paragraph.value, {
    opacity: 1,
    duration: 0.5,
    delay: 0.5,
    ease: 'power3.out'
  })

  gsap.fromTo(
    el.querySelectorAll('.char'),
    { y: 50},
    {
      y: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: 'power3.out'
    }
  )


})
</script>

<style scoped lang="scss">
.home {
  h1 {
    font-size: 50px;
    display: flex;
    overflow: hidden;

  }
}
</style>
