import Image from "next/image";
import RotatingText from "../components/rotatingText/rotatingText";
import HoverCards from "../components/hoverCard/hoverCard";
import "./home.scss";
import Headshot from "../assets/ianvirtue.png";
import Mountains from "@/components/mountains/mountais";
import Link from "next/link";
import Instagram from "../assets/icons/instagram.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Github from "../assets/icons/github.svg";

export default function Home() {
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
      <Mountains />
      <section className="section">
        <div className="container">
          <h1 className="container__title">Hi, I&apos;m Ian</h1>
          <RotatingText />
          <h2 className="container__text">
            I&apos;m really excited to share my work with you and tell you a bit
            more about my background.
          </h2>

          <div className="container__buttonBLock"> </div>
          <Link className="container__button" href="#contact">
            Let&apos;s Work Together
          </Link>
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
        <p className="resume-section__text">
          I received my diploma in Web Development from BrainStation and my
          Bachelor of Arts in Communication, Media, & Film and Digital
          Journalism from the University of Windsor. My skills include
          JavaScript, React, Node.js, Express, Next.js, and Agile development
          methodologies, as well as experience in creating responsive websites
          and web applications, working with APIs, user authentication, and web
          design principles.
        </p>
      </section>

      <h3>
        So take a look around, let me know if you have any questions, and if
        you&apos;re interested in working together, let&apos;s chat!
      </h3>
    </main>
  );
}
