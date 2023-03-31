"use client";
// Import necessary dependencies and components
import Image from "next/image";
import HoverCards from "../components/hoverCard/hoverCard";
import "./home.scss";
import Headshot from "../assets/ianvirtue.png";
import React, { useState, useEffect, Suspense } from "react";
import Instagram from "../assets/icons/instagram.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Github from "../assets/icons/github.svg";
import ContactForm from "../components/contactForm/contactForm";
import PortCredit from "../components/PortCredit/PortCredit";
import CloudBottom from "../../public/SVG/Cloud-Bottom.svg";
import Head from "./head";

// Create a custom hook that returns the current window width
function useWindowSize() {
  // Check if running in a client-side environment
  const isClient = typeof window === "object";

  // Initialize the width state to the current window width
  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);

  // Add an event listener to update the width state when the window is resized
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  // Return the current window width
  return width;
}

export default function Home() {
  const width = useWindowSize(); // Get the width of the window using the custom hook

  const tabletBreakpoint = 768; // Define a breakpoint for tablet devices

  useEffect(() => {
    // Use the useEffect hook to conditionally execute code based on the width of the window
    if (width >= tabletBreakpoint) {
      // If the width of the window is greater than or equal to the tablet breakpoint
      return () => {
        // any cleanup logic here
      };
    }
  }, [width]);

  const data = {
    // Define an object with data for social media channels
    instagram: {
      channel: "Instagram",
      image: { Instagram }, // Use the Instagram icon
      link: "https://www.instagram.com/ian.virtue/",
      handle: "ian.virtue",
      followers: "1139",
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
    // <Suspense fallback={<Loading />}>
    <main>
      <Head />
      {/* <ClientOnly>{width >= tabletBreakpoint && <Mountains />}</ClientOnly> */}

      <section className="section">
        <PortCredit />
        {/* {" "}
          <div className="container">
            <h1 className="container__title">Hi, I&apos;m Ian</h1>
            <RotatingText />
            <h2 className="container__text">
              I&apos;m really excited to share my work with you and tell you a
              bit more about my background.
            </h2>

            <div className="container__buttonBLock"> </div>
            <a className="container__button" href="#contact">
              Let&apos;s Work Together
            </a>
          </div> */}
      </section>

      <section className="body-section">
        <div className="CloudContainer">
          <Image
            src={CloudBottom}
            alt="fluffy white clouds to frame the cityscape"
          />
        </div>
        <div className="body-section__group">
          <div className="body-section__text-block">
            <h1 id="about" className="body-section__title">
              About
            </h1>
            <p className="body-section__text">
              I&apos;m a multi-skilled and detail-oriented professional with
              expertise in full stack engineering, content development, and
              digital media. Possessing a passion for creative problem solving
              and a dedication to staying up to date with industry trends, I
              bring exceptional technical skills, project management, and
              customer service to every engagement. With a Diploma in Web
              Development from BrainStation and a BA in Communication, Media &
              Film and Digital Journalism from the University of Windsor, I am
              well equipped to deliver exceptional results for clients no matter
              the problem.
            </p>
          </div>

          <div className="image-container">
            <div className="image-container__block">
              <Image
                className="image-container__image"
                src={Headshot}
                alt="Ian Virtue Headshot"
                width={300}
                priority
              />
            </div>
            <h2>Let&apos;s Connect</h2>
            <div className="image-container__hover-card">
              <HoverCards
                channel={data.instagram.channel}
                link={data.instagram.link}
                handle={data.instagram.handle}
                followers={data.instagram.followers}
                description={data.instagram.description}
                image={Instagram}
              />
              <HoverCards
                channel={data.linkedin.channel}
                link={data.linkedin.link}
                handle={data.linkedin.handle}
                followers={data.linkedin.followers}
                description={data.linkedin.description}
                image={Linkedin}
              />
              <HoverCards
                channel={data.github.channel}
                link={data.github.link}
                handle={data.github.handle}
                followers={data.github.followers}
                description={data.github.description}
                image={Github}
              />
            </div>
          </div>
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
              Content Development Manager
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
        <h3 className="contact-section__header">
          So take a look around, let me know if you have any questions, and if
          you&apos;re interested in working together, let&apos;s chat!
        </h3>
        <div className="contact-section__circle">
          <ContactForm />
        </div>
      </section>
    </main>
    // </Suspense>
  );
}
