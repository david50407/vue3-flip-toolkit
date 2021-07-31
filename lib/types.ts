import type { FlippedProps } from 'flip-toolkit/lib/types'

export type CamelCase<S extends string> = S extends `${infer P1}${'-' | '_' | ' '}${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>

export interface ProvidedAddFlipped {
  (props: Omit<FlippedProps, 'children'> & { element: HTMLElement }): void
}

export interface ProvidedAddInverted {
  (props: {
    element: HTMLElement
    parent: HTMLElement
    opacity: boolean
    translate: boolean
    scale: boolean
    transformOrigin: string
  }): void
}
