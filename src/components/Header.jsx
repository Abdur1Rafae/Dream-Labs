"use client";

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image';
import { FaBars } from "react-icons/fa6";



const Header = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const router = useRouter()
    const [display, setDisplay] = useState(false)
    return (
        <>
            <header className='h-12 md:static md:top-0 w-full z-20 flex justify-between items-center text-xs font-semibold text-white bg-[#032741]'>
                <button className='md:hidden' onClick={() => setDisplay(prev => !prev)}>
                    <FaBars size={20} className='ml-2' />
                </button>
                <div className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={35} height={35} />
                <span className="ml-2 text-xl font-bold">GenLabs</span>
                 </div>
                <div className='hidden md:flex gap-8'>
                    <Link href='#about'>About</Link>
                    <Link href='#services'>Services</Link>
                    <Link href='#latest-work'>Latest Work</Link>
                    <Link href='#why-us'>Why Us</Link>
                    <Link href='#approach'>Approach</Link>
                </div>
                <button className=' border-2 border-white bg-transparent px-3 py-2 text-white rounded-md font-inter mr-2' onClick={() => scrollToSection('contact-us')}>Contact us</button>
            </header>
            <div className={`md:hidden items-center font-medium flex flex-col gap-2 transition-max-height duration-300 ease-linear overflow-hidden ${display ? 'mt-2 mb-2 max-h' : 'max-h-0'}`}>
                    <Link className='text-sm px-4 py-2 border-b border-gray-200' href='#about'>About</Link>
                    <Link className='text-sm px-4 py-2 border-b border-gray-200' href='#services'>Services</Link>
                    <Link className='text-sm px-4 py-2 border-b border-gray-200' href='#latest-work'>Latest Work</Link>
                    <Link className='text-sm px-4 py-2 border-b border-gray-200' href='#why-us'>Why Us</Link>
                    <Link className='text-sm px-4 py-2 ' href='#approach'>Approach</Link>
            </div>

            
        </>
    )
}

export default Header