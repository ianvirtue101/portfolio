"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./rotatingtext.scss";

export default function RotatingText() {
  const [text, setText] = useState("I'm Ian Virtue");

  const textArray = [
    "I'm a Full Stack Developer",
    "I build responsive websites",
    "In case you can't tell, I love the outdoors",
    "I'm an Expert in JavaScript, Next.js, and Node.js",
    "A Professional Photographer",
    "I'm an Adobe Creative Suite Pro",
  ];

  const controls = useAnimation();

  const variants = {
    enter: {
      opacity: 0,
      rotateX: 90,
    },
    center: {
      opacity: 1,
      rotateX: 0,
    },
    exit: {
      opacity: 0,
      rotateX: -90,
    },
  };

  const transition = {
    duration: 0.5,
    ease: [0.48, 0.15, 0.25, 0.96],
  };

  useEffect(() => {
    controls.start("center");

    const interval = setInterval(() => {
      controls.start("exit").then(() => {
        setText(textArray[Math.floor(Math.random() * textArray.length)]);
        controls.start("enter");
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="rotatingText">
      <motion.h1
        animate={controls}
        variants={variants}
        transition={transition}
        style={{ fontSize: "2rem", color: "#004777" }}
      >
        {text}
      </motion.h1>
    </div>
  );
}
