import { useState } from "react"

function Menu(){
   const [isOpen, setIsOpen] = useState()

   const handleIsOpen = () => {
      setIsOpen(true)
   }
   const handleIsClose = () => {
      setIsOpen(false)
   }

   return <div className="text-white px-5 py-6 flex justify-between bg-slate-500 ">
      <h1 className="text-5xl ">Nooty</h1>
      <i style={{display: isOpen=== true ? "none" : ""}} onClick={handleIsOpen} className="fa-solid sm:hidden absolute right-2 text-5xl fa-bars "></i>
      <i style={{display: isOpen === true ? "block" : ""}} onClick={handleIsClose} class="fa-solid hidden absolute right-2 text-5xl fa-xmark"></i>
      <ul style={{display: isOpen === true ? "block" : ""}} className="hidden cursor-pointer sm:flex flex-col sm:flex-row mt-16 space-y-6 sm:mt-0 sm:space-y-0  sm:space-x-12 text-3xl">
         <li>Home</li>
         <li>Contact</li>
         <li>About</li>
         <li>Service</li>
      </ul>
   </div>
}
export default Menu