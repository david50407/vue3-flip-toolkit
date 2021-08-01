<template>
  <div :class="style.example">
    <Flipper
      :flip-key="`${type}-${JSON.stringify(listData)}`"
      :spring="spring"
      :stagger-config="{
        default: {
          reverse: stagger !== 'forward',
          speed: 1,
        },
      }"
      :decision-data="{ type, listData }"
    >
      <div :class="style.container">
        <fieldset>
          <legend>Sort</legend>
          <label v-for="v in ['asc', 'desc']" :key="v">
            <input type="radio" v-model="sort" :value="v" />
            {{ v }}
          </label>
        </fieldset>
        <fieldset>
          <legend>Type</legend>
          <label v-for="v in ['grid', 'list']" :key="v">
            <input type="radio" v-model="type" :value="v" />
            {{ v }}
          </label>
        </fieldset>
        <fieldset>
          <legend>Stagger</legend>
          <label v-for="v in ['forward', 'reverse', 'none']" :key="v">
            <input type="radio" v-model="stagger" :value="v" />
            {{ v }}
          </label>
        </fieldset>
        <fieldset>
          <legend>Spring</legend>
          <label v-for="v in ['stiff', 'noWobble', 'veryGentle', 'gentle', 'wobbly']" :key="v">
            <input type="radio" v-model="spring" :value="v" />
            {{ v }}
          </label>
        </fieldset>
      </div>
      <div>
        <button
          v-if="filteredIds.length > 0"
          :class="style.showAll"
          @click="filteredIds = []"
        >show all cards</button>
      </div>
      <Flipped :class="type === 'grid' ? style.grid : style.list" flip-id="list">
        <Flipped is="ul" :class="style.listContents" inverse-flip-id="list">
          <Card
            v-for="({ id, title }) in listData"
            :key="id"
            :id="id"
            :title="title"
            :stagger="stagger !== 'none'"
            :type="type"
            @filtered="addFilteredIds(id)"
          />
        </Flipped>
      </Flipped>
    </Flipper>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useCssModule, watch } from 'vue'
import { Flipper, Flipped } from 'vue3-flip-toolkit'

import Card from './Card.vue'
import data from './data'

const style = useCssModule()
const sort = ref<'asc' | 'desc'>('asc')
const type = ref<'grid' | 'list'>('list')
const stagger = ref<'forward' | 'reverse' | 'none'>('forward')
const spring = ref<'stiff' | 'noWobble' | 'veryGentle' | 'gentle' | 'wobbly'>('stiff')
const filteredIds = ref<number[]>([])
const listData = computed(() => data
  .filter(({ id }) => !filteredIds.value.includes(id))
  .sort(({ id: l }, { id: r }) => sort.value === 'asc' ? l - r : r - l)
)

const addFilteredIds = (id: number) => filteredIds.value.push(id)

watch(stagger, () => {
  sort.value = sort.value === 'asc' ? 'desc' : 'asc'
})
</script>

<style module>
.example {
  padding: 2rem;
}

.example > * {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.example *,
.example *::before,
.example *::after {
  box-sizing: border-box;
}

.grid > ul {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-auto-rows: 8rem;
  grid-gap: 1rem;
  padding: 0;
  margin: 0;
}

.list {
  grid-gap: 1rem;
  margin: 2rem 0;
}

.grid,
.list {
  border-radius: 5px;
  background-color: #ececec;
  margin-top: 2.5rem;
  max-width: 900px;
}

.list > ul,
.grid > ul {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 1rem;
}

.showAll {
  padding: 0.5rem 1rem;
  background-color: #ff4057;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 3px;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.container > label {
  min-width: 4.5rem;
}

.example legend {
  font-weight: bold;
}

.example fieldset {
  border: 0;
  padding: 1rem;
}

.example label {
  margin-right: 1.5rem;
  cursor: pointer;
}

.example input {
  position: relative;
  margin-right: 0.5rem;
}
</style>
