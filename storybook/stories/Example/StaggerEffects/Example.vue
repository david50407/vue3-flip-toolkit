<template>
  <div :class="style.example">
    <Flipper
      spring="gentle"
      :class="style.container"
      :flip-key="focused"
      :stagger-config="{
        card: {
          reverse: focused !== false,
        },
      }"
      :decision-data="focused"
    >
      <ul :class="style.list">
        <li v-for="idx in 7" :key="idx">
          <ExpandedListItem v-if="idx === focused" :index="idx" @click="onClick(idx)" />
          <ListItem v-else :index="idx" @click="onClick(idx)" />
        </li>
      </ul>
    </Flipper>
  </div>
</template>

<script setup lang="ts">
import { ref, useCssModule } from 'vue'
import { Flipper } from 'vue3-flip-toolkit'
import ExpandedListItem from './ExpandedListItem.vue'
import ListItem from './ListItem.vue'

const style = useCssModule()
const focused = ref<number | false>(false)

const onClick = (idx: number) => {
  focused.value = focused.value === idx ? false : idx
}
</script>

<style module>
.container {
  width: 400px;
  margin: 2rem auto;
}

.list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: 100vh;
}

.list li {
  width: 100%;
}

.list li + li {
  margin-top: 1rem;
}
</style>
