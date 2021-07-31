<template>
  <component :is="props.is" ref="element">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate, onMounted, watch, nextTick, provide, withDefaults } from 'vue'
import type { SpringOption } from 'flip-toolkit/lib/springSettings/types'
import type { HandleEnterUpdateDelete, StaggerConfig } from 'flip-toolkit/lib/types'
import { ProvidedAddFlippedKey, ProvidedAddInvertedKey } from 'vue3-flip-toolkit/symbols'
import { createLazyFlipper } from './LazyFlipper'

const props = withDefaults(defineProps<{
  flipKey: string | number | boolean
  is?: string
  decisionData?: any
  spring?: SpringOption
  staggerConfig?: StaggerConfig
  applyTransformOrigin?: boolean
  handleEnterUpdateDelete?: HandleEnterUpdateDelete
  debug?: boolean
}>(), {
  is: 'div',
  debug: false,
})

const element = ref<HTMLElement>()
const flipperInstance = createLazyFlipper({ debug: props.debug })
const previousDecisionData = ref<any>(props.decisionData)

onMounted(() => {
  flipperInstance.initialize(element.value!)
})

onBeforeUpdate(() => {
  flipperInstance.recordBeforeUpdate()
})

watch(() => props.decisionData, (_, oldValue) => previousDecisionData.value = oldValue)
watch(() => props.flipKey, (newVal, oldVal) => {
  if (newVal == oldVal) { return }

  nextTick(() => {
    flipperInstance.update(previousDecisionData.value, props.decisionData)
  })
})

const configKeys: (keyof typeof props)[] = ['spring', 'staggerConfig', 'applyTransformOrigin', 'handleEnterUpdateDelete', 'debug']
configKeys.forEach(key => {
  watch(() => props[key], (v) => flipperInstance.setOptions({ [key]: v }))
})

provide(ProvidedAddFlippedKey, (props) => {
  flipperInstance.addFlipped(props as any)
})

provide(ProvidedAddInvertedKey, (props) => {
  flipperInstance.addInverted(props)
})
</script>
