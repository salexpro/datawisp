import { useState, useEffect } from 'react'

const useScrolled = () => {
  const SCROLL_OFFSET = 80
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_OFFSET)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrolled
}

export default useScrolled
