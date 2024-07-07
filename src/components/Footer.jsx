import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-tr to-[#F1F1F5] from-[#E4ECF7] mt-4 w-full h-full'>
        <div className='w-full px-8 py-12 flex flex-col md:flex-row justify-around items-center'>
            <h3 className='tex-lg md:text-2xl font-bold'>Your Ideas + Our  Expertise = <span className='bg-gradient-to-tr from-[#F7666F] to-[#57007B] text-transparent bg-clip-text'>Success</span></h3>
            <div className='flex flex-col items-center mt-8 md:mt-0'>
                <div className='flex gap-4'>
                    <hr className='h-[5px] w-6 rounded rotate-45 bg-gradient-to-tr from-[#F16063] to-[#FFC656]'/>
                    <hr className='h-[5px] w-6 rounded rotate-90 bg-gradient-to-tr from-[#F16063] to-[#FFC656]'/>
                    <hr className='h-[5px] w-6 rounded -rotate-45 bg-gradient-to-tr from-[#F16063] to-[#FFC656]'/>
                </div>
                <button className=' mt-6 text-white font-medium bg-gradient-to-tr from-[#F16063] to-[#FFC656] px-12 py-1 text-sm'>Start Your Project</button>
                <div className='flex gap-4 mt-6'>
                    <hr className='h-[5px] w-6 rounded -rotate-45 bg-gradient-to-tr from-[#F16063] to-[#FFC656]'/>
                    <hr className='h-[5px] w-6 rounded -rotate-90 bg-gradient-to-tr from-[#F16063] to-[#FFC656]'/>
                    <hr className='h-[5px] w-6 rounded rotate-45 bg-gradient-to-tr from-[#F16063] to-[#FFC656]'/>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center p-2'>
            <p className='text-xs'>© 2024 Copyright by MMR Developers. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer