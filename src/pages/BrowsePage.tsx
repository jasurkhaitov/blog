import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "../components/ui/button"
import ProjectCard from "../components/project-card"
import SkillBadge from "../components/skill-badge"
import AnimatedSection from "../components/animated-section"
import MobileNav from "../components/mobile-nav"
import { ThemeToggle } from "../components/theme-toggle"
import { LanguageSwitcher } from "../components/language-switcher"
import { getDictionary } from "../lang"
import BrandIcon from '@/components/shared/BrandIcon'

interface BrowsePageProps {
  setLanguage: (lang: string) => void
}

export default function BrowsePage({ setLanguage }: BrowsePageProps) {
  const { lang = "en" } = useParams<{ lang: string }>()
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dictionary, setDictionary] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const validLangs = ["en", "es", "fr", "ru", "uz"]
    if (!validLangs.includes(lang)) {
      navigate("/en", { replace: true })
      return
    }

    setLanguage(lang)

    const loadDictionary = async () => {
      const dict = await getDictionary(lang as "en" | "es" | "fr" | "ru" | "uz")
      setDictionary(dict)
      setLoading(false)
    }

    loadDictionary()
  }, [lang, navigate, setLanguage])

  if (loading || !dictionary) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen max-w-7xl m-auto px-4 bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 py-1 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between">
          <BrandIcon/>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              {dictionary.nav.home}
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              {dictionary.nav.about}
            </a>
            <a href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              {dictionary.nav.skills}
            </a>
            <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              {dictionary.nav.projects}
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              {dictionary.nav.contact}
            </a>
          </nav>

          {/* Theme and Language Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher currentLang={lang} />

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <MobileNav lang={lang} dictionary={dictionary} />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection id="home" className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {dictionary.hero.greeting} <span className="text-primary">Alex</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">{dictionary.hero.role}</h2>
              <p className="text-muted-foreground max-w-[600px]">{dictionary.hero.description}</p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="#contact">
                    {dictionary.hero.contactButton} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">{dictionary.hero.projectsButton}</a>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/400x400"
                alt="Developer portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="container py-24 md:py-32 border-t">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{dictionary.about.title}</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">{dictionary.about.subtitle}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://placehold.co/400x400"
                  alt="About me"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p>{dictionary.about.paragraph1}</p>
                <p>{dictionary.about.paragraph2}</p>
                <p>{dictionary.about.paragraph3}</p>
                <Button asChild>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    {dictionary.about.resumeButton}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="container py-24 md:py-32 border-t">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{dictionary.skills.title}</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">{dictionary.skills.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="HTML5" level={95} />
              <SkillBadge name="CSS3" level={90} />
              <SkillBadge name="JavaScript" level={92} />
              <SkillBadge name="TypeScript" level={85} />
              <SkillBadge name="React" level={90} />
              <SkillBadge name="Next.js" level={88} />
              <SkillBadge name="Tailwind CSS" level={95} />
              <SkillBadge name="Framer Motion" level={80} />
              <SkillBadge name="Redux" level={85} />
              <SkillBadge name="Node.js" level={75} />
              <SkillBadge name="Git" level={88} />
              <SkillBadge name="Figma" level={80} />
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="container py-24 md:py-32 border-t">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{dictionary.projects.title}</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">{dictionary.projects.subtitle}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-featured online store with product filtering, cart functionality, and payment integration."
                tags={["React", "Next.js", "Tailwind CSS", "Stripe"]}
                imageUrl="https://placehold.co/500x300"
                demoUrl="https://example.com"
                repoUrl="https://github.com"
                dictionary={dictionary.projects}
              />
              <ProjectCard
                title="Task Management App"
                description="A drag-and-drop task management application with real-time updates and team collaboration features."
                tags={["React", "TypeScript", "Firebase", "Framer Motion"]}
                imageUrl="https://placehold.co/500x300"
                demoUrl="https://example.com"
                repoUrl="https://github.com"
                dictionary={dictionary.projects}
              />
              <ProjectCard
                title="Portfolio Website"
                description="A responsive portfolio website with smooth animations and dark mode support."
                tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
                imageUrl="https://placehold.co/500x300"
                demoUrl="https://example.com"
                repoUrl="https://github.com"
                dictionary={dictionary.projects}
              />
              <ProjectCard
                title="Weather Dashboard"
                description="A weather application that displays current and forecasted weather data with interactive visualizations."
                tags={["React", "Chart.js", "Weather API"]}
                imageUrl="https://placehold.co/500x300"
                demoUrl="https://example.com"
                repoUrl="https://github.com"
                dictionary={dictionary.projects}
              />
              <ProjectCard
                title="Recipe Finder"
                description="A recipe search application with filtering options, favorites, and step-by-step instructions."
                tags={["React", "Context API", "CSS Modules"]}
                imageUrl="https://placehold.co/500x300"
                demoUrl="https://example.com"
                repoUrl="https://github.com"
                dictionary={dictionary.projects}
              />
              <ProjectCard
                title="Blog Platform"
                description="A content management system with markdown support, categories, and user authentication."
                tags={["Next.js", "MongoDB", "NextAuth.js"]}
                imageUrl="https://placehold.co/500x300"
                demoUrl="https://example.com"
                repoUrl="https://github.com"
                dictionary={dictionary.projects}
              />
            </div>
            <div className="text-center">
              <Button asChild variant="outline">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  {dictionary.projects.viewMore} <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="container py-24 md:py-32 border-t">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{dictionary.contact.title}</h2>
              <p className="text-muted-foreground max-w-[500px]">{dictionary.contact.subtitle}</p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/username
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="h-5 w-5 text-primary" />
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @username
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {dictionary.contact.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder={dictionary.contact.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {dictionary.contact.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder={dictionary.contact.emailPlaceholder}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {dictionary.contact.subject}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder={dictionary.contact.subjectPlaceholder}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {dictionary.contact.message}
                  </label>
                  <textarea
                    id="message"
                    className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder={dictionary.contact.messagePlaceholder}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {dictionary.contact.sendButton}
                </Button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Alex Smith. {dictionary.footer.rights}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs hover:underline underline-offset-4">
              {dictionary.footer.terms}
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              {dictionary.footer.privacy}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
