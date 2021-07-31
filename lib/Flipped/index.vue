<template>
  <component :is="props.is" ref="element">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { inject, onMounted, ref, withDefaults } from 'vue'
import type { DecisionData, FlipId } from 'flip-toolkit/lib/types'
import type { SpringOption } from 'flip-toolkit/lib/springSettings/types'
import { ProvidedAddFlippedKey, ProvidedAddInvertedKey } from 'vue3-flip-toolkit/symbols'
import type { CamelCase } from 'vue3-flip-toolkit/types'

/**
 * Copied structure from flip-toolkit.
 *
 * @see {@link flip-toolkit/lib/types#SerializableFlippedProps}
 * @see {@link flip-toolkit/lib/types#CallbackFlippedProps}
 */
type PropsAndHandlers = {
  is?: string
  flipId?: FlipId
  portalKey?: string
  opacity?: boolean
  translate?: boolean
  scale?: boolean
  transformOrigin?: string
  spring?: SpringOption
  stagger?: string | boolean
  inverseFlipId?: string
  delayUntil?: FlipId
  shouldFlip?: (previousDecisionData: any, currentDecisionData: any) => boolean
  shouldInvert?: (previousDecisionData: any, currentDecisionData: any) => boolean
  /*
   * HACK: event handlers, we want to detect if handler is exists
   * ref: https://blog.davy.tw/posts/access-listeners-in-vue3-components/
   */
  onAppear?: (data: { flipId: FlipId; el: HTMLElement; index: number; decisionData?: DecisionData }) => void
  onStart?: (data: { flipId: FlipId; el: HTMLElement; decisionData?: DecisionData }) => void
  onSpringUpdate?: (data: { flipId: FlipId; springValue: number }) => void
  onComplete?: (data: { flipId: FlipId; el: HTMLElement; decisionData?: DecisionData }) => void
  onExit?: (data: {
    flipId: FlipId
    el: HTMLElement
    index: number
    removeElement: () => void
    decisionData?: DecisionData
  }) => void
}

const { flipId, inverseFlipId, ...props } = withDefaults(defineProps<PropsAndHandlers>(), {
  is: 'div',
  opacity: false,
  scale: false,
  translate: false,
})

type HandlerData<Handler extends `on${string}`> =
  Handler extends keyof PropsAndHandlers ? Parameters<Required<PropsAndHandlers>[Handler]>[0] : never
type EventTypes = 'appear' | 'start' | 'spring-update' | 'complete' | 'exit'
const emits = defineEmits<{
  <T extends EventTypes>(e: T, data: HandlerData<CamelCase<`on-${T}`>>): void
}>()

const element = ref<HTMLElement>()
const addFlipped = inject(ProvidedAddFlippedKey)
const addInverted = inject(ProvidedAddInvertedKey)

onMounted(() => {
  if (flipId) {
    addFlipped?.({
      flipId,
      element: element.value!,
      portalKey: props.portalKey,
      opacity: props.opacity,
      translate: props.translate,
      scale: props.scale,
      transformOrigin: props.transformOrigin,
      spring: props.spring,
      stagger: props.stagger,
      delayUntil: props.delayUntil,
      onAppear: props.onAppear ? (el, index, decisionData) => emits('appear', { flipId, el, index, decisionData }) : undefined,
      onStart: props.onStart ? (el, decisionData) => emits('start', { flipId, el, decisionData }) : undefined,
      onSpringUpdate: props.onSpringUpdate ? (springValue) => emits('spring-update', { flipId, springValue }) : undefined,
      onComplete: props.onComplete ? (el, decisionData) => emits('complete', { flipId, el, decisionData }) : undefined,
      onExit: props.onExit
        ? (el, index, removeElement, decisionData) => emits('exit', {
          flipId,
          el,
          index,
          removeElement,
          decisionData,
        })
        : undefined,
    })
  }
  else if (inverseFlipId) {
    addInverted?.({
      element: element.value!,
      parent: { dataset: { flipId: inverseFlipId } } as unknown as HTMLElement,
      opacity: props.opacity,
      scale: props.scale,
      translate: props.translate,
      transformOrigin: undefined as unknown as string,
    })
  }
  else {
    throw new Error('Flipped needs flipId or inverseFlipId')
  }
})
</script>
