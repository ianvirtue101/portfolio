"use client";

import { useState, useEffect } from "react";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  // State / Props
  const [hasMounted, setHasMounted] = useState(false);

  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) {
    return null;
  } else {
    return <div>{children}</div>;
  }
}
