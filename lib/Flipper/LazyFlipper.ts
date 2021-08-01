import { Flipper } from 'flip-toolkit'

type ConstructorProps = ConstructorParameters<typeof Flipper>[0]

export interface LazyFlipper extends Omit<Flipper, 'debug'> {
  initialize(element: Element): void
  setOptions(options: Omit<Partial<ConstructorProps>, 'element'>): void
}

export const createLazyFlipper = (initOptions: Partial<ConstructorProps> = {}): LazyFlipper => {
  const options: Partial<ConstructorProps> = { ...initOptions }
  const flippedQueue: Parameters<Flipper['addFlipped']>[] = []
  const invertedQueue: Parameters<Flipper['addInverted']>[] = []

  let flipperInstance: Flipper | null = null

  return new Proxy({
    initialize(this: LazyFlipper, element: HTMLElement) {
      const instance = new Flipper({ ...options, element })

      flippedQueue.splice(0, flippedQueue.length).forEach(_ => instance.addFlipped(..._))
      invertedQueue.splice(0, invertedQueue.length).forEach(_ => instance.addInverted(..._))

      flipperInstance = instance
    },
    setOptions(this: LazyFlipper, newOptions: Partial<ConstructorProps>) {
      Object.assign(options, newOptions)

      if (flipperInstance) {
        Object.assign(flipperInstance, options)
      }
    },
    addFlipped(this: LazyFlipper, ...args: Parameters<Flipper['addFlipped']>) {
      if (!flipperInstance) {
        flippedQueue.push(args)
      }

      flipperInstance?.addFlipped(...args)
    },
    addInverted(this: LazyFlipper, ...args: Parameters<Flipper['addInverted']>) {
      if (!flipperInstance) {
        invertedQueue.push(args)
      }

      flipperInstance?.addInverted(...args)
    },
  } as Partial<LazyFlipper>, {
    get(this: LazyFlipper, target: LazyFlipper, propertyKey: keyof Flipper) {
      if (propertyKey in target) {
        return target[propertyKey]
      }

      if (flipperInstance && propertyKey in flipperInstance) {
        return flipperInstance[propertyKey]
      }

      if (propertyKey === 'recordBeforeUpdate' || propertyKey === 'update') {
        return () => {}
      }

      return null
    },
  }) as LazyFlipper
}
