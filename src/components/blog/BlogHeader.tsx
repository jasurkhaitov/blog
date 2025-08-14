import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal"
import { useTranslation } from "react-i18next"

export default function BlogHeader() {
  const { t } = useTranslation()

  return (
    <Terminal>
      <TypingAnimation>{t("blog.header.init")}</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>{t("blog.header.mode")}</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>{t("blog.header.fetching")}</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>{t("blog.header.markdown")}</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>{t("blog.header.success")}</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>{t("blog.header.logs")}</span>
      </AnimatedSpan>

      <TypingAnimation delay={4000} className="text-muted-foreground">
        {t("blog.header.welcome")}
      </TypingAnimation>
    </Terminal>
  )
}
