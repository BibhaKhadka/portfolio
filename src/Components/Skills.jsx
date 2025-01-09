import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='bg-[#FAFAF4] h-screen py-20'>
      <div className='max-w-6xl mx-auto md:p-20 bg-white rounded-lg shadow-lg space-y-10 md:space-y-0 md:space-x-20'>
        <div className='text-center'>
          <h2 className='text-2xl text-yellow-700 mb-8 '>Skills</h2>
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-6'>
            <li className='bg-yellow-700 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl text-white'>React</h3>
            </li>
            <li className='bg-yellow-700 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl text-white'>Tailwind CSS</h3>
            </li>
            <li className='bg-yellow-700 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl text-white'>Node.js</h3>
            </li>
            <li className='bg-yellow-700 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl text-white'>HTML & CSS</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills;
