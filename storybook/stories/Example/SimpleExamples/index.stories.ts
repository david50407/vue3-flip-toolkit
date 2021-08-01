import AnExpandingDivVue from './AnExpandingDiv.vue'
import TwoDivsVue from './TwoDivs.vue'
import ListShuffleVue from './ListShuffle.vue'

export default {
  title: 'Example/Simple Examples',
}

export const AnExpandingDiv = () => AnExpandingDivVue
AnExpandingDiv.parameters = {
  layout: 'centered',
  docs: {
    source: {
      type: 'code',
      code: `
<template>
  <Flipper :flip-key="flip">
    <Flipped flip-id="box" :class="flip ? style.boxBig : style.box" @click="toggle"></Flipped>
  </Flipper>
</template>

<script setup lang="ts">
import { ref, useCssModule } from 'vue'
import { Flipped, Flipper } from 'vue3-flip-toolkit'

const style = useCssModule()
const flip = ref(false)

const toggle = () => { flip.value = !flip.value }
</script>
      `,
    },
  },
}

export const TwoDivs = () => TwoDivsVue
TwoDivs.parameters = {
  layout: 'centered',
  docs: {
    source: {
      type: 'code',
      code: `
<template>
  <Flipper :flip-key="flip">
    <Flipped flip-id="box" :class="style.boxBig" @click="toggle" v-if="flip"></Flipped>
    <Flipped flip-id="box" :class="style.box" @click="toggle" v-else></Flipped>
  </Flipper>
</template>

<script setup lang="ts">
import { ref, useCssModule } from 'vue'
import { Flipped, Flipper } from 'vue3-flip-toolkit'

const style = useCssModule()
const flip = ref(false)

const toggle = () => { flip.value = !flip.value }
</script>
      `,
    },
  },
}

export const ListShuffle = () => ListShuffleVue
ListShuffle.parameters = {
  docs: {
    source: {
      type: 'code',
      code: `
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
      `,
    },
  },
}
