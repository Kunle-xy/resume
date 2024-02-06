import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandTailwind } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BiSolidPointer } from "react-icons/bi";
import ai from '/assets/bbb.png'
import ai2 from '/assets/ccc.png'
import ai3 from '/assets/ddd.png'
import aws from '/assets/aws.png'
import c1 from '/assets/coursera1-1.png'
import c2 from '/assets/coursera2-1.png'
import c3 from '/assets/coursera3-1.png'
import c4 from '/assets/drone.jpg'
import c5 from '/assets/udacity-1.png'


const Experience = () => {
  return (
    <section id='experience' className='h-[100vh] flex flex-col justify-start items-center'>
       <div className='text-blue-300 text-3xl'>
            Technical Skills
       </div>
       <div className='flex sm:flex-row gap-5 p-10 flex-center-col sm:w-full '>
            <div className='sm:border-2 sm:border-purple-900 w-[600px] h-[400px] rounded-3xl p-5
            hover:bg-black sm:bg-purple-600 bg-opacity-45'>
                <div className='flex-center-row'>
                    <p className='text-3xl'>Full-Stack Development</p>
                </div>
                <div className='grid grid-cols-2 gap-1'>
                    <div className='flex flex-col  p-2'>
                        <div className="flex  p-2 gap-5 h-20">
                            <IoLogoHtml5 size={40}/>
                            <div>
                                <p className="text-xl">HTML</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <IoLogoJavascript size={40}/>
                            <div>
                                <p className="text-xl">Javascript</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            < TbBrandTailwind size={40}/>
                            <div>
                                <p className="text-xl">Tailwind-css</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <SiReact size={40}/>
                            <div>
                                <p className="text-xl">React</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col  p-2'>
                        <div className="flex  p-2 gap-5 h-20">
                            <IoLogoPython size={40}/>
                            <div>
                                <p className="text-xl">Python</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <BiLogoPostgresql  size={40}/>
                            <div>
                                <p className="text-xl">PostgresSQL</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <SiMongodb size={40}/>
                            <div>
                                <p className="text-xl">MongoDB</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <TbBrandCpp size={40}/>
                            <div>
                                <p className="text-xl">C++</p>
                                <p className="text-sm">Basic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:border-2 sm:border-purple-900 w-[700px] rounded-3xl p-5
            sm:hover:bg-purple-600 hover:bg-opacity-45'>
                <div className='flex-center-row'>
                    <p className='text-3xl'>Machine Learning & Data Science</p>
                </div>
                <div className='grid grid-cols-2 gap-1'>
                    <div className='flex flex-col  p-2'>
                        <div className="flex  p-2 gap-5 h-20">
                            <BiSolidPointer size={30}/>
                            <div>
                                <p className="text-xl">AWS Sagemaker</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <BiSolidPointer size={30}/>
                            <div>
                                <p className="text-xl">Pytorch/TensorFlow</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <BiSolidPointer size={30}/>
                            <div>
                                <p className="text-xl">Computer Vision</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <BiSolidPointer size={30}/>
                            <div>
                                <p className="text-xl">Large Language Model (LLM)</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col  p-2'>
                        <div className="flex  p-2 gap-5 h-20">
                            <BiSolidPointer size={30}/>
                            <div>
                                <p className="text-xl">OpenCV</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <BiSolidPointer size={30}/>
                            <div>
                                <p className="text-xl">HuggingFace</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                            <BiSolidPointer size={30}/>
                            <div>
                                <p className="text-xl">MLOps</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                        <div className="flex p-2 gap-5 h-20">
                        <BiSolidPointer size={30}/>
                            <div>
                                <p className="text-xl">SVM/KNN/Naives/etc</p>
                                <p className="text-sm">experienced</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Slides /> */}
       </div>
       <p className="text-blue-300 text-3xl mt-5">Side projects and Certifications</p>
       <div className="overflow-auto h-24 sm:overflow-x-auto flex space-x-4 h-[400px] w-full md:h-[500px] mt-10 ">
                <img src={ai} alt="" />
                <iframe className="w-[900px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src={"https://www.youtube.com/embed/gYqRX-hTcEA"} ></iframe>
                <img src={ai2} alt="" />
                <img src={ai3} alt="" />
                <img src={aws} alt="" />
                <img src={c1} alt="" />
                <img src={c2} alt="" />
                <img src={c3} alt="" />
                <img src={c4} alt="" />
                <img src={c5} alt="" />

            </div>

    </section>
  )
}

export default Experience
