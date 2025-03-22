import { NavLink } from '../common/NavLink.jsx'
import { HiOutlineLink } from 'react-icons/hi2'

export function Navbar() {
  return (
    <div className="flex gap-6 items-center fixed top-12 right-12 z-50">
      <NavLink to="about">ABOUT ME</NavLink>
      <NavLink to="myWork">MY WORK</NavLink>
      <NavLink resume to={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank">
        <div className="flex gap-2 items-center">
          RESUME <HiOutlineLink/>
        </div>
      </NavLink>
    </div>
  )
}
