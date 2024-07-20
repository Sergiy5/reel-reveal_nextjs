"use client";

import { ceraPro } from "./fonts";
import { ErrorComponentProp } from "@/typification";
import { ErrorComponent } from "@/app/components/errorComponent";

export default function GlobalError({ error, reset }: ErrorComponentProp) {
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
