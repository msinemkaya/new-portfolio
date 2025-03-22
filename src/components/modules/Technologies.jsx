import { motion } from 'motion/react'
import { FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'
import { TechCard } from '../common/TechCard.jsx'
import { FaLaravel } from 'react-icons/fa6'
import { DiDocker } from 'react-icons/di'

export function Technologies({ isVisible }) {
  const techs = [
    { title: 'React', icon: FaReact },
    { title: 'Next.js', icon: SiNextdotjs },
    { title: 'TypeScript', icon: SiTypescript },
    { title: 'JavaScript', icon: FaJsSquare },
    { title: 'Node.js', icon: FaNodeJs },
    { title: 'Laravel', icon: FaLaravel },
    { title: 'Docker', icon: DiDocker },
  ]

  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 w-full max-w-4xl text-center"
      >
        <div className="flex gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 w-full max-w-4xl text-center overflow-hidden"
          >
            <div className="flex gap-6 px-8 py-6 scrollbar-hide flex-wrap items-center justify-center">
              {techs.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="snap-center"
                >
                  <TechCard title={tech.title} Icon={tech.icon}/>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
