"use client";

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }
  
  import dynamic from "next/dynamic";
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

import SolutionsCard from './SolutionsCard';

const Main = () => {
    const router= useRouter()
    
    const solutionsData = [
        {
            title: 'Arete - Elearning & Reporting Web App',
            description: 'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
            onClick: ()=>{router.push('/solutions/arete')},
            img: 'pic3.jpg'
        }
    ]

    const approachData = [
        {
            title: 'UX Driven Engineering',
            description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
            img: 'Picture16.png',
            bg: 'bg-gradient-to-tr from-[#29272E] to-[#27272E]'
        },
        {
            title: 'Developing Shared Understanding',
            description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
            img: 'Picture11.png',
            bg: 'bg-gradient-to-tr from-[#68DBF2] to-[#509CF5]'
        },
        {
            title: 'Proven Experience and Expertise',
            description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
            img: 'Picture12.png',
            bg: 'bg-gradient-to-tr from-[#FF92AE] to-[#FF3D9A]'
        },
        {
            title: 'Security & Intellectual Property (IP)',
            description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
            img: 'Picture13.png',
            bg: 'bg-gradient-to-tr from-[#67E9F1] to-[#24E795]'
        },
        {
            title: 'Code Reviews',
            description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
            img: 'Picture14.png',
            bg: 'bg-gradient-to-tr from-[#FFEF5E] to-[#F7936F]'
        },
        {
            title: 'Quality Assurance & Testing',
            description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
            img: 'Picture15.png',
            bg: 'bg-gradient-to-tr from-[#F76680] to-[#57007B]'
        },
    ]

    const servicesData = [
        {
            title: 'Web Development',
            description: 'Create a compelling online presence with our web development services. We build responsive, user-friendly websites that reflect your brand’s identity.',
            img: 'webdev.png'
        },
        {
            title: 'Mobile App Development',
            description: 'Engage your audience with intuitive and powerful mobile applications. We develop apps that deliver seamless user experiences on all platforms.',
            img: 'MobApp.png'
        },
        {
            title: 'UI/UX Design',
            description: 'Design that captivates and engages. Our UI/UX experts craft interfaces that are both aesthetically pleasing and user-centric.',
            img: 'UIUX.png'
        },
        {
            title: 'Consulting & Strategy',
            description: 'Navigate the digital landscape with confidence. Our consulting services help you devise strategies that drive innovation and business success.',
            img: 'ConStrat.png'
        }
    ]

  return (
    <section>
        <div className='w-full flex flex-col-reverse md:flex-row text-wrap px-8 md:px-24 justify-between mt-4 bg-white overflow-x-hidden p-4'>
            <div className='flex flex-col gap-8 h-full self-center'>
                <h1 className='text-4xl'>Ready to turn your <span className='font-bold text-[#EF8354]'>Ideas</span> into <span className='font-extrabold bg-gradient-to-tr from-[#F7666F] to-[#57007B] text-transparent bg-clip-text '>Reality?</span></h1>
                <p>We help businesses like yours create software that drives results</p>
                <button className='bg-[#3D63EA] text-white px-4 py-4 shadow-lg w-40 text-xs rounded-md font-medium'>Let&apos;s get started!</button>
            </div>
            <img src='/navPic.png'className='h-80 w-80 bg-white' alt='Image display'/>
        </div>
        <div className='bg-transparent mt-12 mb-12'>
            <h3 className='font-bold text-xl text-center mb-8'>Services we offer</h3>
            <OwlCarousel className='owl-theme' margin={25}
                responsive={{
                    0: {
                        items: 1,
                        nav: true,
                        center: true
                    },
                    768: {
                        items: 2,
                        nav: true,
                        margin: 25
                    },
                    900: {
                        items: 3,
                        nav: true,
                        maergin: 25
                    },
                    1025: {
                        items: 4,
                    }
                }}>
                {
                    servicesData.map((service, index) => {
                        return <div className='w-full sm:w-80 h-72' key={index}>
                                <div className='bg-gradient-to-tr from-[#F7666F] to-[#57007B] w-full h-60 p-[2px] rounded-md'>
                                    <div className='bg-white w-full h-full rounded-md py-4 px-2'>
                                        <div className='bg-gradient-to-tr from-[#F7666F] w-12 to-[#57007B] p-[1px] rounded-full'> 
                                            <img src={`/${service.img}`} className='w-12 h-12 rounded-full bg-white p-2'/>
                                        </div>
                                        <h5 className='font-medium mt-2'>{service.title}</h5>
                                        <p className='text-sm mt-4 text-[#4A5568]'>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                    })
                }
            </OwlCarousel>
        </div>
        <div className='bg-white mb-12 flex justify-center items-center p-4'>
            <div className='flex flex-col-reverse md:flex-row justify-around items-center px-4 md:px-16'>
                <div className='w-full md:w-1/2'>
                    <h3 className='font-bold text-2xl mt-8'>Innovative Solutions for a Digital World</h3> 
                    <p className='text-xs text-[#718096] mt-4'>At SynergyWorks, we believe in the power of collaboration and innovation. Our mission is to transform your business ideas into reality through <span className='bg-gradient-to-tr from-[#F7666F] to-[#57007B] text-transparent bg-clip-text'>cutting-edge</span> software solutions. With a team of passionate developers, designers, and strategists, we are committed to driving your business efficiency and growth.</p>
                </div>
                <Image src={'/pic2.jpg'} width={350} height={350} className='rounded-xl'/>
            </div>
        </div>
        <div className='w-full h-full flex flex-col gap-4 items-center justify-center mb-12'>
            <hr className='w-20 h-2 bg-gradient-to-tr from-[#F7666F] to-[#57007B] rounded-md'/>
            <h2 className='text-xl'>Our recent <span className='font-bold'>Solutions</span></h2>
            {
                solutionsData.map((solution, index) => {
                    return <SolutionsCard key={index} img={solution.img} title={solution.title} description={solution.description} onClick={solution.onClick}/>
                })
            }
        </div>
        <div className='w-full h-full flex flex-col gap-4 items-center justify-center bg-white mb-12 py-8'>
            <hr className='w-20 h-2 bg-gradient-to-tr from-[#F7666F] to-[#57007B] rounded-md'/>
            <h2 className='text-xl'>Way of builidng <span className='font-bold'>Great Products</span></h2>
            <div className='w-10/12 flex flex-col-reverse md:flex-row justify-around mt-8 items-center'>
                <div className='md:w-1/2 w-full'>
                    <h3 className='font-bold text-lg'>Collaborative Approach</h3>
                    <ul className='list-disc text-sm'>
                        <li className='mt-4'>
                            <span className='font-bold'>In-Depth Consultation:</span> We start by understanding your business goals, challenges, and requirements.
                        </li>
                        <li className='mt-4'>
                            <span className='font-bold'>Regular Feedback Loops:</span> Through continuous communication and feedback, we ensure that the project stays on track and meets your expectations.
                        </li>
                        <li className='mt-4'>
                            <span className='font-bold'>Cross-Functional Loops:</span> Our diverse team of developers, designers, and strategists brings together various perspectives and expertise to create holistic solutions.
                        </li>
                    </ul>
                </div>
                <Image src={'/collab.jpg'} width={300} height={300} className='rounded-xl'/>
            </div>
            <div className='w-10/12 flex flex-col-reverse md:flex-row justify-around mt-8 items-center'>
                <Image src={'/working.png'} width={300} height={300} className='rounded-xl'/>
                <div className='md:w-1/2 w-full'>
                    <h3 className='font-bold text-lg'>Build the right team to scale</h3>
                    <p className='text-sm'>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
                    <p className='mt-4'>Our <span className='bg-gradient-to-tr from-[#F7666F] to-[#57007B] text-transparent bg-clip-text'>delivery model</span> helps you cut costs and deliver within budget.</p>
                    <div className='bg-gradient-to-tr from-[#F7666F] to-[#57007B] mt-4'>
                        <div className='ml-1 bg-white p-2 text-xs'>
                            <em className='bg-gradient-to-tr from-[#F7666F] to-[#57007B] text-transparent bg-clip-text'>&quot;Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules&quot;</em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-full flex flex-col gap-4 items-center justify-center mb-12'>
            <hr className='w-20 h-2 bg-gradient-to-tr from-[#F7666F] to-[#57007B] rounded-md'/>
            <h2 className='text-xl'>Our <span className='font-bold'>Design & Development</span> approach</h2>
            <div className='px-8 lg:px-32'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        approachData.map((apr, index) => {
                            return <Skillbox key={index}  img={apr.img} title={apr.title} description={apr.description} backgr={apr.bg}/>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

const Skillbox = ({img, title, description, backgr}) => {
    return (
        <div className={`bg-white flex px-4 py-6 lg:py-12 shadow-md gap-4 items-start`}>
            <img src={`/${img}`} className={`w-12 h-12 rounded-md p-2 ${backgr}`}/>
            <div>
                <h5 className='text-lg font-medium'>{title}</h5>
                <p className='mt-2 text-xs'>{description}</p>
            </div>
        </div>
    )
}

export default Main