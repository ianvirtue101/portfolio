"use client";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function navbar() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <NavigationMenu.Root>
        <NavigationMenu.Item onClick={() => setCurrentPage("home")}>
          Home
        </NavigationMenu.Item>
        <NavigationMenu.Item onClick={() => setCurrentPage("about")}>
          About
        </NavigationMenu.Item>
        <NavigationMenu.Item onClick={() => setCurrentPage("work")}>
          Work
        </NavigationMenu.Item>
        <NavigationMenu.Item onClick={() => setCurrentPage("contact")}>
          Contact
        </NavigationMenu.Item>
      </NavigationMenu.Root>
    </>
  );
}
