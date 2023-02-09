"use client";
import Image from "next/image";
import RotatingText from "../components/rotatingText/rotatingText";
import HoverCards from "../components/hoverCard/hoverCard";
import "./home.scss";
import Headshot from "../assets/ianvirtue.png";
import Mountains from "@/components/mountains/mountains";
import React, { useState, useEffect } from "react";
import Instagram from "../assets/icons/instagram.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Github from "../assets/icons/github.svg";
import ContactForm from "../components/contactForm/contactForm";
import ClientOnly from "../components/clientOnly/clientOnly";
import Head from "./head";

function useWindowSize() {
  const isClient = typeof window === "object";

  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return width;
}

export default function Home() {
  const width = useWindowSize();

  const tabletBreakpoint = 768;
  // const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (width >= tabletBreakpoint) {
      return () => {
        // any cleanup logic here
      };
    }
  }, [width]);
  const data = {
    instagram: {
      channel: "Instagram",
      image: { Instagram },
      link: "https://www.instagram.com/ian.virtue/",
      handle: "ian.virtue",
      followers: "1145",
      description:
        "Landscape & Commercial Photographer helping eco-focused brands do more for the world",
    },
    linkedin: {
      channel: "Linkedin",
      image: { Linkedin },
      link: "https://www.linkedin.com/in/ian-virtue/",
      handle: "ian virtue",
      followers: "519",
      description:
        "Building visually stunning websites, designs, and media that engage and inspire",
    },
    github: {
      channel: "Github",
      image: { Github },
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
      <ClientOnly>{width >= tabletBreakpoint && <Mountains />}</ClientOnly>
      <section className="section">
        <div className="container">
          <h1 className="container__title">Hi, I&apos;m Ian</h1>
          <RotatingText />
          <h2 className="container__text">
            I&apos;m really excited to share my work with you and tell you a bit
            more about my background.
          </h2>

          <div className="container__buttonBLock"> </div>
          <a className="container__button" href="#contact">
            Let&apos;s Work Together
          </a>
        </div>
      </section>
      <section className="body-section">
        <div className="body-section__group">
          <div className="body-section__text-block">
            <h1 id="about" className="body-section__title">
              About
            </h1>
            <p className="body-section__text">
              I&apos;ve been in the industry for over 5 years now, working in
              communications, business development, and non-profit management.
              My most recent experience was as a Content Development Manager at
              Learnedly, where I got to use my skills in front-end development
              to design, develop, and maintain the company&apos;s website from
              scratch. I used JavaScript, HTML, CSS, and APIs to make sure the
              website was responsive, user-friendly, and optimized for search
              engines.
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
          I'm a multi-skilled and detail-oriented professional with expertise in
          full stack engineering, content development, and digital media.
          Possessing a passion for creative problem solving and a dedication to
          staying up to date with industry trends, I bring exceptional
          technical skills, project management, and customer service to every
          engagement. With a Diploma in Web Development from BrainStation and a
          BA in Communication, Media & Film and Digital Journalism from the
          University of Windsor, I am well equipped to deliver exceptional
          results for clients no matter the problem. 
        </p>

        <h3 className="resume-section__title">Skills</h3>
        <p className="resume-section__text">
          Experience in creating responsive websites and web applications,
          working with APIs, user authentication, and web design principles.
        </p>
        <p className="resume-section__text">
          Proficient in Adobe Creative Suite, photography, videography, and
          social media marketing.
        </p>
        <p className="resume-section__text">
          Skilled in using tools such as Figma, Jira, Heroku, GitHub, Jest, and
          CSS/SCSS/HTML.
        </p>
        <p className="resume-section__text">
          Working experience with Python, proficient in basic functionality and
          data manipulation
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
  );
}
