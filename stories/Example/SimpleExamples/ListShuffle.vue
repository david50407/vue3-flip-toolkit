<template>
  <Flipper :flip-key="list.join('')">
    <button @click="shuffle()">shuffle</button>
    <ul :class="style.list">
      <Flipped v-for="i in list" is="li" :key="i" :flip-id="i">{{ i }}</Flipped>
    </ul>
  </Flipper>
</template>

<script setup lang="ts">
import { ref, useCssModule } from 'vue'
import { Flipped, Flipper } from 'vue3-flip-toolkit'

const style = useCssModule()
const list = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])

const shuffle = () => {
  for (let i = list.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [list.value[i], list.value[j]] = [list.value[j], list.value[i]]
  }
}
</script>

<style module>
.list {
  margin: 0;
  padding: 0;
  margin-top: 0.5rem;
  list-style-type: none;
  display: flex;
  font-size: 2.5rem;
}

.list > li {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
