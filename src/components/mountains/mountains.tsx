// "use client";
// import React, { useMemo, useEffect, useState, useRef } from "react";
// import { useSpring, animated } from "react-spring";
// import Mountain1 from "../../assets/mountain/mountain-1.svg";
// import Mountain2 from "../../assets/mountain/mountain-2.svg";
// import Mountain3 from "../../assets/mountain/mountain-3.svg";
// import Mountain5 from "../../assets/mountain/mountain-5.svg";
// import Cloud1 from "../../assets/clouds/cloud-1.svg";
// import Cloud2 from "../../assets/clouds/cloud-2.svg";
// import Cloud3 from "../../assets/clouds/cloud-3.svg";
// import Image from "next/image";
// import "./mountains.scss";

// export default function Mountains() {
//   const [scrollY, setScrollY] = useState(0);
//   const [scrollLimitReached, setScrollLimitReached] = useState(false);
//   const scrollLimit = 1000;

//   const animationFrameIdRef = useRef<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (animationFrameIdRef.current) {
//         cancelAnimationFrame(animationFrameIdRef.current);
//       }
//       animationFrameIdRef.current = requestAnimationFrame(() => {
//         if (window.scrollY >= scrollLimit) {
//           setScrollLimitReached((prev) => prev || true);
//         }
//         setScrollY(window.scrollY);
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       cancelAnimationFrame(animationFrameIdRef.current!);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollLimit]);

//   const mountain1Y = scrollLimitReached ? 0 : scrollY * 0.1;
//   const mountain2Y = scrollLimitReached ? 0 : scrollY * 0.2;
//   const mountain3Y = scrollLimitReached ? 0 : scrollY * 0.3;
//   const mountain5Y = scrollLimitReached ? 0 : scrollY * 0.4;

//   const cloud1X = scrollLimitReached ? 0 : scrollY * 0.2;
//   const cloud2X = scrollLimitReached ? 0 : scrollY * -0.5;
//   const cloud3X = scrollLimitReached ? 0 : scrollY * -1.0;

//   const mountainSpringProps = {
//     config: { mass: 0.5, tension: 220, friction: 30 },
//   };

//   const cloudSpringProps = {
//     config: { mass: 0.1, tension: 220, friction: 30 },
//   };

//   const mountain1Spring = useSpring({
//     ...mountainSpringProps,
//     y: mountain1Y,
//   });

//   const mountain2Spring = useSpring({
//     ...mountainSpringProps,
//     y: mountain2Y,
//   });

//   const mountain3Spring = useSpring({
//     ...mountainSpringProps,
//     y: mountain3Y,
//   });

//   const mountain5Spring = useSpring({
//     ...mountainSpringProps,
//     y: mountain5Y,
//   });

//   const Cloud1Spring = useSpring({
//     ...cloudSpringProps,
//     y: cloud1X,
//   });

//   const Cloud2Spring = useSpring({
//     ...cloudSpringProps,
//     y: cloud2X,
//   });

//   const Cloud3Spring = useSpring({
//     ...cloudSpringProps,
//     y: cloud3X,
//   });
//

import React, { useEffect, useState, useRef } from "react";
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
  const [scrollValues, setScrollValues] = useState({
    mountain1Y: 0,
    mountain2Y: 0,
    mountain3Y: 0,
    mountain5Y: 0,
    cloud1X: 0,
    cloud2X: 0,
    cloud3X: 0,
  });

  const [scrollLimitReached, setScrollLimitReached] = useState(false);
  const scrollLimit = 1000;
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      animationFrameIdRef.current = requestAnimationFrame(() => {
        if (window.scrollY >= scrollLimit) {
          setScrollLimitReached((prev) => prev || true);
        }

        const newScrollValues = {
          mountain1Y: scrollLimitReached ? 0 : window.scrollY * 0.1,
          mountain2Y: scrollLimitReached ? 0 : window.scrollY * 0.2,
          mountain3Y: scrollLimitReached ? 0 : window.scrollY * 0.3,
          mountain5Y: scrollLimitReached ? 0 : window.scrollY * 0.4,
          cloud1X: scrollLimitReached ? 0 : window.scrollY * 0.2,
          cloud2X: scrollLimitReached ? 0 : window.scrollY * -0.5,
          cloud3X: scrollLimitReached ? 0 : window.scrollY * -1.0,
        };

        if (JSON.stringify(newScrollValues) !== JSON.stringify(scrollValues)) {
          setScrollValues(newScrollValues);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current!);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLimit, scrollLimitReached, scrollValues]);

  const mountainSpringProps = {
    config: { mass: 0.5, tension: 220, friction: 30 },
  };

  const cloudSpringProps = {
    config: { mass: 0.1, tension: 220, friction: 30 },
  };

  const mountain1Spring = useSpring({
    ...mountainSpringProps,
    y: scrollValues.mountain1Y,
  });

  const mountain2Spring = useSpring({
    ...mountainSpringProps,
    y: scrollValues.mountain2Y,
  });

  const mountain3Spring = useSpring({
    ...mountainSpringProps,
    y: scrollValues.mountain3Y,
  });

  const mountain5Spring = useSpring({
    ...mountainSpringProps,
    y: scrollValues.mountain5Y,
  });

  const Cloud1Spring = useSpring({
    ...cloudSpringProps,
    y: scrollValues.cloud1X,
  });

  const Cloud2Spring = useSpring({
    ...cloudSpringProps,
    y: scrollValues.cloud2X,
  });

  const Cloud3Spring = useSpring({
    ...cloudSpringProps,
    y: scrollValues.cloud3X,
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
