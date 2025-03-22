export function NavLink({ children, to, resume = false, target = '_self' }) {
  const handleClick = (e) => {
    if ( !resume ) {
      e.preventDefault()
      const targetElement = document.getElementById(to)
      if ( targetElement ) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <a
      href={resume ? to : `#${to}`}
      onClick={resume ? undefined : handleClick}
      target={target}
      rel="noopener noreferrer"
      className="relative text-sm tracking-tight transition-all duration-300 hover:mx-2
      after:absolute after:left-0 after:bottom-0 after:w-full after:h-px
      after:bg-black after:scale-0 hover:after:scale-100
      after:transition-transform after:duration-300 scroll-smooth"
    >
      {children}
    </a>
  )
}
