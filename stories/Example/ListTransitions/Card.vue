<template>
  <Flipped
    is="li"
    :class="[style.item, { [style.list]: type === 'list' }]"
    :flip-id="flipId"
    :stagger="stagger"
    :should-invert="shouldFlip"
    @appear="onElementAppear"
    @exit="(data) => type === 'grid' ? onGridExit(data) : onListExit(data)"
  >
    <Flipped :inverse-flip-id="flipId">
      <Flipped
        :flip-id="`${flipId}-content`"
        translate
        :should-flip="shouldFlip"
        :delay-until="flipId"
      >
        <h3>{{ title }}</h3>
        <p>{{ title }}</p>
      </Flipped>
      <Flipped
        is="button"
        :flip-id="`${flipId}-button`"
        :should-flip="shouldFlip"
        :delay-until="flipId"
        :class="style.remove"
        @click="emits('filtered', id)"
      >&times;</Flipped>
    </Flipped>
  </Flipped>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue'
import { Flipped, spring } from 'vue3-flip-toolkit'

const props = defineProps<{
  id: number
  title: string
  type: string
  stagger: boolean
}>()
const emits = defineEmits<{
  (e: 'filtered', id: number): void
}>()

const style = useCssModule()
const flipId = `item-${props.id}`

const shouldFlip = (prev: any, current: any) => prev.type !== current.type
const onElementAppear = ({ el, index }: any) => {
  spring({
    onUpdate: v => el.style.opacity = v,
    delay: index * 50,
  })
}
const onExit = (type: string) => ({ el, index, removeElement }: any) => {
  spring({
    config: { overshootClamping: true },
    onUpdate: val => {
      el.style.transform = `scale${type === "grid" ? "X" : "Y"}(${1 - (val as number)})`
    },
    delay: index * 50,
    onComplete: () => {
      el.style.opacity = ""
      removeElement()
    },
  })
}
const onGridExit = onExit("grid")
const onListExit = onExit("list")
</script>

<style module>
.list.item {
  margin-bottom: 1rem;
}

.list.item:last-child {
  margin-bottom: 0;
}

.item {
  overflow: hidden;
  display: block;
  border-radius: 4px;
  background-color: white;
}

.item h3 {
  font-size: 1.1rem;
}

.item > div {
  padding: 0 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.item h3 {
  margin-bottom: 0;
}

.item p {
  font-style: italic;
  margin-top: 0;
}

.remove {
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 2.2rem;
  color: #ff4057;
  position: relative;
  left: 0.5rem;
  width: 1.5rem;
}
</style>
