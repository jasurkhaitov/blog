"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  repoUrl: string
  dictionary: {
    demoButton: string
    codeButton: string
    liveDemo: string
  }
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  repoUrl,
  dictionary,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const dict = dictionary

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div
          className="relative h-48 w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={imageUrl || "https://placehold.co/500x300"}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <Button size="sm" variant="secondary" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> {dict.liveDemo}
              </a>
            </Button>
            <Button size="sm" variant="secondary" asChild>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> {dict.codeButton}
              </a>
            </Button>
          </div>
        </div>
        <CardContent className="flex-grow pt-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex justify-between w-full">
            <Button variant="ghost" size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> {dict.demoButton}
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> {dict.codeButton}
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
