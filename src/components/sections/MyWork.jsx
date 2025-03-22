import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import wire from '/wire.svg'
import { GrGithub } from 'react-icons/gr'

const projects = [
  {
    title: 'iWeather',
    description: 'Weather App built with React.',
    link: 'https://msinemkaya.github.io/iWeather/',
    github: 'https://github.com/msinemkaya/iWeather',
    bgColor: 'bg-yellow-200',
    textColor: 'text-yellow-500',
  },
  {
    title: 'Fee Calculator',
    description: 'Fee Calculator with TypeScript.',
    github: 'https://github.com/msinemkaya/fee-calculator',
    bgColor: 'bg-pink-200',
    textColor: 'text-pink-500',
  },
  {
    title: 'EMS',
    description: 'Education Management System with React.',
    github: 'https://github.com/msinemkaya/ems-front',
    bgColor: 'bg-blue-200',
    textColor: 'text-blue-500',
  },
]

export function MyWork() {
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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="mt-12 w-full max-w-4xl mx-auto text-center"
    >
      <div className="flex items-center justify-center my-34">
        <img src={`${import.meta.env.BASE_URL}wire.svg`} alt="wire"/>
      </div>

      <h2 className="text-4xl font-bold colorful-title text-[clamp(3rem,3vw,6rem)]! mb-16!" id="myWork">MY WORK</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-44">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg ${project.bgColor} transform rotate-2 hover:rotate-0 transition-all duration-300`}
          >
            <div className="flex pr-3 pt-3 items-center gap-2 justify-end">
              {project?.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="cursor-none hover:scale-125 transition-all duration-300"
                >
                  <FaExternalLinkAlt className={project.textColor}/>
                </a>
              )}

              {project?.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="cursor-none hover:scale-125 transition-all duration-300"
                >
                  <GrGithub className={project.textColor}/>
                </a>
              )}
            </div>
            <div className="p-6 pt-3">
              <h3 className={`text-lg font-bold ${project.textColor}`}>{project.title}</h3>
              <hr className={`my-3 ${project.textColor}`}/>
              <p className={`text-sm mt-2 ${project.textColor}`}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
