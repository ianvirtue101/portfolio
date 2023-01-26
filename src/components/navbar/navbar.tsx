"use client";
import Link from "next/link";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import styles from "./navbar.module.scss";

export default function navbar() {
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
          <Link className={styles.navLink} href="/about">
            About
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item
          className={styles.navItem}
          onClick={() => setCurrentPage("work")}
        >
          <Link className={styles.navLink} href="/resume">
            Resume
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item
          className={styles.navItem}
          onClick={() => setCurrentPage("contact")}
        >
          <Link className={styles.navLink} href="/contact">
            Contact
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.Root>
    </>
  );
}
