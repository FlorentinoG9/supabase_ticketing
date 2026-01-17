import { Slot } from "@radix-ui/react-slot";
import type * as React from "react";
import { cn } from "@/lib/utils";
import type { ButtonStylesProps } from "./button.styles";
import { buttonVariants } from "./button.styles";

export interface ButtonProps
  extends React.ComponentProps<"button">,
    ButtonStylesProps {
  asChild?: boolean;
}

function Button({
  ref,
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
}
Button.displayName = "Button";

export { Button };
