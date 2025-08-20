import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { useEffect, useState, type FormEvent, type JSX } from 'react'
import { FaSpinner, FaCheck, FaTimes } from 'react-icons/fa'
import { telegramBotAPI } from '@/util/data'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import AnimatedSection from '@/components/shared/AnimatedSection'

export default function ContactPage() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t("title.contact")
  }, [t])

  const [isSending, setIsSending] = useState(false)
  const [buttonState, setButtonState] = useState({
    text: t('contact.sendButton'),
    icon: null as JSX.Element | null,
  })

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  useEffect(() => {
    if (!isSending) {
      setButtonState({
        text: t('contact.sendButton'),
        icon: null,
      })
    }
  }, [isSending, t])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (telegramBotAPI.disableForm) return

    setIsSending(true)
    setButtonState({
      text: t('contact.sending'),
      icon: <FaSpinner className='animate-spin' />,
    })

    const sentAt = new Date().toLocaleString()

    const message = `<b>📩 New Contact Form Submission | #portfolio</b>\n\n<b>Full Name:</b> ${form.name}\n<b>Email:</b> ${form.email}\n<b>Subject:</b> ${form.subject}\n<b>Message:</b> ${form.message}\n\n<b>Sent at:</b> ${sentAt}`

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${telegramBotAPI.botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramBotAPI.chatId,
            text: message,
            parse_mode: 'HTML',
          }),
        }
      )

      if (res.ok) {
        setButtonState({
          text: t('contact.sent'),
          icon: <FaCheck />,
        })
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (err) {
      console.error('Telegram send error:', err)
      setButtonState({
        text: t('contact.error'),
        icon: <FaTimes />,
      })
    } finally {
      setIsSending(false)
      setTimeout(() => {
        setButtonState({
          text: t('contact.sendButton'),
          icon: null,
        })
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen max-w-7xl m-auto px-4 bg-background flex flex-col">
      <Navbar page='contact' />

      <main className="flex-grow w-full flex items-center justify-center mx-auto">
        <AnimatedSection>
          <div className="bg-card w-md p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t('contact.name')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('contact.email')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t('contact.subject')}
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              <Button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2"
              >
                {buttonState.icon}
                {buttonState.text}
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}