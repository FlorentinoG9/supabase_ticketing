import type { ButtonStylesProps } from './button.styles'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { Button } from './button'

interface LinkProps extends NextLinkProps, ButtonStylesProps {
  children: React.ReactNode
  className?: string
}

export function Link({ children, href, className, ...props }: LinkProps) {
  return (
    <Button asChild variant='link' className={className}>
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    </Button>
  )
}
