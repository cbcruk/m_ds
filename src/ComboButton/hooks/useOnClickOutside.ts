import { useEffect, RefObject } from 'react'

type PossibleEvent = MouseEvent | TouchEvent

function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: PossibleEvent) => void
) {
  useEffect(() => {
    const listener = (event: PossibleEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
