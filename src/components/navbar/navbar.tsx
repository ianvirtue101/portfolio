"use client";
import Link from "next/link";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import "./navbar.scss";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <NavigationMenu.Root className="nav">
        <NavigationMenu.Item
          className="navItem"
          onClick={() => setCurrentPage("home")}
        >
          <Link className="navLink" href="/">
            Home
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item
        className="navItem"
          onClick={() => setCurrentPage("about")}
        >
          <a className="navLink" href="#about">
            About
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item
          className="navItem"
          onClick={() => setCurrentPage("work")}
        >
          <a className="navLink" href="#resume">
            Resume
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item
        className="navItem"
          onClick={() => setCurrentPage("contact")}
        >
          <a className="navLink" href="#contact">
            Contact
          </a>
        </NavigationMenu.Item>
      </NavigationMenu.Root>
    </>
  );
}
