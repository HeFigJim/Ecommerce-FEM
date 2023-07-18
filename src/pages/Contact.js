import React from "react";

const Contact = () => {
  return (
    <div className="mt-14 md:max-w-2xl md:mx-auto lg:min-w-full lg:mt-20">
      <div className="lg:grid lg:grid-cols-2  ">
        <div className="max-w-2xl lg:pr-2">
          <h2 className=" mb-4 text-center lg:text-left lg:text-5xl">
            CONTACT
          </h2>
          <p className="text-center lg:text-left lg:text-xl">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/06cf88a7-cc01-4772-aad7-9fc80e163d40"
          className="flex flex-col lg:w-full "
        >
          <input
            type="text"
            placeholder="NAME"
            name="name"
            className="bg-transparent border-b-2 border-gray-400 mb-4 pb-5"
            required
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="EMAIL"
            name="email"
            className="bg-transparent border-b-2 border-gray-400 mb-4  pb-5"
            required
            autoComplete="off"
          />

          <textarea
            name="message"
            id="CONTACT"
            placeholder="Message"
            className="bg-transparent border-b-2 border-gray-400 resize-none min-h-[100px] mb-4"
            required
          />
          <button
            type="submit"
            className="w-34 ml-auto mb-24 pb-2 border-b-2 border-neonGreen tracking-widest hover:text-neonGreen"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
