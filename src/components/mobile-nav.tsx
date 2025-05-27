"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"

interface MobileNavProps {
  lang: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dictionary: any
}

export default function MobileNav({ lang, dictionary }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const dict = dictionary

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex justify-end mb-8 mt-2">
          <div className="flex gap-2">
            <ThemeToggle />
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <a
            href="#home"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            {dict.nav.home}
          </a>
          <a
            href="#about"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            {dict.nav.about}
          </a>
          <a
            href="#skills"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            {dict.nav.skills}
          </a>
          <a
            href="#projects"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            {dict.nav.projects}
          </a>
          <a
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={handleLinkClick}
          >
            {dict.nav.contact}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
