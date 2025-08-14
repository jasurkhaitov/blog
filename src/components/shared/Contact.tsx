import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ContactForm from './ContactForm'

export default function Contact() {
	const { t } = useTranslation()

	return (
		<div className='grid gap-8 px-0 xs:px-5 sm:px-10 lg:px-20 md:grid-cols-2 items-center'>
			<div className='space-y-4'>
				<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
					{t('contact.title')}
				</h2>
				<div className='space-y-4 pt-4'>
					<div className='flex items-center gap-3'>
						<Mail className='h-5 w-5 text-primary' />
						<a
							href='mailto:xaitovjasur0@gmail.com'
							className='hover:text-blue-500 transition-colors'
						>
							xaitovjasur0@gmail.com
						</a>
					</div>
					<div className='flex items-center gap-3'>
						<Linkedin className='h-5 w-5 text-primary' />
						<a
							href='https://linkedin.com/in/jasurkhaitov'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-500 transition-colors'
						>
							linkedin.com/in/jasurkhaitov
						</a>
					</div>
					<div className='flex items-center gap-3'>
						<Github className='h-5 w-5 text-primary' />
						<a
							href='https://github.com/jasurkhaitov'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-500 transition-colors'
						>
							@jasurkhaitov
						</a>
					</div>
				</div>
			</div>

			<ContactForm />
		</div>
	)
}