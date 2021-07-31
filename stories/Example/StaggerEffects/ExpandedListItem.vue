<template>
  <Flipped
    :flip-id="`listItem-${index}`"
    stagger="card"
    :class="style.item"
    @click="emits('click')"
    @start="onStart"
  >
    <Flipped :inverse-flip-id="`listItem-${index}`" :class="style.content">
      <Flipped
        :flip-id="`avatar-${index}`"
        stagger="card-content"
        :delay-until="`listItem-${index}`"
        :class="style.avatar"
      ></Flipped>
      <div :class="style.description">
        <Flipped
          v-for="i in 3"
          :key="i"
          :flip-id="`description-${index}-${i}`"
          stagger="card-content"
          :delay-until="`listItem-${index}`"
        ></Flipped>
      </div>
      <div :class="style.additional">
        <div v-for="i in 3" :key="i"></div>
      </div>
    </Flipped>
  </Flipped>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue'
import { Flipped } from 'vue3-flip-toolkit'

const { index } = defineProps<{
  index: number
}>()
const emits = defineEmits(['click'])

const style = useCssModule()
const onStart = ({ el }: { el: HTMLElement }) => {
  setTimeout(() => {
    el.classList.add(style.animatedIn)
  }, 400)
}
</script>

<style module>
.item {
  cursor: pointer;
  background-color: #d0d0d0;
}
.content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  width: 8rem;
  height: 8rem;
  border-radius: 100px;
  background-color: grey;
  margin-right: 0;
  margin-bottom: 1rem;
}
.description {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.description > div {
  background-color: grey;
  width: 14rem;
  border-radius: 6px;
  height: 0.5rem;
}
.description > div:nth-of-type(2) {
  width: 11rem;
}
.description > div:nth-of-type(3) {
  width: 8rem;
}
.description > div + div {
  margin-top: 1rem;
}

.additional {
  width: 100%;
  margin-top: 2rem;
}

.additional > div {
  opacity: 0;
  border-radius: 3px;
  background-color: gray;
  height: 5rem;
}

/* content fade in animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
  }
}

.animatedIn .additional > div {
  animation: fadeIn 0.4s forwards;
}

.additional > div:nth-of-type(2) {
  animation-delay: 0.15s;
}
.additional > div:nth-of-type(3) {
  animation-delay: 0.3s;
}
.additional > div + div {
  margin-top: 1rem;
}
</style>
