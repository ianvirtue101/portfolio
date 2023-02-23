"use client";
import React, { useMemo, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Mountain1 from "../../assets/mountain/mountain-1.svg";
import Mountain2 from "../../assets/mountain/mountain-2.svg";
import Mountain3 from "../../assets/mountain/mountain-3.svg";
import Mountain5 from "../../assets/mountain/mountain-5.svg";
import Cloud1 from "../../assets/clouds/cloud-1.svg";
import Cloud2 from "../../assets/clouds/cloud-2.svg";
import Cloud3 from "../../assets/clouds/cloud-3.svg";
import Image from "next/image";
import "./mountains.scss";

export default function Mountains() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollLimitReached, setScrollLimitReached] = useState(false);
  const scrollLimit = 1000; // define the scroll limit here

  useEffect(() => {
    // Declare a variable to hold the ID of the current animation frame
    let animationFrameId: any;

    // Define a function to handle the scroll event
    const handleScroll = () => {
      // Cancel any pending animation frames to ensure that the function is not called unnecessarily
      cancelAnimationFrame(animationFrameId);

      // Request a new animation frame to call the function when the browser is ready to render a new frame
      animationFrameId = requestAnimationFrame(() => {
        // Check if the user has scrolled past a certain point
        if (window.scrollY >= scrollLimit) {
          // Update the state to indicate that the scroll limit has been reached
          setScrollLimitReached(true);
        }

        // Update the state to reflect the current scroll position
        setScrollY(window.scrollY);
      });
    };
    // Register an event listener for the "scroll" event on the window object
    // and call the handleScroll function when it occurs
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted or updated
    // by removing the listener and cancelling any pending animation frames
    // specified by the animationFrameId variable
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mountain1Y = useMemo(
    () => (scrollLimitReached ? 0 : scrollY * 0.1),
    [scrollY, scrollLimitReached]
  );
  const mountain2Y = useMemo(
    () => (scrollLimitReached ? 0 : scrollY * 0.2),
    [scrollY, scrollLimitReached]
  );
  const mountain3Y = useMemo(
    () => (scrollLimitReached ? 0 : scrollY * 0.3),
    [scrollY, scrollLimitReached]
  );
  const mountain5Y = useMemo(
    () => (scrollLimitReached ? 0 : scrollY * 0.4),
    [scrollY, scrollLimitReached]
  );

  const cloud1X = useMemo(
    () => (scrollLimitReached ? 0 : scrollY * 0.2),
    [scrollY, scrollLimitReached]
  );
  const cloud2X = useMemo(
    () => (scrollLimitReached ? 0 : scrollY * -0.5),
    [scrollY, scrollLimitReached]
  );
  const cloud3X = useMemo(
    () => (scrollLimitReached ? 0 : scrollY * -1.0),
    [scrollY, scrollLimitReached]
  );

  // Mountian Springs

  const mountain1Spring = useSpring({
    y: mountain1Y,
    config: { mass: 0.5, tension: 220, friction: 30 },
  });

  const mountain2Spring = useSpring({
    y: mountain2Y,
    config: { mass: 0.5, tension: 220, friction: 30 },
  });

  const mountain3Spring = useSpring({
    y: mountain3Y,
    config: { mass: 0.5, tension: 220, friction: 30 },
  });

  const mountain5Spring = useSpring({
    y: mountain5Y,
    config: { mass: 0.5, tension: 220, friction: 30 },
  });

  // Cloud Springs

  const Cloud1Spring = useSpring({
    y: cloud1X,
    config: { mass: 0.1, tension: 220, friction: 30 },
  });
  const Cloud2Spring = useSpring({
    y: cloud2X,
    config: { mass: 0.1, tension: 220, friction: 30 },
  });
  const Cloud3Spring = useSpring({
    y: cloud3X,
    config: { mass: 0.1, tension: 220, friction: 30 },
  });

  return (
    <>
      <div className="mountains-container">
        <animated.div
          style={{
            transform: mountain5Spring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <Image
            className="mountains__mountain5"
            style={{
              position: "absolute",
              top: "1rem",
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
            src={Mountain5}
            alt="mountain-vector5"
            priority
          />
        </animated.div>

        <animated.div
          style={{
            transform: Cloud3Spring.y.to((y) => `translateX(${-y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "7rem",
              left: "2rem",
              objectFit: "cover",
              width: "50%",

              height: "auto",
            }}
            src={Cloud3}
            alt="mountain-vector1"
            priority
          />
        </animated.div>
        <animated.div
          style={{
            transform: mountain3Spring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "14rem",
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
            src={Mountain3}
            alt="mountain-vector3"
            priority
          />
        </animated.div>

        <animated.div
          style={{
            transform: Cloud2Spring.y.to((y) => `translateX(${y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "15rem",
              right: "2rem",
              objectFit: "cover",
              width: "50%",

              height: "auto",
            }}
            src={Cloud2}
            alt="mountain-vector1"
            priority
          />
        </animated.div>

        <animated.div
          style={{
            transform: mountain2Spring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "24rem",
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
            src={Mountain2}
            alt="mountain-vector2"
            priority
          />
        </animated.div>

        <animated.div
          style={{
            transform: Cloud1Spring.y.to((y) => `translateX(${-y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "22rem",
              objectFit: "cover",
              width: "40%",
              height: "auto",
            }}
            src={Cloud1}
            alt="mountain-vector1"
            priority
          />
        </animated.div>

        <animated.div
          style={{
            transform: mountain1Spring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "30rem",
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
            src={Mountain1}
            alt="mountain-vector1"
            priority
          />
        </animated.div>
      </div>
    </>
  );
}
