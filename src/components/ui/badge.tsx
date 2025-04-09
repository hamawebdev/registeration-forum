import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neon-blue text-void-black hover:bg-neon-blue/80 hover:shadow-[0_0_10px_theme('colors.neon-blue')]",
        secondary:
          "border-transparent bg-shadow-purple text-light-text hover:bg-shadow-purple/80 hover:shadow-[0_0_10px_theme('colors.shadow-purple')]",
        destructive:
          "border-transparent bg-blood-red text-light-text hover:bg-blood-red/80 hover:shadow-[0_0_10px_theme('colors.blood-red')]",
        outline: "border-neon-blue/30 text-neon-blue hover:border-neon-blue/60 hover:bg-neon-blue/10",
        flutter: "border-neon-blue/30 bg-dungeon-gray/50 text-neon-blue hover:border-neon-blue/60 hover:bg-dungeon-gray/70 hover:shadow-[0_0_10px_theme('colors.neon-blue')]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
