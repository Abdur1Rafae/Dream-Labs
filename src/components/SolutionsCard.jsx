import Image from 'next/image'
import React from 'react'

const SolutionsCard = ({title, description, onClick, img}) => {
  return (
    <div className='flex flex-col md:flex-row rounded-lg border-2 md:w-2/3 shadow-md bg-white'>
          <img src={`/${img}`} className='md:w-64 rounded-sm'/>
        <div className='flex flex-col justify-center md:px-8 p-3'>
            <h4 className='font-bold text-sm md:text-lg mb-2 mt-2 text-left'>{title}</h4>
            <p className='text-left text-xs md:text-sm text-[#3F3F3F]'>{description}</p>
            <button className='bg-transparent text-xs font-bold md:self-end mt-4' onClick={onClick}><span className='bg-gradient-custom rounded-md text-transparent bg-clip-text'>Read more</span></button>
        </div>
    </div>
  )
}

export default SolutionsCard