"use client";

import { Indicator, Item, Root } from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function RadioGroup({ ref, className, ...props }: ComponentProps<typeof Root>) {
  return <Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
}
RadioGroup.displayName = Root.displayName;

function RadioGroupItem({
  ref,
  className,
  ...props
}: ComponentProps<typeof Item>) {
  return (
    <Item
      className={cn(
        "aspect-square size-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <Circle className="size-3.5 fill-primary" />
      </Indicator>
    </Item>
  );
}
RadioGroupItem.displayName = Item.displayName;

export { RadioGroup, RadioGroupItem };
