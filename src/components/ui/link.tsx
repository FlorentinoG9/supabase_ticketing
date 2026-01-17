import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Button } from "./button";
import type { ButtonStylesProps } from "./button.styles";

interface LinkProps extends NextLinkProps, ButtonStylesProps {
  children: React.ReactNode;
  className?: string;
}

export function Link({ children, href, className, ...props }: LinkProps) {
  return (
    <Button asChild className={className} variant="link">
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    </Button>
  );
}
