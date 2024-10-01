"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    if (Sentry && error) {
      Sentry.captureException(error);
    } else {
      console.error("Sentry is not initialized or error is undefined");
    }
  }, [error]);

  return (
    <html>
      <body>
        {/* NextError is the default Next.js error page component. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
