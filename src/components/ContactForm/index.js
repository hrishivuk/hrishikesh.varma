import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "", // Added lastName field
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q7wj86d",
        "template_537sp4p",
        e.target,
        "3bzZRvJ14gyTLnw4G"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Optionally, reset form after successful submission
          setFormData({ name: "", lastName: "", email: "", message: "" }); // Reset all fields
        },
        (error) => {
          console.error(error.text);
          // Handle error
        }
      );
  };

  return (
    <div className="px-12 py-8 max-w-6xl flex justify-center gap-8 bg-text/70 rounded-3xl" id="contact">
      <h1 className="text-5xl text-whitePrimary font-semibold mb-4">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit} className="">
        <div className="flex gap-4 mb-4 rounded-md">
          <div className="text-whitePrimary text-xl flex gap-3 bg-blackPrimary relative p-3 rounded-md flex-1">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First Name"
              className="bg-transparent w-full focus-within:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-whitePrimary text-xl flex gap-3 bg-blackPrimary relative p-3 rounded-md flex-1">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="bg-transparent w-full focus-within:outline-none"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <div className="text-whitePrimary text-xl flex gap-3 bg-blackPrimary relative p-3 rounded-md">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-transparent w-full focus-within:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-4 mt-4">
          <div className="text-whitePrimary text-xl flex gap-3 bg-blackPrimary relative p-3 rounded-md flex-1">
            <textarea
              id="message"
              name="message"
              placeholder="Enter your Message"
              className="bg-transparent w-full border-none focus-within:outline-none"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex justify-end items-center mt-4">
          <button
            className="bg-whitePrimary text-blackPrimary px-4 py-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
