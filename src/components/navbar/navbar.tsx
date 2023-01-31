"use client";
import Link from "next/link";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import styles from "./navbar.module.scss";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <NavigationMenu.Root className={styles.nav}>
        <NavigationMenu.Item
          className={styles.navItem}
          onClick={() => setCurrentPage("home")}
        >
          <Link className={styles.navLink} href="/">
            Home
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item
          className={styles.navItem}
          onClick={() => setCurrentPage("about")}
        >
          <a className={styles.navLink} href="#about">
            About
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item
          className={styles.navItem}
          onClick={() => setCurrentPage("work")}
        >
          <a className={styles.navLink} href="#resume">
            Resume
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item
          className={styles.navItem}
          onClick={() => setCurrentPage("contact")}
        >
          <a className={styles.navLink} href="#contact">
            Contact
          </a>
        </NavigationMenu.Item>
      </NavigationMenu.Root>
    </>
  );
}
