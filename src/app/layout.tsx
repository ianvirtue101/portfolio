import "../styles/global.scss";
import Navbar from "../components/navbar/navbar";
import { AnalyticsWrapper } from "../components/analytics/analytics";
import { Suspense } from "react";
import Loading from "./loading";
import { ThemeWrapper } from "@/components/ThemeWrapper/ThemeWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeWrapper>
        <Navbar />
        {children}
        <AnalyticsWrapper />
      </ThemeWrapper>
    </Suspense>
  );
}
