import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Let's Get In Touch!
      </h1>
      <p className="text-gray-600 mb-6">
        Fill in the form below and I'll get back to you soon.
      </p>

      <form
        action="https://formspree.io/f/mnnnedzo" // Replace YOUR_FORM_ID with the Formspree endpoint ID
        method="POST"
        className="space-y-4"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Write your message here.."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-sky-700 text-white px-6 py-2 rounded-md hover:bg-sky-600 transition-colors"
        >
          GET IN TOUCH
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
