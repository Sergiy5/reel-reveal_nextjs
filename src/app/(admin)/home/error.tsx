"use client";

import {ErrorComponent} from "@/app/components/errorComponent";
import { ErrorComponentProp } from "@/types";

export default function Error({ error, reset }: ErrorComponentProp) {
  return <ErrorComponent error={error} reset={reset} from={"home"} />;
}
