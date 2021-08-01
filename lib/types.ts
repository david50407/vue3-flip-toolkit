import { SpringOption } from 'flip-toolkit/lib/springSettings/types'
export { SpringOption } from 'flip-toolkit/lib/springSettings/types'

/**
 * Copied from `flip-toolkit` and removed react specific properties.
 *
 * @see {@link flip-toolkit/lib/types#FlippedProps}
 *
 */
export type FlipId = string | number
export interface DecisionData {
  previous?: any
  current?: any
}
export interface SerializableFlippedProps {
  element: HTMLElement
  /** Tween opacity (applying this prop will remove the default transitions on the scale and transform values) */
  opacity?: boolean
  /** Tween Tween scaleX and scaleY (applying this prop will remove the default transitions on the transform and opacity values) */
  translate?: boolean
  /** Tween Tween scaleX and scaleY (applying this prop will remove the default transitions on the transform and opacity values) */
  scale?: boolean
  transformOrigin?: string
  /** Provide a string referencing one of the spring presets — (default), veryGentle, gentle, wobbly, or stiff, OR provide an object with stiffness and damping parameters */
  spring?: SpringOption
  /** Provide "true" to stagger the element with all other staggered elements. If you want to get more granular, you can provide a string key and the element will be staggered with other elements with the same key. */
  stagger?: string | boolean
  flipId?: FlipId
  inverseFlipId?: string
  /** Prevent this element from animating until the Flipped element with the provided flipId has started its animation, useful for nested animations  */
  delayUntil?: FlipId
}
export interface CallbackFlippedProps {
  /** Called when the FLIP animation for the element starts. It is provided a reference to the DOM element being transitioned as the first argument. */
  onStart?: (element: HTMLElement, decisionData?: DecisionData) => void
  /** Similar to onStart, but guaranteed to run for all FLIP-ped elements on the initial tick of the FLIP animation, before the next frame has rendered, even if the element in question has a stagger delay. It is provided a reference to the DOM element being transitioned as the first argument.   */
  onStartImmediate?: (element: HTMLElement, decisionData?: DecisionData) => void
  /** Called when the FLIP animation completes. It is provided a reference to the DOM element being transitioned as the first argument. (If transitions are interruped by new ones, onComplete will still be called.) */
  onComplete?: (element: HTMLElement, decisionData?: DecisionData) => void
  /** Called with the current spring value (normally between 0 - 1 but might briefly go over or under that range depending on the level of "bounciness" of the spring). Useful if you'd like to tween other, non-FLIP animations in concert with a FLIP transition.  */
  onSpringUpdate?: (springValue: number) => void
  /** Called when the element first appears in the DOM. It is provided a reference to the DOM element being transitioned as the first argument, and the index of the element relative to all appearing elements as the second. Note: If you provide an onAppear prop, the default opacity of the element will be set to 0 to allow you to animate it in without any initial flicker. If you don't want any opacity animation, just set the element's opacity to 1 immediately in your onAppear function. */
  onAppear?: (element: HTMLElement, index: number, decisionData?: DecisionData) => void
  /** Called when the element is removed from the DOM. It must call the removeElement function when the exit transition has completed.   */
  onExit?: (element: HTMLElement, index: number, removeElement: () => void, decisionData?: DecisionData) => void
  /** A function provided with the current and previous decisionData props passed down by the Flipper component. Returns a boolean to indicate whether a Flipped component should animate at that particular moment or not. */
  shouldFlip?: (previousDecisionData: any, currentDecisionData: any) => boolean
  /** A function provided with the current and previous decisionData props passed down by the Flipper component. Returns a boolean indicating whether to apply inverted transforms to all Flipped children that request it via an inverseFlipId. */
  shouldInvert?: (previousDecisionData: any, currentDecisionData: any) => boolean
}
export type FlippedProps = SerializableFlippedProps & CallbackFlippedProps
export type DelayUntil = (previousDecisionData: any, currentDecisionData: any) => FlipId;
export interface StaggerConfigValue {
    reverse?: boolean;
    /** A number between 0 (for a slower stagger) and 1 (for a faster stagger) */
    speed?: number;
    delayUntil?: DelayUntil;
}
export interface StaggerConfig {
  [key: string]: StaggerConfigValue;
}
export interface HandleEnterUpdateDeleteArgs {
  hideEnteringElements: () => void;
  animateExitingElements: () => Promise<void>;
  animateFlippedElements: () => Promise<void> | void;
  animateEnteringElements: () => void;
}
export declare type HandleEnterUpdateDelete = (args: HandleEnterUpdateDeleteArgs) => void;

export type CamelCase<S extends string> = S extends `${infer P1}${'-' | '_' | ' '}${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>

export interface ProvidedAddFlipped {
  (props: FlippedProps): void
}

export interface ProvidedAddInverted {
  (props: {
    element: HTMLElement
    parent: HTMLElement
    opacity?: boolean
    translate?: boolean
    scale?: boolean
    transformOrigin: string
  }): void
}
