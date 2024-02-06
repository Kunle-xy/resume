import React from 'react'
import Kunle_O from '/assets/Kunle_O.pdf'

const Cta = () => {
  return (
    <section className=''>
      <div className='flex flex-center-col gap-3 md:gap-10 md:flex-center-row'>
      <div>
        <a href={Kunle_O} download className=''>
          <button className='p-5 rounded-xl text-blue-500 border border-blue-200 hover:bg-white hover:text-black'>
            Download Resume
          </button>
          </a>
      </div>
      <div>
        <a href="#contact">
          <button className='p-5 px-10 rounded-xl text-blue-500 border border-blue-200  hover:bg-white hover:text-black'>
            Let's Talk
          </button>
          </a>
      </div>
    </div>
    </section>
  )

}

export default Cta
