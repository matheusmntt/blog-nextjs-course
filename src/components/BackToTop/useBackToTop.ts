import { useCallback, useEffect, useState } from 'react'

export const useBackToTop = () => {
  const [show, setShow] = useState(false)
  const [lastScrollVertical, setLastScrollVertical] = useState(0)

  const handleControlScroll = useCallback(() => {
    if (window.screenY === 0) {
      setShow(false)
    }

    if (window.screenY > lastScrollVertical) {
      setShow(false)
    } else {
      setShow(true)
    }

    setLastScrollVertical(window.screenY)
  }, [lastScrollVertical])

  useEffect(() => {
    window.addEventListener('scroll', handleControlScroll)

    return () => window.removeEventListener('scroll', handleControlScroll)
  }, [handleControlScroll])

  return { show }
}
