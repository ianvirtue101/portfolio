// import necessary modules
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import CloudsTop from "../../../public/SVG/Cloud-Top.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./navbar.scss";

// define Navbar component
export default function Navbar() {
  // define state to keep track of current page
  const [currentPage, setCurrentPage] = useState("home");

  // render navigation menu using NavigationMenu.Root and NavigationMenu.Item components
  return (
    <>
      <NavigationMenu.Root className="nav">
        {/* // create menu item for Home page, use Link from Next.js to handle
        routing */}
        <ThemeToggle />
        <NavigationMenu.Item
          className="navItem"
          onClick={() => setCurrentPage("home")}
        >
          <Link className="navLink" href="/">
            Home
          </Link>
        </NavigationMenu.Item>
        {/* // create menu item for About page, use anchor tag with href for
        scrolling */}
        <NavigationMenu.Item
          className="navItem"
          onClick={() => setCurrentPage("about")}
        >
          <a className="navLink" href="#about">
            About
          </a>
        </NavigationMenu.Item>
        {/* // create menu item for Resume page, use anchor tag with href for
        scrolling */}
        <NavigationMenu.Item
          className="navItem"
          onClick={() => setCurrentPage("work")}
        >
          <a className="navLink" href="#resume">
            Resume
          </a>
        </NavigationMenu.Item>
        {/* // create menu item for Contact page, use anchor tag with href for
        scrolling */}
        <NavigationMenu.Item
          className="navItem"
          onClick={() => setCurrentPage("contact")}
        >
          <a className="navLink" href="#contact">
            Contact
          </a>
        </NavigationMenu.Item>
        <div className="imageContainer">
          <Image src={CloudsTop} alt="layers of white fluffy clouds" />
        </div>
      </NavigationMenu.Root>
    </>
  );
}
