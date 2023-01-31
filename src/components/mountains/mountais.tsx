"use client";
import { motion } from "framer-motion";
import Mountain1 from "../../assets/mountain/mountain-1.svg";
import Mountain2 from "../../assets/mountain/mountain-2.svg";
import Mountain3 from "../../assets/mountain/mountain-3.svg";
import Mountain5 from "../../assets/mountain/mountain-5.svg";
import Image from "next/image";

export default function Mountains() {
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
      </div>
    </>
  );
}
