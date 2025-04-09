import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-neon-blue text-void-black hover:bg-neon-blue/90 hover:shadow-[0_0_15px_theme('colors.neon-blue')] hover:-translate-y-0.5",
        destructive:
          "bg-blood-red text-light-text hover:bg-blood-red/90 hover:shadow-[0_0_15px_theme('colors.blood-red')]",
        outline:
          "border border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_10px_theme('colors.neon-blue')]",
        secondary:
          "bg-shadow-purple text-light-text hover:bg-shadow-purple/80 hover:shadow-[0_0_15px_theme('colors.shadow-purple')]",
        ghost: "hover:bg-neon-blue/10 hover:text-neon-blue hover:shadow-[0_0_10px_theme('colors.neon-blue')]",
        link: "text-neon-blue underline-offset-4 hover:underline hover:text-neon-blue/80",
        flutter: "bg-neon-blue text-void-black font-bold hover:shadow-[0_0_15px_theme('colors.neon-blue')] hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
