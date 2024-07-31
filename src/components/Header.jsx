"use client";

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const router = useRouter()
    const [display, setDisplay] = useState(false)
    return (
        <>
            <header className='h-12 md:fixed md:top-0 shadow-md w-full z-20 shadow-slate-200 flex justify-between items-center text-sm font-semibold text-gray-500 bg-white'>
                <button className='md:hidden' onClick={() => setDisplay(prev => !prev)}>
                    <FaBars size={20} className='ml-2' />
                </button>
                <div className='w-8 h-8 border-black border-2 ml-2'>
                    logo
                </div>
<<<<<<< Updated upstream
                <div className='hidden md:flex gap-8'>
                    <Link href='/about'>About us</Link>
                    <Link href='/services'>Services</Link>
                    <Link href=''>How it Works</Link>
                    <Link href=''>Hire</Link>
                </div>
                <button className='bg-gradient-to-tr from-[#57007B] to-[#6675F7] px-4 py-2 text-white rounded-md font-inter mr-2' onClick={() => router.push('/contact-us')}>Contact us</button>
=======
                <button className=' border-2 border-white bg-transparent px-3 py-2 text-white rounded-md font-sans mr-2' onClick={() => scrollToSection('contact-us')}>Contact us</button>
>>>>>>> Stashed changes
            </header>
            <div className={`md:hidden bg-gray-100 flex flex-col gap-2 overflow-hidden items-center ${display ? 'max-h mt-2 mb-2' : 'max-h-0'}` }>
                <Link className='text-sm px-1 py-1 border-b-[2px]' href='#about'>About</Link>
                <Link className='text-sm px-1 py-1 border-b-[2px]' href='#services'>Services</Link>
                <Link className='text-sm px-1 py-1 border-b-[2px]' href='#latest-work'>Latest Work</Link>
                <Link className='text-sm px-1 py-1 border-b-[2px]' href='#why-us'>Why Us</Link>
                <Link className='text-sm px-1 py-1 ' href='#approach'>Approach</Link>
            </div>
        </>
    )
}

export default Header
