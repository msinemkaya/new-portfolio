import clsx from 'clsx'

export function TechCard({ Icon, title, bgColor, textColor }) {
  return (
    <div
      className={clsx(
        'relative w-24 h-24 p-4 shadow-lg transform -rotate-2 transition-transform hover:rotate-0',
        bgColor ? bgColor : 'bg-[#FDE68A] ',
      )}
    >
      <div
        className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-3 border-red-700 shadow-lg"
      />
      <div className="flex flex-col items-center justify-center">
        <Icon size={38} className={clsx(textColor ? textColor : 'text-heading')}/>
        <span className={clsx('mt-2 text-xs font-bold', textColor ? textColor : 'text-heading')}>{title}</span>
      </div>
    </div>
  )
}
