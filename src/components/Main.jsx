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
            title: 'ARETÉ - The Future of Assessments',
            description: 'Arete is a next-generation assessment platform that simplifies evaluations with a user-friendly interface and powerful analytics, providing accurate insights for education and recruitment.',
            onClick: ()=>{router.push('/solutions/arete')},
            img: 'Arete_Logo.png'
        }
    ]

    const approachData = [
        {
            title: 'UX Driven Engineering',
            description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
            img: 'uxdriven.png',
            bg: 'bg-gradient-to-tr from-[#29272E] to-[#27272E]'
        },
        {
            title: 'Scalable Integration',
            description: 'Easily integrate our solutions with your current infrastructure. Our scalable integration options ensure smooth and efficient connectivity across all your platforms.',
            img: 'scalable.png',
            bg: 'bg-gradient-to-tr from-[#68DBF2] to-[#509CF5]'
        },
        {
            title: 'Secure Solutions',
            description: 'Protect your business with state-of-the-art security measures. Our solutions include data encryption, threat detection, and compliance management to safeguard your assets.',
            img: 'secure.png',
            bg: 'bg-gradient-to-tr from-[#67E9F1] to-[#24E795]'
        },
        {
            title: 'Comprehensive Support',
            description: 'Access dedicated support for any issues or questions you may have. Our team provides prompt and effective assistance to ensure your operations run smoothly.',
            img: 'support.png',
            bg: 'bg-gradient-to-tr from-[#FFEF5E] to-[#F7936F]'
        }
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
            img: 'mobiledev.png'
        },
        {
            title: 'UI/UX Design',
            description: 'Design that captivates and engages. Our UI/UX experts craft interfaces that are both aesthetically pleasing and user-centric.',
            img: 'uiux.png'
        },
        {
            title: 'Consulting & Strategy',
            description: 'Navigate the digital landscape with confidence. Our consulting services help you devise strategies that drive innovation and business success.',
            img: 'consult.png'
        }
    ]

  return (
    
    <section>
        
        <div className='relative h-screen w-screen bg-black bg-contain md:bg-cover md:bg-center' style={{ backgroundImage: "url('/bg.jpg')" }}>
            <div className='absolute w-full md:w-1/2 inset-0 bg-black opacity-70 z-0'></div>
            <div className="relative z-10 w-full h-full md:w-1/2 flex flex-col items-left justify-center px-8">
                <h1 className='text-4xl md:text-4xl font-bold font-serif mb-4 text-white '>Transforming <span className='bg-gradient-to-tr from-[#F7666F] to-[#57007B] text-transparent bg-clip-text'>Ideas</span> into Business <span className='bg-gradient-to-tr from-[#F76660] to-[#57007B] text-transparent bg-clip-text'>Success</span></h1>
                <p className='text-xl font-serif text-white'>We help you stay ahead in rapidly evolving digital landscape with innovative software solutions, that drive business efficiency.</p>
            </div>
        </div>
        
        <div id="about" className='bg-white flex justify-center p-8'>
            <div className='flex flex-col-reverse md:flex-row justify-around items-center px-4 md:px-16'> 
                <Image src={'/image.png'} width={350} height={350} className='rounded-xl mt-6'/>
                <div className='w-full md:w-1/2 max-w-screen-md mx-auto'>
                    <h3 className='font-sans font-bold text-2xl'>Your Trusted <span className='bg-gradient-custom text-transparent bg-clip-text'>Partner</span> in Software Development</h3> 
                    <p className='text-sm mt-4 md:text-justify'>GenLabs is a premier software house based in Pakistan, dedicated to delivering innovative solutions that propel business growth. We collaborate with clients across various industries to understand their unique goals and challenges, crafting bespoke solutions that yield measurable results.</p>
                </div>
            </div>
        </div>

        <div id="services" className='w-full bg-transparent flex flex-col items-center justify-center p-8'>
            <hr className='w-20 h-1 bg-gradient-custom rounded-md'/>
            <h3 className='font-sans font-bold text-xl text-black mt-4 text-center mb-4'>OUR <span className='bg-gradient-custom text-transparent bg-clip-text'>SERVICES</span></h3>
            {/* <h2 className="text-sm mb-8 max-w-screen-sm px-4 text-center ">With a deep understanding of industry trends and cutting-edge technologies, we provide a comprehensive suite of services, designed to drive innovation and fuel growth.</h2> */}
            <OwlCarousel className='owl-theme overflow-hidden' margin={25}
                responsive={{
                    0: {
                        items: 1,
                        nav: true,
                        center: true
                    },
                    768: {
                        items: 2,
                        nav: true
                    },
                    900: {
                        items: 3,
                        nav: true
                    },
                    1025: {
                        items: 3,
                        nav: true,
                    }
                }}>
                {
                    servicesData.map((service, index) => {
                        return <div key={index} className="border-2 border-gradient-custom flex justify-center items-center">
                        <div className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-black bg-center text-gray-800 shadow-md overflow-hidden" style={{ backgroundImage: `url(/${service.img})` }} >
                        <div className='absolute w-full inset-0 bg-black opacity-50 z-0'></div>
                          <div className="flex justify-between items-center ml-4 pr-8">
                          </div>
                          <div className="z-10 bg-white shadow-md rounded-r-xl p-2 flex flex-col mr-4 mb-8">
                            <h3 className="text-lg font-bold pb-1">{service.title}</h3>
                            <p className="text-gray-500 text-sm">{service.description}</p>
                          </div>
                        </div>
                      </div>
                      
                        // <div className='p-4' key={index}>
                        //         <div className='bg-gradient-custom w-full h-60 p-[2px] rounded-md'>
                        //             <div className='bg-white w-full h-full rounded-md py-4 px-2'>
                        //                 <div className='bg-gradient-custom w-12 to-[#57007B] p-[1px] rounded-full'> 
                        //                     <img src={`/${service.img}`} className='w-12 h-12 rounded-full bg-white p-2'/>
                        //                 </div>
                        //                 <h5 className='font-medium mt-2'>{service.title}</h5>
                        //                 <p className='text-sm mt-4 text-[#4A5568]'>{service.description}</p>
                        //             </div>
                        //         </div>
                        //     </div>
                    })
                }
            </OwlCarousel>
        </div>

        <div className='relative w-screen h-[60vh] bg-black'>
            <video autoPlay muted loop controls={true} className="absolute top-0 left-0 w-full h-full object-cover">
                <source src="/awareness.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <div id="latest-work" className='bg-transparent w-full flex flex-col items-center justify-center p-8'>
            <hr className='w-20 h-1 bg-gradient-custom rounded-md'/>
            <h2 className='font-sans font-bold text-xl text-black mt-4 text-center mb-4'><span className='font-bold bg-gradient-custom text-transparent bg-clip-text'>LATEST</span> WORK</h2>
            {
                solutionsData.map((solution, index) => {
                    return <SolutionsCard key={index} img={solution.img} title={solution.title} description={solution.description} onClick={solution.onClick}/>
                })
            }
        </div>

        <div id="why-us" className='bg-white w-full flex flex-col gap-4 items-center justify-center p-8'>
            <hr className='w-20 h-1 bg-gradient-custom rounded-md'/>
            <h2 className='text-xl font-bold'>WHY <span className='bg-gradient-custom text-transparent bg-clip-text'>US</span></h2>
            <div className='lg:px-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    
                    {
                        approachData.map((apr, index) => {
                            return <Skillbox key={index}  img={apr.img} title={apr.title} description={apr.description} backgr={apr.bg}/>
                        })
                    }
                        
                </div>
            </div>
        </div>

        <div id="approach" className='w-full bg-transparent flex flex-col items-center justify-center p-8'>
        <hr className='w-20 h-1 bg-gradient-custom rounded-md'/>
            <h3 className='font-sans font-bold text-xl text-black mt-4 text-center mb-4'>OUR <span className='bg-gradient-custom text-transparent bg-clip-text'>DESIGN &</span> <span className='font-medium'> DEVELOPMENT</span> APPROACH</h3>
            {/* <h2 className="text-sm mb-8 max-w-screen-sm px-4 text-center "> We transform your vision into reality through a streamlined and collaborative process. From initial consultation to ongoing maintenance, we ensure every step is meticulously executed to deliver exceptional results.</h2> */}
            <div className="container">
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                    {/* Consultation */}
                    <div className="flex flex-row-reverse md:contents">
                    <div className="bg-white col-start-2 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                            <h5 className='text-sm font-bold font-mono'>Consultation</h5>
                            <p className='text-xs mt-1 text-gray-700'>After you send us an email, our team reviews the information and responds within 1-2 business days. We will schedule a meeting to understand your project and deliverables</p>
                    </div>
                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-10 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-tr from-[#67E9F1] to-[#24E795] pointer-events-none"></div>
                        </div>
                        <div className="w-10 h-10 absolute top-1/2 -mt-3 ">
                        <img src={`consultation.png`} className={`rounded-full p-1 bg-gradient-to-tr from-[#67E9F1] to-[#24E795]`}/>
                        </div>
                    </div>
                    </div>
                    {/* Scope Definition */}
                    <div className="flex md:contents">
                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div className="h-full w-10 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-tr from-[#29272E] to-[#27272E] pointer-events-none"></div>
                        </div>
                        <div className="w-10 h-10 absolute top-1/2 -mt-3 ">
                        <img src={`scope.png`} className={`rounded-full p-1 bg-gradient-to-tr from-[#29272E] to-[#27272E]`}/>
                        </div>
                    </div>
                    <div className="bg-white col-start-6 col-end-9 p-4 rounded-xl my-4 mr-auto shadow-md">
                        <h3 className="text-sm font-bold font-mono">Scope Definition</h3>
                        <p className="text-xs mt-1 text-gray-700">
                        We define the project scope, outlining key features and requirements to ensure clarity and alignment with your goals.
                        </p>
                    </div>
                    </div>
                    {/* UI/UX Design */}
                    <div className="flex flex-row-reverse md:contents">
                    <div className="bg-white col-start-2 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                            <h5 className='text-sm font-bold font-mono'>UI/UX Design</h5>
                            <p className='text-xs mt-1 text-gray-700'>Our design team creates intuitive and engaging user interfaces, focusing on user experience and aesthetics.

</p>
                    </div>
                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-10 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-tr from-[#FF92AE] to-[#FF3D9A] pointer-events-none"></div>
                        </div>
                        <div className="w-10 h-10 absolute top-1/2 -mt-3 ">
                        <img src={`ux.png`} className={`rounded-full p-1 bg-gradient-to-tr from-[#FF92AE] to-[#FF3D9A]`}/>
                        </div>
                    </div>
                    </div>
                    {/* Development*/}
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-10 flex items-center justify-center">
                            <div className="h-full w-1 bg-gradient-to-tr from-[#68DBF2] to-[#509CF5] pointer-events-none"></div>
                            </div>
                            <div className="w-10 h-10 absolute top-1/2 -mt-3 ">
                            <img src={`Picture11.png`} className={`rounded-full p-1 bg-gradient-to-tr from-[#68DBF2] to-[#509CF5]`}/>
                            </div>
                        </div>
                        <div className="bg-white col-start-6 col-end-9 p-4 rounded-xl my-4 mr-auto shadow-md">
                            <h3 className="text-sm font-bold font-mono">Development</h3>
                            <p className="text-xs mt-1 text-gray-700">
                            We develop the project using the latest technologies, ensuring high performance and scalability.
                            </p>
                        </div>
                    </div>
                    {/* Feedback and Revisions */}
                    <div className="flex flex-row-reverse md:contents">
                        <div className="bg-white col-start-2 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                            <h5 className='text-sm font-bold font-mono'>Feedback and Revisions</h5>
                            <p className='text-xs mt-1 text-gray-700'>We share progress and gather your feedback, making necessary revisions to ensure the project meets your expectations.
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-10 flex items-center justify-center">
                            <div className="h-full w-1 bg-gradient-custom pointer-events-none"></div>
                            </div>
                            <div className="w-10 h-10 absolute top-1/2 -mt-3 ">
                            <img src={`revision.png`} className={`rounded-full p-1 bg-gradient-custom`}/>
                            </div>
                        </div>
                    </div>
                    {/* Maintenance */}
                    <div className="flex md:contents">
                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div className="h-full w-10 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-tr from-[#FFEF5E] to-[#F7936F] pointer-events-none"></div>
                        </div>
                        <div className="w-10 h-10 absolute top-1/2 -mt-3 ">
                        <img src={`Picture14.png`} className={`rounded-full p-1 bg-gradient-to-tr from-[#FFEF5E] to-[#F7936F]`}/>
                        </div>
                    </div>
                    <div className="bg-white col-start-6 col-end-9 p-4 rounded-xl my-4 mr-auto shadow-md">
                        <h3 className="text-sm font-bold font-mono">Maintenance</h3>
                        <p className="text-xs mt-1 text-gray-700">After project completion, we provide ongoing maintenance and support to ensure everything runs smoothly.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

const Skillbox = ({img, title, description, backgr}) => {
    return (
                <div
                    className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-lg mx-auto border border-gradient-custom bg-white">
                    <div className="w-full md:w-1/3 md:h-1/4 bg-white grid place-items-center">
                        <img src={`/${img}`} alt="..." className="rounded-xl" />
                    </div>
                        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-1 p-3">
                            <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
                            <p className="text-gray-500 text-xs">{description}</p>
                        </div>
                </div>

    )
}

export default Main