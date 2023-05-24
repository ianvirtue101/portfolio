import "../styles/global.scss";
import Navbar from "../../components/navbar/navbar";
import { AnalyticsWrapper } from "../../components/analytics/analytics";
import { Suspense } from "react";
import Loading from "../../app/loading";
import { ThemeWrapper } from "@/components/ThemeWrapper/ThemeWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Suspense fallback={<Loading />}>
        <ThemeWrapper>
          <body>
            <Navbar />
            {children}
          </body>
        </ThemeWrapper>
      </Suspense>
      <AnalyticsWrapper />
    </html>
  );
}
