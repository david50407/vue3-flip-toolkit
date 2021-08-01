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

<style module>
.box {
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-image: linear-gradient(
    45deg,
    rgb(234, 113, 159),
    rgb(182, 71, 132)
  );
}

.boxBig {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-image: linear-gradient(
    45deg,
    rgb(121, 113, 234),
    rgb(97, 71, 182)
  );
}
</style>
