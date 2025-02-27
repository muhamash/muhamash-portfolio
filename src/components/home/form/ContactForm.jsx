"use client"

import { contactForm } from '@/utils/actions/formActions';
import { useActionState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm ()
{
    const [ state, formAction, pending ] = useActionState( contactForm );

    console.log( state );

    useEffect( () =>
    {
        if ( state?.success === true )
        {
            toast.success( "Successfully submitted!" );
        } else if ( state?.success === false )
        {
            toast.error( "Error!!!!!!!" );
        }
    }, [ state?.success ] );

    return (
        <div className="w-full md:w-[500px] h-fit flex flex-col gap-3 text-left items-center md:items-start justify-center bg-black/50 backdrop-blur-md md:p-10 p-3 rounded-md">
            <h2 className="text-[30px] md:text-[25px] font-bold  mb-6 text-violet-300 font-arsenal">Send Message!</h2>
            <form action={formAction} className="space-y-4 w-full font-nunito">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                    <input
                        name='email'
                        type="email"
                        id="email"
                        className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none bg-black/50 backdrop-blur-md"
                        placeholder="your@email.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                    <textarea
                        name='message'
                        id="message"
                        rows="4"
                        className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none bg-black/40 backdrop-blur-md"
                        placeholder="Type your message here..."
                        required
                    ></textarea>
                </div>

                <div className=" bg-gradient-to-r from-violet-500 via-cyan-600 via-sky-400 to-slate-400 p-[1.2px] rounded-lg font-edu">
                    <button disabled={pending} type="submit" className="relative font-semibold text-white bg-gray-900 rounded-lg w-full group py-3">
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></span>
                        <span className="relative z-10">Send message</span>
                    </button>
                </div>
            </form>

            <div className="font-nunito">
                <Toaster
                position="top-right"
                reverseOrder={false}/>
            </div>
        </div>
    );
}