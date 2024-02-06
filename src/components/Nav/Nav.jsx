import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";


const Nav = () => {

  return (
    <nav className="overflow-x-auto fixed  flex-center-row gap-10 w-100 bottom-5 left-1/4 -translate-x-1/2 rounded-full p-3 bg-sky-900">
        <a href="#" className="hover:rounded-full hover:bg-black p-3  "><IoHome size={25}/></a>
        <a href="#about" className="hover:rounded-full hover:bg-black p-3 "><FaRegUser size={25}/></a>
        <a href="#experience" className="hover:rounded-full hover:bg-black p-3 "><FaBookOpenReader size={25}/></a>
        <a href="#contact" className="hover:rounded-full hover:bg-black p-3 "><LuMessagesSquare size={25}/></a>
    </nav>

  )
}

export default Nav
