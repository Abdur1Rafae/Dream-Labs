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
            img: 'AreteQues.png'
        },
        {
            title: 'Advanced Analytics',
            description: 'With our data-driven insights, you can:',
            list: ['Design targeted lesson plans that cater to individual student needs.', 'Provide differentiated instruction and activities for optimal impact.', 'Offer personalized support and resources for students who require additional assistance.'],
            img: 'AreteQues.png'
        }
    ]

  return (
<<<<<<< Updated upstream
    <div className="bg-[#F9F9FF] min-h-screen font-[Lora]">
        <img src='/AreteHome.jpg' className='w-full h-96 brightness-50'/>
        <div className='mx-1 md:ml-12 w-full md:w-1/3 text-white absolute top-32 flex flex-col'>
            <h1 className='text-3xl font-bold'>Arete: The Future of Educational Assessments</h1>
            <p className='text-sm'>Arete empowers educators to personalize the learning experience and unlock the potential of every student through adaptive testing and advanced analytics.</p>
            <button className='bg-white px-4 py-2 text-black rounded-md text-xs mt-4 w-24' onClick={()=>{window.location.href = 'https://www.risewitharete.online';}}>Visit Website</button>
        </div>
        <div className='bg-white md:h-72 w-full flex flex-col p-4 lg:px-48 items-center justify-center gap-4 md:gap-12'>
            <h2 className='font-bold text-3xl'>Limitations of Traditional Assessments</h2>
            <p className='text-md text-center'>In today&apos;s educational landscape, one-size-fits-all assessments fail to account for the diverse abilities and learning styles of students. Traditional testing methods are time-consuming, lack personalization, and often do not provide actionable insights for educators. This results in a suboptimal learning experience, where the true potential of students remains untapped.</p>
=======
    <section>

      <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-10 sm:max-w-xl md:max-w-full bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-8 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl">
          <h1 className='max-w-lg mb-6 text-3xl font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-sm '><span className='font-bold bg-gradient-to-tr from-[#2C6491] to-[#FFFFFF] text-transparent bg-clip-text'>Areté</span> : Your Ultimate Assessment Solution</h1>
            <p className="text-base text-gray-100 md:text-lg max-w-sm">
            Areté is a state-of-the-art assessment platform designed to revolutionize the education and recruitment sectors. 
            Our platform offers a seamless and efficient way to evaluate skills, knowledge, and competencies.
            </p>
          {/* <button className=' mt-4 border-2 border-white bg-transparent px-3 py-2 text-white rounded-md font-inter mr-2' onClick={() => scrollToSection('arete-contact-form')}>Contact us</button> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-2/3 lg:absolute lg:justify-end lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="/arete_home.svg"
          className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl shadown-gray-100 lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
    </div>
      
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-slate-900 to-slate-700">
            Features
          </p>
>>>>>>> Stashed changes
        </div>
        <div className='bg-[#F4F9FD] min-h-80 w-full flex flex-col md:flex-row p-4 lg:px-32 items-center gap-8 md:gap-16'>
            <div className='max-w-1/2'>
                <h2 className='font-bold text-3xl'>Transforming Assessments with Arete</h2>
                <p className='text-md mt-4'>Arete&apos;s in-depth assessments go beyond traditional grading. We provide clear and actionable insights that reveal each student&apos;s unique learning profile. We help you identify areas where students excel and pinpoint areas that require additional support.</p>
            </div>
            <div className='w-full h-full self-center flex  self-justify-center items-center'>
                <img src='/AreteImgs.png' className=''/>
            </div>
        </div>
        <div className='bg-gray-50 w-full shadow-md border-y-2 border-black py-8'>
            <h2 className='font-bold text-3xl text-center'>The Impact of Arete</h2>
            <div className='px-8 mt-8 flex flex-col md:flex-row justify-around gap-4'>
                <div className='w-full md:w-2/5 lg:w-1/5 bg-white shadow-md'>
                    <img src='/Arete4.jpg' className='w-full'/>
                    <div className='p-4'>
                        <h4 className='font-bold text-lg'>Improved Student Outcomes</h4>
                        <p className='text-xs text-[#6C757D]'>Personalized assessments and actionable feedback help students understand their strengths and weaknesses, leading to improved learning outcomes.</p>
                    </div>
                </div>
                <div className='w-full md:w-2/5 lg:w-1/5 bg-white shadow-md'>
                    <img src='/Arete5.jpg' className='w-full'/>
                    <div className='p-4'>
                        <h4 className='font-bold text-lg'>Empowered Educators</h4>
                        <p className='text-xs text-[#6C757D]'>With powerful analytics and detailed insights, educators can make informed decisions, customize their teaching strategies, and effectively support each student&apos;s learning journey.</p>
                    </div>
                </div>
                <div className='w-full md:w-2/5 lg:w-1/5 bg-white shadow-md'>
                    <img src='/Arete6.jpg' className='w-full'/>
                    <div className='p-4'>
                        <h4 className='font-bold text-lg'>Enhanced Learning Experience</h4>
                        <p className='text-xs text-[#6C757D]'>By moving beyond one-size-fits-all assessments, Arete creates a more engaging and effective learning environment that caters to the unique needs of every student.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-blue-50 w-full m-auto'>
            <swiper-container modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]} slides-per-view="1" Navigation={true}>
                {
                    servicesData.map((service, index) => {
                        return <swiper-slide key={index}>
                            <div className='w-full h-full px-12'>
                                <div className='w-full h-full rounded-md py-4 px-2 flex flex-col-reverse md:flex-row justify-center gap-12'>
                                    <div className='flex flex-col justify-center'>
                                        <h5 className='font-bold text-4xl mt-2'>{service.title}</h5>
                                        <p className='text-lg mt-4'>{service.description}</p> 
                                        <ul className='list-disc text-lg ml-4'>
                                            {
                                                service.list.map((item, index)=> {
                                                    return <li key={index}>
                                                        {item}
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <img src={`/${service.img}`} className='w-auto max-h-64 rounded-md self-center'/>
                                </div>
                            </div>
                        </swiper-slide>
                    })
                }
            </swiper-container>
        </div>
<<<<<<< Updated upstream
        <Footer/>
    </div>
=======
      </div>
      </div>

      <div className="bg-black to-slate-700 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-slate-900 to-slate-700">
            Walkthrough
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
          How It Works
        </h2>
        <p className="text-base text-gray-100 md:text-base">
        Arete simplifies the assessment process with its user-friendly interface and powerful features. Here's a step-by-step guide on how our platform works:
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="w-full transition-shadow duration-300 hover:shadow-xl">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/OLAgIt5cLxA?si=a3IkxCFA5O-lSaeD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='true'></iframe>
        </div>
      </div>
      </div>

      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-slate-900 to-slate-700">
            Benefits
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Why Choose Us
        </h2>
        <p className="text-sm text-gray-700 md:text-base">
        Arete is a comprehensive solution tailored to meet diverse needs, making it the ideal choice for your assessments.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
            <img src={`/teacher.png`} className={`rounded-full border-2 border-grey-100`}/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Educators</h6>
            <p className="mb-3 text-sm text-gray-900">
            Enhance the learning experience with personalized feedback, track student progress effectively, and improve overall educational outcomes.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
            <img src={`/recruiter.png`} className={`rounded-full border-2 border-grey-100`}/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Recruiters</h6>
            <p className="mb-3 text-sm text-gray-900">
            Quickly and accurately identify top talent, streamline your hiring process, and reduce time-to-hire with our precise assessment tools.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
            <img src={`/candidate.png`} className={`rounded-full border-2 border-grey-100`}/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Students & Candidates</h6>
            <p className="mb-3 text-sm text-gray-900">
            Experience a fair and unbiased evaluation process that accurately reflects your abilities and helps you shine.
            </p>
          </div>
        </div>
      </div>
      </div>

      <div id="arete-contact-form" class="flex items-center justify-center min-h-screen p-4">
      <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
    <form>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="name" class="text-sm">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label for="email" class="text-sm">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="phone" class="text-sm">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label for="company" class="text-sm">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>
      <div class="mb-4">
        <label for="message" class="text-sm">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="w-full bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-[#032741] focus:outline-none focus:ring-2 focus:ring-black"
        >
          Submit
        </button>
      </div>
    </form>
      </div>
      </div>

      <Footer/>


    </section>


        
        
>>>>>>> Stashed changes
  )
}

export default AretePage