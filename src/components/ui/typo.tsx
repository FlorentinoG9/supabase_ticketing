import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type React from "react";
import { cn } from "@/lib/utils";

const typography = cva("", {
  variants: {
    variant: {
      h1: "font-bold text-2xl",
      h2: "font-bold text-xl",
      h3: "font-bold text-lg",
      h4: "font-bold text-base",
      h5: "font-bold text-sm",
      h6: "font-bold text-xs",
      p: "text-gray-500 text-sm",
      span: "text-gray-500 text-sm",
      small: "text-gray-500 text-xs",
      strong: "font-bold",
      blockquote: "text-gray-500",
      code: "text-gray-500",
      pre: "text-gray-500",
    },
    affects: {
      default: "",
      small: "text-xs",
      italic: "",
    },
  },
  defaultVariants: {
    variant: "p",
    affects: "default",
  },
});

export interface TypoProps
  extends React.ComponentProps<"p">,
    VariantProps<typeof typography> {
  asChild?: boolean;
  className?: string;
}

export function Typo({
  children,
  variant,
  asChild = false,
  affects,
  className,
}: TypoProps) {
  const Comp = asChild ? Slot : (variant ?? "p");

  return (
    <Comp className={cn(typography({ variant, affects }), className)}>
      {children}
    </Comp>
  );
}
