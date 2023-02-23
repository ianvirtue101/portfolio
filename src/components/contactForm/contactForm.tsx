"use client";
import React, { useState } from "react";
import sgMail from "@sendgrid/mail";
import "./contactForm.scss";

// Define the expected form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define a functional component to render the contact form
const ContactForm: React.FC = () => {
  // State / Props
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Function to update form data as user types in
  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      // Send the form data to the server-side API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // If the response is successful, set submitSuccess to true
      if (res.ok) {
        setSubmitSuccess(true);
      } else {
        // Otherwise, log an error
        console.error("Failed to submit the form");
      }
    } catch (error) {
      // Log any errors that occur during the submission process
      console.error(error);
    }
  };

  // Render either the success message or the contact form based on the submitSuccess state
  return (
    <>
      {submitSuccess ? (
        <p className="form__success">
          Thanks for reaching out!
          <br />
          <br />
          We&apos;ll get back to you shortly.
          <br />
          <br />
          Should you require any assistance please contact me at
          info@ianvirtue.com
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Name:
            </label>
            <input
              className="form__input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email:
            </label>
            <input
              className="form__input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div className="form__group">
            <label htmlFor="message" className="form__label">
              Message:
            </label>
            <textarea
              className="form__textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form__buttonBlock"> </div>
          <button className="form__button" type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

// Export the ContactForm component as the default export of this module
export default ContactForm;
