import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import React from 'react'

const typography = cva('', {
  variants: {
    variant: {
      h1: 'text-2xl font-bold',
      h2: 'text-xl font-bold',
      h3: 'text-lg font-bold',
      h4: 'text-base font-bold',
      h5: 'text-sm font-bold',
      h6: 'text-xs font-bold',
      p: 'text-sm text-gray-500',
      span: 'text-sm text-gray-500',
      small: 'text-xs text-gray-500',
      strong: 'font-bold',
      blockquote: 'text-gray-500',
      code: 'text-gray-500',
      pre: 'text-gray-500',
    },
    affects: {
      default: '',
      small: 'text-xs',
      italic: '',
    },
  },
  defaultVariants: {
    variant: 'p',
    affects: 'default',
  },
})

export interface TypoProps
  extends React.ComponentProps<'p'>,
  VariantProps<typeof typography> {
  asChild?: boolean
  className?: string
}

export function Typo({ children, variant, asChild = false, affects, className }: TypoProps) {
  const Comp = asChild ? Slot : variant!

  return (
    <Comp className={cn(typography({ variant, affects }), className)}>{children}</Comp>
  )
}
