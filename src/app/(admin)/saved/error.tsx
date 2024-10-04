"use client";

import { ErrorComponent } from "@/app/components/ErrorComponent";
import { ErrorComponentProps } from "@/typification";

export default function Error({ error, reset }: ErrorComponentProps
) {
  return <ErrorComponent error={error} reset={reset} from={"saved"} />;
}
