"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./RotatingText.module.scss";

export default function RotatingText() {
  const [text, setText] = useState("I'm Ian Virtue");

  const textArray = [
    "Full Stack Developer",
    "Building responsive websites",
    "Creating engaging content",
    "Expert in JavaScript, React, and Node.js",
    "Professional photographer",
    "Adobe Creative Suite Pro",
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
    <div className={styles.rotatingText}>
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
