"use client"; // imports the client module

import { useState, useEffect } from "react"; // imports the `useState` and `useEffect` hooks from the React library

export default function ClientOnly({
  children, // a required prop that should be a React node
}: {
  children: React.ReactNode;
}) {
  // State / Props
  const [hasMounted, setHasMounted] = useState(false); // defines a state variable `hasMounted` and a function to update it `setHasMounted`

  // Hooks
  useEffect(() => {
    setHasMounted(true); // updates the `hasMounted` state variable to `true` when the component mounts
  }, []);

  // Render
  if (!hasMounted) {
    // if the component has not mounted yet, return `null`
    return null;
  } else {
    // otherwise, return the `children` prop wrapped in a `div`
    return <div>{children}</div>;
  }
}
