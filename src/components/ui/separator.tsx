"use client";

import { Root } from "@radix-ui/react-separator";
import type { ComponentPropsWithoutRef, ElementRef, RefObject } from "react";
import { cn } from "@/lib/utils";

function Separator({
  ref,
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: ComponentPropsWithoutRef<typeof Root> & {
  ref: RefObject<ElementRef<typeof Root>>;
}) {
  return (
    <Root
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      decorative={decorative}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  );
}
Separator.displayName = Root.displayName;

export { Separator };
