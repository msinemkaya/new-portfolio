import { motion } from 'motion/react'

export function WhoAmI({isVisible}) {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto p-6 text-center"
      >
        <h2 className="text-4xl font-bold colorful-title text-[clamp(3rem,3vw,6rem)]! mb-8!">About Me</h2>
        <p className="leading-relaxed font-bold">
          Passionate about crafting engaging digital experiences, I am a software developer who thrives on continuous
          learning and innovation.
        </p>
        <p className="mt-4 leading-relaxed">
          With a strong foundation in front-end development, I specialize in <b>React, JavaScript, and modern UI/UX
          principles</b>, ensuring that every project is not just functional but also visually compelling and
          user-centric.
        </p>
        <p className="mt-4 leading-relaxed">
          My expertise lies in building <b>scalable, maintainable, and performance-driven applications</b> that provide
          seamless user experiences. With an eye for design and a background enriched by my studies in Poland, I bring
          a unique blend of technology and aesthetics, bridging the gap between development and design.
        </p>
        <p className="mt-4 leading-relaxed">
          Beyond the code, I value collaboration, problem-solving, and creative thinking. I believe that the best
          solutions emerge from teamwork, curiosity, and a relentless pursuit of improvement. Constantly exploring new
          technologies and approaches, I am always eager to push boundaries and create innovative digital solutions.
        </p>
      </motion.div>
    </>
  )
}
