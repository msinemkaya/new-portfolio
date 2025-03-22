import { ContactCard } from './components/modules/ContactCard.jsx'
import { HeroSection } from './components/sections/Hero.jsx'
import { Navbar } from './components/modules/Navbar.jsx'
import AboutMe from './components/sections/AboutMe.jsx'
import { useEffect, useState } from 'react'
import { MyWork } from './components/sections/MyWork.jsx'

function App() {
  const [ position, setPosition ] = useState({ x: 0, y: 0 })
  const [ isPointer, setIsPointer ] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target
      if ( target.closest('a, button') || target.classList.contains('cursor-pointer') ) {
        setIsPointer(true)
      }
      else {
        setIsPointer(false)
      }
    }

    document.addEventListener('mousemove', moveCursor)

    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div
        className={`custom-cursor ${isPointer ? 'pointer' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      <div className="bg-light-primary p-6 rounded-xl relative grain">
        <Navbar/>

        <div className="container max-w-4xl mx-auto">
          <HeroSection/>
          <AboutMe/>
          <MyWork/>
        </div>

        <div className="fixed bottom-12 left-12 z-10">
          <ContactCard/>
        </div>
      </div>
    </>
  )
}

export default App
