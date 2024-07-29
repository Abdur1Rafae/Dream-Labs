import React from 'react'


export const Form = () => 
{
    return (
		<div id="contact-us" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-800">

			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Begin!</h2>
					<div className="dark:text-gray-600">Let us know about your project. We'd love to hear from you!</div>
				</div>
				<img src="doodle.svg" alt="" className="p-6 h-52 md:h-64" />
			</div>
			<form noValidate="" className="space-y-6">
				<div>
					<label htmlFor="name" className="text-sm">Full name</label>
					<input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-white" />
				</div>
				<div>
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" className="w-full p-3 rounded bg-white" />
				</div>
				<div>
					<label htmlFor="message" className="text-sm">Message</label>
					<textarea id="message" rows="3" className="w-full p-3 rounded bg-white"></textarea>
				</div>
				<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-black text-white">Send Message</button>
			</form>
		</div>
    );
};

export default Form