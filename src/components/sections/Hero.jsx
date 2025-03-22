import avatar from '/avatar.svg'

export function HeroSection() {
  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <div className="mt-20 flex flex-col justify-evenly">
        <div className="mt-20 text-center sm:text-left">
          <p>HI, MY NAME IS</p>
          <p className="colorful-title">
            <span data-text="MELIKE" className="tracking-tight">MELIKE</span>
          </p>
          <p>NICE TO MEET YOU!</p>
        </div>

        <div className="inline mt-20 relative text-center sm:text-left">
          <p>I AM A</p>
          <span className="emphasize">SOFTWARE DEVELOPER</span>
        </div>
      </div>
      <img src={`${import.meta.env.BASE_URL}avatar.svg`} alt="avatar" className="w-80 drop-shadow-xl mx-auto sm:mx-0"/>
      <div className="shadow-custom"></div>
    </div>
  )
}
