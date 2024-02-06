import { MdOutlineEmail } from "react-icons/md";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ssmf6bg', 'template_jftm8fr', form.current, 'Ncc0K44LWEzTO0w1r')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
  return (
    <section id='contact' className='h-[50vh] mt-10'>
        <div className="flex-center-col mb-10">
            <h5>Get in Touch</h5>
            <h1 className='text-blue-300 text-3xl'>Contact me</h1>
        </div>

        <div className="flex flex-col justify-center sm:flex-row  gap-1">
            <div className="flex-center-col gap-5 sm:bg-sky-950 h-[200px] p-5 bg-black">
                <article className="flex  gap-5">
                    <div className="pt-0">
                        <MdOutlineEmail size={30}/>
                    </div>

                    <div>
                        <h4 className="pb-5">Emails</h4>
                        <h5>Oguntoyek@gmail.com</h5>
                        <h5 className="pb-5">Oguntoye@iastate.edu</h5>
                        <a className="px-3 bg-white text-black font-bold rounded-full"
                        href="mailto:oguntoyek@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </div>

                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}
            className="border-4 border-sky-900 flex flex-col gap-5 w-[500px] bg-opacity-100 p-5 rounded-3xl text-black"
            action="">
                <input className="p-3 rounded-full border-4 border-sky-900  bg-transparent  text-white"
                type="text" name='name' placeholder="Your full name" required/>
                <input className="p-3 rounded-full border-4 border-sky-900  bg-transparent  text-white"
                type="email" name='email' placeholder="Your email" required/>
                <textarea className="p-3 rounded-lg border-4 border-sky-900  bg-transparent  text-white"
                 name="message" id="" rows="10" placeholder="Your Message"></textarea>
                <button className="p-3 bg-sky-900 rounded-full text-white font-bold" type="submit">submit</button>
            </form>
        </div>



  </section>
  )
}

export default Contact
