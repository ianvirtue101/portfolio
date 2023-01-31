import Image from "next/image";
import RotatingText from "../components/rotatingText/rotatingText";
import HoverCards from "../components/hoverCard/hoverCard";
import "./home.scss";
import Headshot from "../assets/ian-virtue-headshot.png";
import Mountains from "@/components/mountains/mountais";

export default function Home() {
  const data = {
    instagram: {
      channel: "Instagram",
      link: "https://www.instagram.com/ian.virtue/",
      handle: "ian.virtue",
      followers: "1145",
      description:
        "Landscape & Commercial Photographer helping eco-focused brands do more for the world",
    },
    linkedin: {
      channel: "Linkedin",
      link: "https://www.linkedin.com/in/ian-virtue/",
      handle: "ian virtue",
      followers: "519",
      description:
        "Building visually stunning websites, designs, and media that engage and inspire",
    },
    github: {
      channel: "Github",
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
          <RotatingText />
          <h2 className="container__text">
            I&apos;m really excited to share my work with you and tell you a bit
            more about my background.
          </h2>
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
          <div className="image-container__hover-card">
            <HoverCards
              channel={data.instagram.channel}
              link={data.instagram.link}
              handle={data.instagram.handle}
              followers={data.instagram.followers}
              description={data.instagram.description}
            />
            <HoverCards
              channel={data.linkedin.channel}
              link={data.linkedin.link}
              handle={data.linkedin.handle}
              followers={data.linkedin.followers}
              description={data.linkedin.description}
            />
            <HoverCards
              channel={data.github.channel}
              link={data.github.link}
              handle={data.github.handle}
              followers={data.github.followers}
              description={data.github.description}
            />
          </div>
        </div>
      </section>

      <p>
        I&apos;ve been in the industry for over 5 years now, working in
        communications, business development, and non-profit management. My most
        recent experience was as a Content Development Manager at Learnedly,
        where I got to use my skills in front-end development to design,
        develop, and maintain the company&apos;s website from scratch. I used
        JavaScript, HTML, CSS, and APIs to make sure the website was responsive,
        user-friendly, and optimized for search engines.
      </p>

      <p>
        I also got to do some research, create engaging course content and
        develop lesson plans and scripts for videos and other multimedia
        content. Before that, I was the owner of Ian Virtue Photography, where I
        got to create engaging content for various social media channels,
        including video and infographics, resulting in a 200% engagement
        increase over a 3-month period. I was also able to deliver professional
        designs, complex digital graphics, and responsive websites for a diverse
        client base including businesses, organizations, professionals, and
        individuals.
      </p>

      <p>
        I received my diploma in Web Development from BrainStation and my
        Bachelor of Arts in Communication, Media, & Film and Digital Journalism
        from the University of Windsor. My skills include JavaScript, React,
        Node.js, Express, Next.js, and Agile development methodologies, as well
        as experience in creating responsive websites and web applications,
        working with APIs, user authentication, and web design principles.
      </p>

      <p>
        Additionally, I am proficient in Adobe Creative Suite, photography,
        videography, and social media marketing. I am also skilled in using
        tools such as Figma, Jira, Heroku, GitHub, Jest, and CSS/SCSS/HTML and
        have working experience with Python, proficient in basic functionality
        and data manipulation.
      </p>

      <h3>
        So take a look around, let me know if you have any questions, and if
        you&apos;re interested in working together, let&apos;s chat!
      </h3>
    </main>
  );
}
