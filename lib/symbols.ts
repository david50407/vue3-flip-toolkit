import type { InjectionKey } from 'vue'
import type { ProvidedAddFlipped, ProvidedAddInverted } from './types'

export const ProvidedAddFlippedKey: InjectionKey<ProvidedAddFlipped> = Symbol('addFlipped')
export const ProvidedAddInvertedKey: InjectionKey<ProvidedAddInverted> = Symbol('addInverted')
