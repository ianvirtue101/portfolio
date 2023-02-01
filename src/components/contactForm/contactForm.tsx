"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
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

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      // send form data to your server or a third-party service here
      console.log(formData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {submitSuccess ? (
        <p>Thanks for reaching out! We'll get back to you shortly.</p>
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
              className="form__input"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="form__button" type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
