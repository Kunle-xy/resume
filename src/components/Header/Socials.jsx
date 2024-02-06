import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Socials = () => {
  return (
    <div className='hidden absolute left-5 bottom-0 md:flex flex-col gap-5 transition '>
      <a href="https://linkedin.com/in/kunleoguntoye" rel='noreferrer' target="_blank">
        <FaLinkedin size={35}/>
      </a>
      <a href="https://github.com/Kunle-xy" rel='noreferrer' target="_blank">
        <FaGithub size={35}/>
      </a>
      <a href="https://scholar.google.com/citations?hl=en&user=w1JdW5UAAAAJ" rel='noreferrer' target="_blank">
        <SiGooglescholar size={35}/>
      </a>
    </div>
  )
}

export default Socials
