"use client";
import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'


export const Form = () => 
{	
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const template = {
		from_name:  name,
		message: message,
		from_email: email
	}
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, template, process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
			.then((result) => {
				console.log(result)
			}, (error) => {
				console.log(error)
			});
	};
    return (
		<div id="contact-us" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-800">

			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Begin!</h2>
					<div className="dark:text-gray-600">Let us know about your project. We'd love to hear from you!</div>
				</div>
				<img src="doodle.svg" alt="" className="p-6 h-52 md:h-64" />
			</div>
			<form noValidate="" onSubmit={sendEmail} className="space-y-6">
				<div>
					<label htmlFor="name" className="text-sm">Full name</label>
					<input value={name} onChange={(e)=>setName(e.target.value)} id="name" type="text" placeholder="" className="w-full p-3 rounded bg-white" />
				</div>
				<div>
					<label htmlFor="email" className="text-sm">Email</label>
					<input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" type="email" className="w-full p-3 rounded bg-white" />
				</div>
				<div>
					<label htmlFor="message" className="text-sm">Message</label>
					<textarea value={message} onChange={(e)=>setMessage(e.target.value)} id="message" rows="3" className="w-full p-3 rounded bg-white"></textarea>
				</div>
				<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-black text-white">Send Message</button>
			</form>
		</div>
    );
};

export default Form