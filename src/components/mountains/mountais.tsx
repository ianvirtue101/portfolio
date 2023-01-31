"use client";
import React, { useMemo, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Mountain1 from "../../assets/mountain/mountain-1.svg";
import Mountain2 from "../../assets/mountain/mountain-2.svg";
import Mountain3 from "../../assets/mountain/mountain-3.svg";
import Mountain5 from "../../assets/mountain/mountain-5.svg";
import Image from "next/image";

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

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <animated.div
          style={{
            transform: mountain5Spring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "-1rem",
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
            transform: mountain3Spring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "12rem",
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
            transform: mountain2Spring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "18rem",
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
            transform: mountain1Spring.y.to((y) => `translateY(${y}px)`),
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "25rem",
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
