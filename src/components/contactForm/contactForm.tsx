"use client";
import React, { useState } from "react";
import sgMail from "@sendgrid/mail";
import "./contactForm.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitSuccess(true);
        console.log("Success!");
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {submitSuccess ? (
        <p>Thanks for reaching out! We&apos;ll get back to you shortly.</p>
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

export default ContactForm;
