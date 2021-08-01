<template>
  <component :is="$props.is" ref="element">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate, onMounted, watch, nextTick, provide } from 'vue'
import { ProvidedAddFlippedKey, ProvidedAddInvertedKey } from 'vue3-flip-toolkit/symbols'
import type { HandleEnterUpdateDelete, SpringOption, StaggerConfig } from 'vue3-flip-toolkit/types'
import { createLazyFlipper } from './LazyFlipper'

type Props = {
  /**
   * HACK: Vue/TS cannot handle too complex type, we are setting this prop as optional with default here.
   *
   * @default false
   *
   * @todo Follow up the issue
   *
   * @see {@link https://github.com/vuejs/vue-next/issues/4224}
   */
  flipKey?: string | number | boolean
  is?: string
  decisionData?: any
  spring?: SpringOption
  staggerConfig?: StaggerConfig
  applyTransformOrigin?: boolean
  handleEnterUpdateDelete?: HandleEnterUpdateDelete
  debug?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  flipKey: false,
  is: 'div',
  debug: false,
})

const element = ref<HTMLElement>()
const flipperInstance = createLazyFlipper()
const previousDecisionData = ref<any>(props.decisionData)

onMounted(() => {
  flipperInstance.initialize(element.value!)
})

onBeforeUpdate(() => {
  flipperInstance.recordBeforeUpdate()
})

watch(() => props.decisionData, (_, oldValue) => previousDecisionData.value = oldValue)
watch(() => props.flipKey, (newVal, oldVal) => {
  if (newVal === oldVal) { return }

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
  flipperInstance.addInverted(props as any)
})
</script>
