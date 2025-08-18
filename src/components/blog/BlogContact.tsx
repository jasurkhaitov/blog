import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function BlogContact() {
  const { t } = useTranslation()

  return (
    <div className="pt-6 border-t space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">
        {t('common.contact')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <ContactItem
            icon={<Mail className="h-5 w-5 text-primary" />}
            link="mailto:xaitovjasur0@gmail.com"
            text="xaitovjasur0@gmail.com"
          />
          <ContactItem
            icon={<Github className="h-5 w-5 text-primary" />}
            link="https://github.com/jasurkhaitov"
            text="github.com/jasurkhaitov"
          />
          <ContactItem
            icon={<Linkedin className="h-5 w-5 text-primary" />}
            link="https://linkedin.com/in/jasurkhaitov"
            text="linkedin.com/in/jasurkhaitov"
          />
          <ContactItem
            icon={<Send className="h-5 w-5 text-primary" />}
            link="https://t.me/jasurkhaitov"
            text="@jasurkhaitov"
          />
        </div>

        <div>
          <a
            href="https://t.me/jasurdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors font-medium text-base"
          >
            @jasurdev – {t("whoami.contact.blog")}
          </a>
          <p className="text-muted-foreground text-sm mt-2">
            {t("whoami.contact.desc")}
          </p>
        </div>
      </div>
    </div>
  )
}

function ContactItem({ icon, link, text }: { icon: React.ReactNode, link: string, text: string }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-colors"
      >
        {text}
      </a>
    </div>
  )
}
