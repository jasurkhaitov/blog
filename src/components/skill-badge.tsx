"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm h-full">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{name}</h3>
          <span className="text-sm text-muted-foreground">{level}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  )
}
