"use client";

import { Root } from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

function Label({
  ref,
  className,
  ...props
}: ComponentProps<typeof Root> & VariantProps<typeof labelVariants>) {
  return (
    <Root className={cn(labelVariants(), className)} ref={ref} {...props} />
  );
}
Label.displayName = Root.displayName;

export { Label };
