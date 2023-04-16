"use client";
// Import necessary dependencies and components
import Image from "next/image";
import HoverCards from "../components/hoverCard/hoverCard";
import "./home.scss";
import React, { useState, useEffect, Suspense } from "react";
import { useTheme } from "../components/ThemeWrapper/ThemeWrapper";
import Instagram from "../assets/icons/instagram.svg";
import InstagramDarkmode from "../assets/icons/instagram-darkmode.svg";
import GitHubDarkmode from "../assets/icons/github-darkmode.svg";
import LinkedInDarkmode from "../assets/icons/linkedin-darkmode.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Github from "../assets/icons/github.svg";
import ContactForm from "../components/contactForm/contactForm";
import PortCredit from "../components/PortCredit/PortCredit";
import CloudBottom from "../../public/SVG/Cloud-Bottom.svg";
import CloudBottomDarkMode from "../../public/SVG/Cloud-Bottom-darkmode.svg";
import Head from "./head";


export default function Home() {
  const { darkMode } = useTheme();


  const data = {
    // Define an object with data for social media channels
    instagram: {
      channel: "Instagram",
      image: { Instagram }, // Use the Instagram icon
      link: "https://www.instagram.com/ian.virtue/",
      handle: "ian.virtue",
      followers: "1146",
      description:
        "Landscape & Commercial Photographer helping eco-focused brands do more for the world",
    },
    linkedin: {
      channel: "Linkedin",
      image: { Linkedin }, // Use the Linkedin icon
      link: "https://www.linkedin.com/in/ian-virtue/",
      handle: "ian virtue",
      followers: "519",
      description:
        "Building visually stunning websites, designs, and media that engage and inspire",
    },
    github: {
      channel: "Github",
      image: { Github }, // Use the Github icon
      link: "https://github.com/ianvirtue101",
      handle: "ianvirtue101",
      followers: "8",
      description:
        "Landscape & Commercial Photographer helping eco-focused brands do more for the world",
    },
  };

  return (
    <main>
      <Head />

      <section className="section">
        <PortCredit />
      </section>

      <section className="body-section">
        <div className="CloudContainer">
          <Image
            src={darkMode ? CloudBottomDarkMode : CloudBottom}
            alt="fluffy white clouds to frame the cityscape"
          />
        </div>
        <div className="body-section__group">
          <div className="body-section__text-block">
            <h1 id="about" className="body-section__title">
              About
            </h1>
            <p className="body-section__text">
              I&apos;m a versatile and meticulous professional, specializing in
              full stack engineering, content creation, and digital media.
              Driven by a passion for inventive problem-solving and a commitment
              to staying current with industry developments, I excel in
              technical expertise, project management, and customer service.
              Holding a Diploma in Web Development from BrainStation and a BA in
              Communication, Media & Film and Digital Journalism from the
              University of Windsor, I&apos;m well-prepared to deliver
              outstanding results for clients across various challenges.
            </p>
          </div>

          <h2 className="body-section__subheading">Let&apos;s Connect</h2>
          <div className="image-container__hover-card">
            <HoverCards
              channel={data.instagram.channel}
              link={data.instagram.link}
              handle={data.instagram.handle}
              followers={data.instagram.followers}
              description={data.instagram.description}
              image={darkMode ? InstagramDarkmode : Instagram}
            />
            <HoverCards
              channel={data.linkedin.channel}
              link={data.linkedin.link}
              handle={data.linkedin.handle}
              followers={data.linkedin.followers}
              description={data.linkedin.description}
              image={darkMode ? LinkedInDarkmode : Linkedin}
            />
            <HoverCards
              channel={data.github.channel}
              link={data.github.link}
              handle={data.github.handle}
              followers={data.github.followers}
              description={data.github.description}
              image={darkMode ? GitHubDarkmode : Github}
            />
          </div>
          {/* </div> */}
        </div>
      </section>
      <section id="resume" className="resume-section">
        <h2 className="resume-section__title">My Experience</h2>
        <p className="resume-section__text">
          As a dedicated Full Stack Developer and creative problem solver,
          I&apos;ve spent years honing my skills in web development, content
          creation, and teamwork. With a strong foundation in JavaScript, React,
          Node.js, and Express, I&apos;ve successfully led cross-functional
          teams and delivered exceptional results in various projects.
        </p>
        <p className="resume-section__text">
          At Learnedly, I spearheaded the end-to-end design, development, and
          maintenance of the website, achieving a near-perfect Lighthouse score
          and significantly improving load times across all devices. I&apos;ve
          developed key features, such as dynamic homepages, custom user
          authentication, and interactive carousels, all while ensuring
          responsiveness and accessibility.
        </p>
        <p className="resume-section__text">
          Beyond coding, I have a keen eye for visual design and content
          production, having worked with industry tools like Adobe Creative
          Suite, Figma, and Jira. As a Content Development Manager and the owner
          of Ian Virtue Photography, I&apos;ve effectively increased social
          media engagement, managed marketing campaigns, and delivered
          professional graphics, websites, and photography for a wide range of
          clients.
        </p>

        <h3 className="resume-section__title">Skills</h3>
        <p className="resume-section__text">
          I have extensive experience in creating responsive websites and web
          applications, working with APIs, user authentication, and implementing
          web design principles. My technical skill set includes proficiency in
          JavaScript, React, Node.js, Express, and Next.js.
        </p>
        <p className="resume-section__text">
          As a creative professional, I&apos;m well-versed in Adobe Creative
          Suite, photography, videography, and social media marketing. I&apos;ve
          successfully used Figma, Jira, Heroku, GitHub, Jest, and CSS/SCSS/HTML
          to manage projects and deliver outstanding results.
        </p>
        <p className="resume-section__text">
          In addition to my front-end development expertise, I have working
          experience with Python, SQL, MongoDB, and Firebase, which I&apos;ve
          used to manipulate data, manage databases, and develop custom
          solutions for various projects.
        </p>

        <div className="resume-section__container">
          <div className="resume-section__block">
            <h3 className="resume-section__header">
              Full Stack Developer
              <br />@ Learnedly
            </h3>
            <p className="resume-section__text">
              Utilized Next.js to design, develop, and maintain the
              company&apos;s website from scratch, incorporating JavaScript,
              HTML, CSS, and RESTful APIs to create a responsive, user-friendly,
              and optimized website for search engines.
            </p>
            <p className="resume-section__text">
              Expertly developed and maintained software solutions using Python,
              demonstrating proficiency in scripting and programming.
            </p>
            <p className="resume-section__text">
              Designed and built scalable and reliable proxy services and API
              connectors using Node.js, incorporating RESTful APIs to meet
              client needs.
            </p>
            <p className="resume-section__text">
              Skilled in video editing and animation, utilizing Adobe Premiere
              Pro and After Effects to enhance videos, adding special effects,
              animation, and sound to increase engagement and impact.
            </p>
          </div>

          <div className="resume-section__block">
            <h3 className="resume-section__header">
              Owner <br />@ Ian Virtue Photography
            </h3>
            <p className="resume-section__text">
              Successfully managed and created engaging content for various
              social media channels, including video and infographics, resulting
              in a 200% engagement increase over a 3-month period. Adept at
              implementing regular revisions and optimizations to ensure best
              results in an Agile project management environment.
            </p>
            <p className="resume-section__text">
              Delivered professional designs, complex digital graphics, and
              responsive websites for a diverse client base including
              businesses, organizations, professionals, and individuals. This
              includes custom graphic and logo designs completed within budget
              and on schedule. Resulting designs have been featured in catalogs
              and storefronts across Ontario.
            </p>
            <p className="resume-section__text">
              Photography featured in a province-wide commercial campaign,
              showcasing the ability to produce high-quality, impactful visual
              content, which increased the brand presence of the 5th largest
              winery in Canada.
            </p>
          </div>
        </div>
        <div className="resume-section__button-block">
          <div className="resume-section__button-container">
            <div className="resume-section__button-shadow"> </div>
            <a
              className="resume-section__button"
              href="Ian_Virtue_Resume.pdf"
              download
            >
              Download My Resume
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-section__circle">
          <h3 className="contact-section__header">
            So take a look around, let me know if you have any questions, and if
            you&apos;re interested in working together, let&apos;s chat!
          </h3>
          <ContactForm />
        </div>
      </section>
    </main>
    // </Suspense>
  );
}
