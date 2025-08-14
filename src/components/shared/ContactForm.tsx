import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { useEffect, useState, type FormEvent, type JSX } from 'react'
import { FaSpinner, FaCheck, FaTimes } from 'react-icons/fa'
import { telegramBotAPI } from '@/util/data'

interface FormData {
	name: string
	email: string
	subject: string
	message: string
}

interface ButtonState {
	text: string
	icon: JSX.Element | null
}

export default function ContactForm() {
	const { t } = useTranslation()

	const [isSending, setIsSending] = useState(false)
	const [buttonState, setButtonState] = useState<ButtonState>({
		text: t('contact.sendButton'),
		icon: null,
	})

	const [form, setForm] = useState<FormData>({
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

	const resetForm = () => {
		setForm({ name: '', email: '', subject: '', message: '' })
	}

	const sendToTelegram = async (formData: FormData): Promise<boolean> => {
		const sentAt = new Date().toLocaleString()
		const message = `<b>📩 New Contact Form Submission | #portfolio</b>\n\n<b>Full Name:</b> ${formData.name}\n<b>Email:</b> ${formData.email}\n<b>Subject:</b> ${formData.subject}\n<b>Message:</b> ${formData.message}\n\n<b>Sent at:</b> ${sentAt}`

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

			return res.ok
		} catch (error) {
			console.error('Telegram send error:', error)
			return false
		}
	}

	const updateButtonState = (text: string, icon: JSX.Element | null) => {
		setButtonState({ text, icon })
	}

	const resetButtonAfterDelay = () => {
		setTimeout(() => {
			setButtonState({
				text: t('contact.sendButton'),
				icon: null,
			})
		}, 2000)
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		if (telegramBotAPI.disableForm) return

		setIsSending(true)
		updateButtonState(t('contact.sending'), <FaSpinner className='animate-spin' />)

		try {
			const success = await sendToTelegram(form)

			if (success) {
				updateButtonState(t('contact.sent'), <FaCheck />)
				resetForm()
			} else {
				throw new Error('Failed to send message')
			}
		} catch (error) {
			console.error('Form submission error:', error)
			updateButtonState(t('contact.error'), <FaTimes />)
		} finally {
			setIsSending(false)
			resetButtonAfterDelay()
		}
	}

	return (
		<div className='bg-card p-6 rounded-lg shadow-sm'>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div className='grid gap-4 sm:grid-cols-2'>
					<div className='flex flex-col items-start gap-2'>
						<label htmlFor='name' className='text-sm font-medium'>
							{t('contact.name')}
						</label>
						<input
							id='name'
							type='text'
							value={form.name}
							onChange={handleChange}
							required
							disabled={isSending}
							className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
							placeholder={t('contact.namePlaceholder')}
						/>
					</div>
					<div className='flex flex-col items-start gap-2'>
						<label htmlFor='email' className='text-sm font-medium'>
							{t('contact.email')}
						</label>
						<input
							id='email'
							type='email'
							value={form.email}
							onChange={handleChange}
							required
							disabled={isSending}
							className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
							placeholder={t('contact.emailPlaceholder')}
						/>
					</div>
				</div>
				<div className='flex flex-col items-start gap-2'>
					<label htmlFor='subject' className='text-sm font-medium'>
						{t('contact.subject')}
					</label>
					<input
						id='subject'
						type='text'
						value={form.subject}
						onChange={handleChange}
						required
						disabled={isSending}
						className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
						placeholder={t('contact.subjectPlaceholder')}
					/>
				</div>
				<div className='flex flex-col items-start gap-2'>
					<label htmlFor='message' className='text-sm font-medium'>
						{t('contact.message')}
					</label>
					<textarea
						id='message'
						value={form.message}
						onChange={handleChange}
						required
						disabled={isSending}
						className='w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
						placeholder={t('contact.messagePlaceholder')}
					/>
				</div>
				<Button
					type='submit'
					disabled={isSending}
					className='w-full flex items-center justify-center gap-2'
				>
					{buttonState.icon}
					{buttonState.text}
				</Button>
			</form>
		</div>
	)
}