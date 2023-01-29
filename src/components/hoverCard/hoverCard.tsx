"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import Link from "next/link";

import "./hoverCard.scss";

export default function HoverCards({
  channel,
  link,
  handle,
  followers,
  description,
}: {
  channel: string;
  link: string;
  handle: string;
  followers: string;
  description: string;
}) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div className="SocialMediaTrigger">
          <img
            className="SocialMediaLogo"
            src={`../${channel}.svg`}
            alt={`${channel} logo`}
          />
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="SocialMediaHoverCardContent"
          sideOffset={5}
        >
          <div>
            {/* <img
              className="SocialMediaLogo large"
              src={`../${channel}.svg`}
              alt={`${channel} logo`}
            /> */}
            <div>
              <div className="SocialMediaContainer">
                <div className="SocialMediaTitle">{channel}</div>

                <Link href={link} className="SocialMediaHandle">
                  @{handle}
                </Link>
              </div>
              <div className="SocialMediaDescription">{description}</div>
              <div>
                <div className="SocialMediaFollowers">
                  <div className="SocialMediaFollowersCount">
                    {followers} Followers
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <HoverCard.Arrow className="SocialMediaHoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
