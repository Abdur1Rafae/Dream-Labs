"use client";

import Footer from '@/components/Footer'
import React from 'react'

const AretePage = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
    <section>

      <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full bg-black bg-contain bg-center md:bg-left" style={{ backgroundImage: "url('/arete.bg.webp')" }}>
      <div className='absolute w-full inset-0 bg-black opacity-80 z-0'></div>
      <div className="relative max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h1 className='text-4xl md:text-4xl font-bold font-sans mb-4 text-white '><span className='bg-gradient-to-tr from-[#2C6491] to-[#FFFFFF] text-transparent bg-clip-text'>Areté</span> : Your Ultimate Assessment Solution</h1>
            <p className="text-sm text-gray-100 md:text-base">
            Areté is a state-of-the-art assessment platform designed to revolutionize the education and recruitment sectors. 
            Our platform offers a seamless and efficient way to evaluate skills, knowledge, and competencies.
            </p>
          </div>
          <button className=' border-2 border-white bg-transparent px-3 py-2 text-white rounded-md font-inter mr-2' onClick={() => scrollToSection('arete-contact-form')}>Contact us</button>
        </div>
      </div>
      <div className="relative flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="/arete_home.svg"
          className="object-contain object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
      </div>
      
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#2C6491] uppercase rounded-full bg-teal-accent-400">
            Features
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Power of Areté
        </h2>
        <p className="text-base text-gray-700 md:text-base">
        Arete combines a seamless UI with powerful features to elevate assessment processes for educators, recruiters, and candidates.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full">
              <img src={`/testing.png`} className={`rounded-full border-2 border-grey-100`}/>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Adaptive Testing
              </h6>
              <p className="text-sm text-gray-900">
              Dynamically adjusts the difficulty of questions based on the candidate&apos;s performance, enhancing assessment accuracy and providing a personalized learning experience.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full">
              <img src={`/monitoring.png`} className={`rounded-full border-2 border-grey-100`}/>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Candidate Monitoring
              </h6>
              <p className="text-sm text-gray-900">
              To maintain a secure and focused learning environment, Arete monitors candidate behavior by tracking tab-switching, object detection, and mobile device usage promoting fairness.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full">
              <img src={`/reporting.png`} className={`rounded-full border-2 border-grey-100`}/>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                In-Depth Analytics
              </h6>
              <p className="text-sm text-gray-900">
              Arete provides educators & recruiters with powerful analytical tools, including dashboards and reports, offering insights into candidates performance and enabling tailored instruction based on data-driven decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://www.diyesinternational.edu.in/wp-content/uploads/2024/02/image1-47.webp"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-1408746714.jpg?itok=V5xgkkMh"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://media.licdn.com/dms/image/C4E12AQFdlIQP1MBpWw/article-cover_image-shrink_600_2000/0/1623167384551?e=2147483647&v=beta&t=jJvKbrULXipDxlm9qQyBD2pUKm6z201Ja4QIYXnbKJY"
            alt=""
          />
        </div>
      </div>
      </div>

      <div className="bg-black px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#2C6491] uppercase rounded-full bg-teal-accent-400">
            Walkthrough
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
          How It Works
        </h2>
        <p className="text-base text-gray-100 md:text-base">
        Arete simplifies the assessment process with its user-friendly interface and powerful features. Here&apos;s a step-by-step guide on how our platform works:
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
        <video autoPlay muted loop controls={true} className="w-full h-full object-cover">
                <source src="/FYP.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#2C6491] uppercase rounded-full bg-teal-accent-400">
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


        
        
  )
}

export default AretePage