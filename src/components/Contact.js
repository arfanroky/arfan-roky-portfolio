import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2qi5s5d',
        'template_fhpiufx',
        form.current,
        'vSYLq3IqIep_lqsTT'
      )
      .then(
        (result) => {
          toast.success('Your Message sent');
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="p-4 md:h-[90vh] my-12">
      <div className="text-center">
        <p className="font-medium mb-8 text-gray-400 my-4 border-b-4 border-cyan-300 inline-block tracking-widest uppercase text-3xl">
          Contact
        </p>
      </div>
      <div className="flex justify-center shadow-2xl shadow-cyan-400">
    
        <form className="rounded-2xl p-4 w-[420px] md:mx-0 mx-auto"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className=" mt-4">
            <label className="font-medium text-cyan-400 capitalize ">Name:</label>{' '}
            <br />
            <input
              className="py-3 pl-3 pr-8 border shadow-inner rounded outline-none w-full bg-transparent text-gray-300"
              type="text"
              required
              name="user_name"
              autoComplete="off"
            />{' '}
          </div>

          <div className="mt-4">
            <label className="font-medium text-cyan-400 capitalize ">Email</label>{' '}
            <br />
            <input
              className="py-3 pl-2 pr-8 border shadow-inner rounded outline-none w-full bg-transparent text-gray-300"
              type="email"
              name="user_email"
              autoComplete="off"
            />{' '}
          </div>

          <div className=" mt-4">
            <label className="font-medium text-cyan-400 capitalize ">Message:</label>
            <textarea
              className="py-3 pl-2 pr-8 border shadow-inner rounded outline-none w-full resize-none bg-transparent text-gray-300"
              name="message"
              autoComplete="off"
            />{' '}
          </div>

        <div className='text-right mt-12'>
        <input
            className="py-4 px-8 border w-full hover:bg-cyan-700 bg-cyan-500 text-white transition rounded font-thin text-xl mt-6"
            style={{ letterSpacing: '6px' }}
            type="submit"
            value="Send"
          />
        </div>
        </form>
      
      </div>
    </section>
  );
};

export default Contact;
