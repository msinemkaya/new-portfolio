export function ContactLink({ Icon, text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm hover:pl-2 hover:underline hover:underline-offset-3 transition-all duration-300 group flex gap-1 items-center cursor-none"
    >
      <Icon size={14} className="hidden opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-300" />
      {text}
    </a>
  )
}
