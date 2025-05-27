<template>
  <section class="about">
    <h1 ref="title">
      About
    </h1>
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'

const title = ref(null)

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
.about {
  h1 {
    font-size: 50px;
    display: flex;
    overflow: hidden;

  }
}
</style>
