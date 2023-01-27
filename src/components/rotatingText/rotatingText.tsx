"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./rotatingText.module.scss";

export default function RotatingText() {
  const [text, setText] = useState("Hello World");

  const textArray = ["Hello World", "I'm Ian", "I'm a Software Engineer"];

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
        className={styles.rotatingText__text}
        animate={controls}
        variants={variants}
        transition={transition}
      >
        {text}
      </motion.h1>
    </div>
  );
}
