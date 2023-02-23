// Import necessary modules and styles
"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import "./rotatingtext.scss";

// Create RotatingText component
export default function RotatingText() {
  // Set initial text state to "Nice to meet you!"
  const [text, setText] = useState("Nice to meet you!");

  // Array of text options to cycle through
  const textArray = useMemo(
    () => [
      "I'm a Full Stack Developer",
      "I build responsive websites",
      "I'm an expert in JavaScript, Next.js, and Node.js",
      "I'm a Professional Photographer",
      "I'm an Adobe Creative Suite Pro",
    ],
    []
  );

  // Set up animation controls using Framer Motion useAnimation hook
  const controls = useAnimation();

  // Variants for enter, center, and exit animations
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

  // Transition settings for Framer Motion animation
  const transition = {
    duration: 0.5,
    ease: [0.48, 0.15, 0.25, 0.96],
  };

  // useEffect hook to control animation and text changes
  useEffect(() => {
    // Start animation at "center" variant
    controls.start("center");

    // Set up interval to change text and animate out/in
    const interval = setInterval(() => {
      // Animate out using "exit" variant, then set new text and animate in using "enter" variant
      controls.start("exit").then(() => {
        setText(textArray[Math.floor(Math.random() * textArray.length)]);
        controls.start("enter");
      });
    }, 2000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [text]);

  // Set up motion props object to pass as props to Framer Motion component
  const motionProps = {
    // Pass the `controls` variable as the `animate` prop
    animate: controls,
    // Pass the `variants` object as the `variants` prop
    variants,
    // Pass the `transition` object as the `transition` prop
    transition,
    // Set inline styles to define font size and color
    style: { fontSize: "2rem", color: "#1f2761" },
    // Add a class name to the component for styling purposes
    className: "rotatingText__text",
  };
  // Render RotatingText component
  return (
    <div className="rotatingText">
      <motion.h1 {...motionProps}>{text}</motion.h1>
    </div>
  );
}
