"use client";

import { ErrorComponent } from "@/app/components/errorComponent";
import { ErrorComponentProp } from "@/typification";

export default function Error({ error, reset }: ErrorComponentProp) {
  return <ErrorComponent error={error} reset={reset} from={"register"} />;
}
