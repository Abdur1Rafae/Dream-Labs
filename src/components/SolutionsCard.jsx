import Image from 'next/image'
import React from 'react'

const SolutionsCard = ({title, description, onClick, img}) => {
  return (
    <div className='flex flex-col md:flex-row rounded-lg border-2 w-11/12 lg:w-8/12 shadow-md bg-white'>
        <img src={`/${img}`} className='md:w-64 h-64 rounded-lg'/>
        <div className='flex flex-col justify-center px-2 md:px-8'>
            <h4 className='font-medium text-lg'>{title}</h4>
            <p className='text-[#718096] text-xs mt-4'>{description}</p>
            <button className='bg-transparent text-xs font-bold self-end mt-4' onClick={onClick}><span className='bg-gradient-to-tr from-[#F7666F] to-[#57007B] rounded-md text-transparent bg-clip-text'>Read more</span></button>
        </div>
    </div>
  )
}

export default SolutionsCard