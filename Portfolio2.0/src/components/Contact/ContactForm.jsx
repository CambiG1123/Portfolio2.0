import React from "react";

const ContactForm = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-black mb-10">
        Contact Me
      </h1>
      <div className="my-8 border-2 shadow-lg rounded-lg p-6 flex bg-white flex-col  ">
        <form className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4 flex flex-col">
          <label htmlFor="name" className="text-cyan-700 font-semibold mr-3">
            Your Name 
          </label>
          <input
            type="text"
            name="fullName"
            
            className="border-2 border-stone-200 rounded-lg p-2"
          />
          </div>
            <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-cyan-700 font-semibold mr-3 ">
            Your Email
          </label>
          <input
            type="text"
            name="email"
            
            className="border-2 border-stone-200 rounded-lg p-2"
          />
          </div>
            <div className="mb-4 flex flex-col md:row-span-10 md:col-span-2">
          <label htmlFor="message" className="text-cyan-700 font-semibold mr-3">
             Your Message <span className="text-stone-400">(optional)</span>
          </label>
          <textarea
            type="text"
            name="message"
            rows="6"
            className="border-2  border-stone-200 rounded-lg p-2"
          />
          </div>
          
        </form>
        <div className="flex justify-center mt-auto">
        <button id="submitBtn" className="text-white bg-cyan-700 hover:bg-white hover:text-cyan-700 hover:scale-110 border rounded-lg p-2 border-cyan-700 transition duration-300 ease-in-out">
          Submit 
          </button>
          </div>
      </div>
    </div>
  );
};

export default ContactForm;
