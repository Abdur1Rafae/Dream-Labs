"use client";

import Footer from '@/components/Footer'
import React from 'react'
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const AretePage = () => {
    const servicesData = [
        {
            title: 'Advanced Analytics',
            description: 'With our data-driven insights, you can:',
            list: ['Design targeted lesson plans that cater to individual student needs.', 'Provide differentiated instruction and activities for optimal impact.', 'Offer personalized support and resources for students who require additional assistance.'],
            img: 'AreteQues.jpg'
        },
        {
            title: 'Advanced Analytics',
            description: 'With our data-driven insights, you can:',
            list: ['Design targeted lesson plans that cater to individual student needs.', 'Provide differentiated instruction and activities for optimal impact.', 'Offer personalized support and resources for students who require additional assistance.'],
            img: 'AreteQues.jpg'
        }
    ]

  return (
    <div className="bg-[#F9F9FF] min-h-screen font-[Lora]">
        <img src='/AreteHome.jpg' className='w-full h-96'/>
        <div className='mx-1 md:ml-12 w-full md:w-1/3 text-white absolute top-32 flex flex-col'>
            <h1 className='text-3xl font-bold'>Arete: The Future of Educational Assessments</h1>
            <p className='text-sm'>Arete empowers educators to personalize the learning experience and unlock the potential of every student through adaptive testing and advanced analytics.</p>
            <button className='bg-white px-4 py-2 text-black rounded-md text-xs mt-4 mr-8'>Visit Now</button>
        </div>
        <div className='bg-white md:h-72 w-full flex flex-col p-4 md:px-48 items-center justify-center gap-4 md:gap-12'>
            <h2 className='font-bold text-3xl'>Limitations of Traditional Assessments</h2>
            <p className='text-md text-center'>In today's educational landscape, one-size-fits-all assessments fail to account for the diverse abilities and learning styles of students. Traditional testing methods are time-consuming, lack personalization, and often do not provide actionable insights for educators. This results in a suboptimal learning experience, where the true potential of students remains untapped.</p>
        </div>
        <div className='bg-[#F4F9FD] min-h-80 w-full flex flex-col md:flex-row p-4 md:px-32 items-center gap-16'>
            <div className='max-w-1/2'>
                <h2 className='font-bold text-3xl'>Transforming Assessments with Arete</h2>
                <p className='text-md mt-4'>Arete's in-depth assessments go beyond traditional grading. We provide clear and actionable insights that reveal each student's unique learning profile. We help you identify areas where students excel and pinpoint areas that require additional support.</p>
            </div>
            <div className='w-full h-full self-center self-justify-center items-center hidden md:flex'>
                <img src='/Arete1.jpg' className='relative -top-12 w-64 h-auto'/>
                <img src='/Arete2.jpg' className='relative top-16 -left-32 md:-left-16 w-64 h-auto'/>
            </div>
        </div>
        <div className='bg-gray-50 w-full shadow-md border-y-2 border-black py-8'>
            <h2 className='font-bold text-3xl text-center'>The Impact of Arete</h2>
            <div className='px-8 mt-8 flex flex-col md:flex-row justify-around gap-4'>
                <div className='w-ful md:w-1/5 bg-white shadow-md'>
                    <img src='/Arete4.jpg' className='w-full'/>
                    <div className='p-4'>
                        <h4 className='font-bold text-lg'>Improved Student Outcomes:</h4>
                        <p className='text-xs text-[#6C757D]'>Personalized assessments and actionable feedback help students understand their strengths and weaknesses, leading to improved learning outcomes.</p>
                    </div>
                </div>
                <div className='w-ful md:w-1/5 bg-white shadow-md'>
                    <img src='/Arete5.jpg' className='w-full'/>
                    <div className='p-4'>
                        <h4 className='font-bold text-lg'>Empowered Educators</h4>
                        <p className='text-xs text-[#6C757D]'>With powerful analytics and detailed insights, educators can make informed decisions, customize their teaching strategies, and effectively support each student's learning journey.</p>
                    </div>
                </div>
                <div className='w-ful md:w-1/5 bg-white shadow-md'>
                    <img src='/Arete6.jpg' className='w-full'/>
                    <div className='p-4'>
                        <h4 className='font-bold text-lg'>Enhanced Learning Experience</h4>
                        <p className='text-xs text-[#6C757D]'>By moving beyond one-size-fits-all assessments, Arete creates a more engaging and effective learning environment that caters to the unique needs of every student.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-blue-50 w-full min-h-96 m-auto'>
            <swiper-container modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]} slides-per-view="1" Navigation={true}>
                {
                    servicesData.map((service) => {
                        return <swiper-slide>
                            <div className='w-full h-full px-12'>
                                <div className='w-full h-full rounded-md py-4 px-2 flex flex-col-reverse md:flex-row justify-between gap-12'>
                                    <div className='flex flex-col justify-center'>
                                        <h5 className='font-bold text-4xl mt-2'>{service.title}</h5>
                                        <p className='text-lg mt-4'>{service.description}</p> 
                                        <ul className='list-disc text-lg'>
                                            {
                                                service.list.map((item)=> {
                                                    return <li>
                                                        {item}
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <img src={`/${service.img}`} className='w-full md:w-1/2 h-auto rounded-md'/>
                                </div>
                            </div>
                        </swiper-slide>
                    })
                }
            </swiper-container>
        </div>
        <Footer/>
    </div>
  )
}

export default AretePage