"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";
import Link from "next/link";
import { FaUsers } from "react-icons/fa"; // Import the users icon
import "./hoverCard.scss";

// Define the props for the HoverCards component
export default function HoverCards({
  channel,
  link,
  handle,
  followers,
  description,
  image,
}: {
  channel: string;
  link: string;
  handle: string;
  followers: string;
  description: string;
  image: any;
}) {
  // Render the HoverCard component
  return (
    <HoverCard.Root>
      {/* Define the trigger that activates the hover card */}
      <HoverCard.Trigger asChild>
        <div className="SocialMediaTrigger">
          {/* Render the social media image with a link */}
          <Link href={link} className="LogoContainer">
            <Image
              className="SocialMediaLogo"
              src={image}
              alt={`${channel} logo`}
              width={50}
              height={50}
            />
          </Link>
        </div>
      </HoverCard.Trigger>
      {/* Define the content that will appear in the hover card */}
      <HoverCard.Portal>
        <HoverCard.Content
          className="SocialMediaHoverCardContent"
          sideOffset={5}
        >
          <div>
            {/* Render the social media image with a larger size */}
            {/* <img
              className="SocialMediaLogo large"
              src={`../${channel}.svg`}
              alt={`${channel} logo`}
            /> */}
            <div>
              <div className="SocialMediaContainer">
                {/* Render the social media channel name */}
                <div className="SocialMediaTitle">{channel}</div>

                {/* Render the social media handle with a link */}
                <Link href={link} className="SocialMediaHandle">
                  @{handle}
                </Link>
              </div>
              {/* Render the social media description */}
              <div className="SocialMediaDescription">{description}</div>
              <div>
                <div className="SocialMediaFollowers">
                  {/* Render the social media follower count */}
                  <FaUsers className="SocialMediaFollowerIcon" />{" "}
                  {/* Add the follower icon */}
                  <div className="SocialMediaFollowersCount">
                    {followers} Followers
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* Render the arrow that points to the trigger */}
          <HoverCard.Arrow className="SocialMediaHoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
