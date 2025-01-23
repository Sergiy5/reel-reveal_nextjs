"use client";

import { ErrorComponent, ErrorComponentProps } from "./components/ui/ErrorComponent";

export default function GlobalError({ error, reset }: ErrorComponentProps) {
  return (
    <html lang="en">
      <head>
        <title>Reel-Reveal</title>
      </head>
      <body >
        <ErrorComponent error={error} reset={reset} from={"home"} />;
      </body>
    </html>
  );
}
