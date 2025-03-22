import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { TbMail } from 'react-icons/tb'
import { ContactLink } from '../common/ContactLink.jsx'

export function ContactCard() {
  return (
    <div className="inline-flex flex-col">
      <ContactLink href="https://github.com/msinemkaya" Icon={FaGithub} text="GitHub"/>
      <ContactLink href="https://www.linkedin.com/in/melike-sinem-kaya" Icon={FaLinkedin} text="LinkedIn"/>
      <ContactLink href="mailto:msinemkaya6@gmail.com" Icon={TbMail} text="Mail"/>
    </div>
  )
}
