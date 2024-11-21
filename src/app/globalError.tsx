"use client";

import { ceraPro } from "./fonts";
import { ErrorComponent, ErrorComponentProps } from "@/app/components/ErrorComponent";

export default function GlobalError({ error, reset }: ErrorComponentProps) {
  return (
    <html lang="en">
      <head>
        <title>Reel-Reveal</title>
      </head>
      <body className={ceraPro.className}>
        <ErrorComponent error={error} reset={reset} from={"home"} />;
      </body>
    </html>
  );
}
