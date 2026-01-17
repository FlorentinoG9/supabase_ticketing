"use client";

import { Indicator, Root } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Checkbox({ ref, className, ...props }: ComponentProps<typeof Root>) {
  return (
    <Root
      className={cn(
        "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      ref={ref}
      {...props}
    >
      <Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="size-4" />
      </Indicator>
    </Root>
  );
}
Checkbox.displayName = Root.displayName;

export { Checkbox };
