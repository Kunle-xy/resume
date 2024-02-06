import React from 'react'
import Cta from '../CTA/Cta'
import ME from '/assets/ME.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header className='relative  mx-0 md:mx-0 my-10 flex-center-col gap-4 '>
        <h5>Hello I'm</h5>
        <h1 className='text-2xl md:text-6xl'>Kunle Oguntoye</h1>
        <h5 className='gap-y-0 text-xs md:text-xl mb-5'>Full Stack developer | Machine Learning Engineer</h5>


        <Cta />

        <div>
            <img src={ME} alt='Kunle Oguntoye' className=' h-full hover:rounded-full  p-5' />
            <a href="#contact" className='hidden absolute md:block right-0 bottom-0 rotate-90'>Scroll Down</a>
        </div>

        <Socials />
    </header>

  )
}

export default Header
