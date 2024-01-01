const Footer = () => {
  return (
    <div>
        <footer className="relative">
        <div className="h-12 bg-red-500"></div>
        <div className="h-10 bg-black"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 h-[70%]">
          <img className="h-fulll" src="/images/pokeball.png" alt="" />
        </div>
      </footer>
    </div>
  )
}
export default Footer