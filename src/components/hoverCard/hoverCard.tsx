import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

export default function HoverCards(
  channel: string,
  handle: string,
  followers: string,
  description: string
) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div className="SocialMediaTrigger">
          <img
            className="SocialMediaLogo"
            src={`/logos/${channel}.svg`}
            alt={`${channel} logo`}
          />
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="SocialMediaHoverCardContent"
          sideOffset={5}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <img
              className="SocialMediaLogo large"
              src={`/logos/${channel}.svg`}
              alt={`${channel} logo`}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div>
                <div className="SocialMediaTitle">{channel}</div>
                <div className="SocialMediaHandle">@{handle}</div>
              </div>
              <div className="SocialMediaDescription">{description}</div>
              <div style={{ display: "flex", gap: 15 }}>
                <div className="SocialMediaFollowers">
                  <div className="SocialMediaFollowersCount">{followers}</div>{" "}
                  <div className="SocialMediaFollowersLabel">Followers</div>
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
