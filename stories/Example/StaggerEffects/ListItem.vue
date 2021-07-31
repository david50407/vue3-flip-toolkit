<template>
  <Flipped
    :flip-id="`listItem-${index}`"
    stagger="card"
    :should-invert="shouldFlip"
    :class="style.item"
    @click="emits('click')"
  >
    <Flipped :inverse-flip-id="`listItem-${index}`" :class="style.content">
      <Flipped
        :flip-id="`avatar-${index}`"
        stagger="card-content"
        :should-flip="shouldFlip"
        :delay-until="`listItem-${index}`"
        :class="style.avatar"
      ></Flipped>
      <div :class="style.description">
        <Flipped
          v-for="i in 3"
          :key="i"
          :flip-id="`description-${index}-${i}`"
          stagger="card-content"
          :should-flip="shouldFlip"
          :delay-until="`listItem-${index}`"
        ></Flipped>
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
const shouldFlip = (prev: number | false, current: number | false) =>
  index === prev || index === current
</script>

<style module>
.item {
  width: 100%;
  cursor: pointer;
  background-color: #d0d0d0;
  overflow: hidden;
}
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
}
.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  background-color: grey;
  margin-right: 2rem;
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
</style>
