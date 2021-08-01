<template>
  <component :is="is" ref="element">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { ProvidedAddFlippedKey, ProvidedAddInvertedKey } from 'vue3-flip-toolkit/symbols'
import type { DecisionData, FlipId, SpringOption } from 'vue3-flip-toolkit/types'

/**
 * Copied structure from flip-toolkit.
 *
 * @see {@link flip-toolkit/lib/types#SerializableFlippedProps}
 * @see {@link flip-toolkit/lib/types#CallbackFlippedProps}
 */
type PropsAndHandlers = {
  is?: string
  flipId?: FlipId
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

const { is, flipId, inverseFlipId, ...props } = withDefaults(defineProps<PropsAndHandlers>(), {
  is: 'div',
  opacity: false,
  scale: false,
  translate: false,
})

type ReturnBoolean<T> = T extends (...args: infer Args) => any
  ? (...args: Args) => boolean
  : never
/**
 * HACK: I don't know why type definition is not working, use object definition instead.
 *
 * @see {@link #PropsAndHandlers}
 */
const emits = defineEmits({
  appear: (() => true) as ReturnBoolean<PropsAndHandlers['onAppear']>,
  start: (() => true) as ReturnBoolean<PropsAndHandlers['onStart']>,
  'spring-update': (() => true) as ReturnBoolean<PropsAndHandlers['onSpringUpdate']>,
  complete: (() => true) as ReturnBoolean<PropsAndHandlers['onComplete']>,
  exit: (() => true) as ReturnBoolean<PropsAndHandlers['onExit']>,
})

const element = ref<HTMLElement>()
const addFlipped = inject(ProvidedAddFlippedKey)
const addInverted = inject(ProvidedAddInvertedKey)

onMounted(() => {
  if (flipId) {
    addFlipped?.({
      flipId,
      element: element.value!,
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
