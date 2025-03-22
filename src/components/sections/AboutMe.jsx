import { useEffect, useState } from 'react'
import line from '/line.svg'
import { Technologies } from '../modules/Technologies.jsx'
import { WhoAmI } from '../modules/WhoAmI.jsx'

export default function AboutMe() {
  const [ isVisible, setIsVisible ] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about')
      if ( section ) {
        const rect = section.getBoundingClientRect()
        if ( rect.top < window.innerHeight * 0.9 ) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <div className="mt-0 w-52 sm:-mt-20 sm:w-96">
        <img src={line} alt="line" className="rotate-y-180"/>
      </div>
      <section id="about">
        <WhoAmI isVisible={isVisible}/>
        <Technologies isVisible={isVisible}/>
      </section>
    </div>
  )
}
