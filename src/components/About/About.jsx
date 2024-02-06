import a from '/assets/a.png'
import b from '/assets/b.png'
import c from '/assets/c.png'
import d from '/assets/d.png'
import { BsAwardFill } from "react-icons/bs";
import { PiHandbagFill } from "react-icons/pi";
import { BsBuildingGear } from "react-icons/bs";



const About = () => {
  return (
    <section id='about' className='md:h-[1000px] flex flex-col justify-start items-center  '>
        <h5 className='text-blue-300 text-3xl'>Get to know me</h5>

        <div className='md:p-10 md:grid-cols-2 grid grid-rows-2 md:gap-10 '>
            <div className='overflow-x-auto flex space-x-4 h-[400px] w-full md:h-[500px]'>
                <img  src={a} alt="" className=''/>
                <img  src={b} alt="" className=''/>
                <img  src={c} alt="" className=''/>
                <img  src={d} alt="" className=''/>
            </div>
            <div className='relative flex flex-row md:flex-col py-0'>
                <div className='flex-center-col md:flex-between gap-2 mx-10 pb-5'>
                    <div className='bg-blue-900 h-40 w-40 rounded-xl flex-center-col'>
                            <BsAwardFill size={30}/>
                            <p className='pt-3'>Experience</p>
                            <p>4+ years</p>
                    </div>
                    <div className='bg-blue-900 h-40 w-40 rounded-xl flex-center-col'>
                            <PiHandbagFill size={30}/>
                            <p className='pt-3'>Internships</p>
                            <p>1 year</p>
                    </div>
                    <div className='bg-blue-900 h-40 w-40 rounded-xl flex-center-col'>
                            <BsBuildingGear size={30}/>
                            <p className='pt-3'>Startups</p>
                            <p> working on #2</p>
                    </div>
                </div>
                <div className='mx-10'>
                    <p className='text-lg md:text-lg xl:text-lg'>
                    As a full-stack developer with a keen interest in machine learning, I've honed my skills through both academic pursuits and practical experience. During my two-year tenure at Iowa State University, where I pursued a master's degree in Intelligent Infrastructure Engineering, I had the privilege of interning at a prominent tech company in Iowa. There, I spearheaded the development of the machine learning operations pipeline and crafted advanced computer vision models.

                    My master's research focuses on optimizing the mapping of underground utilities, aiming to devise more efficient and accurate methods. This exploration has led me to conceive a startup idea based on my findings. Additionally, I devote my free time to collaborating with a team of developers on Humanly-AI, an innovative platform designed to enhance writing skills beyond the capabilities of existing tools like Grammarly.

                    Driven by a passion for both teaching and continuous learning, I remain actively engaged in expanding my knowledge base. As a fervent supporter of Barcelona Football Club, I find inspiration in their dedication to excellence both on and off the field.
                    </p>
                </div>
                <div className='hidden text-xl md:text-2xl md:block'>
                    <button href="#contact" className='bg-sky-900 px-10 py-3 rounded-full mt-10 mx-10 font-bold '>
                        Contact me
                    </button>

                </div>


            </div>
        </div>


    </section>
  )
}

export default About
