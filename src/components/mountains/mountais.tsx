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

  useEffect(() => {
    let animationFrameId: any;
    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mountain1Y = useMemo(() => scrollY * 0.25, [scrollY]);
  const mountain2Y = useMemo(() => scrollY * 0.15, [scrollY]);
  const mountain3Y = useMemo(() => scrollY * 0.1, [scrollY]);
  const mountain5Y = useMemo(() => scrollY * 0.2, [scrollY]);

  const cloud1X = useMemo(() => scrollY * 0.7, [scrollY]);
  const cloud2X = useMemo(() => scrollY * -1.5, [scrollY]);
  const cloud3X = useMemo(() => scrollY * -1.1, [scrollY]);

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
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
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
          />
        </animated.div>
      </div>
    </>
  );
}
