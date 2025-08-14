import { useState } from 'react'
import { Menu, MessageCircle, BookOpen, Contact, User } from 'lucide-react'
import { Button } from '../ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet'
import { Link, useNavigate } from 'react-router-dom'
import { languages } from '@/util/constant'
import { useTranslation } from 'react-i18next'

interface MobileNavProps {
	lang?: string
}

export default function NavbarMobile({ lang }: MobileNavProps) {
	const [open, setOpen] = useState(false)
	const navigate = useNavigate()
	const { t } = useTranslation()

	const currentLang = lang || 'en'

	const switchLanguage = (newLang: string) => {
		const currentPath = window.location.pathname
		const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '') || '/'

		navigate(`/${newLang}${pathWithoutLang}`, { replace: true })
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon'>
					<Menu className='h-6 w-6' />
					<span className='sr-only'>Toggle menu</span>
				</Button>
			</SheetTrigger>

			<SheetContent side='right' className='w-[300px] sm:w-[400px] p-0'>
				<div className='flex mt-16 border flex-col gap-3 p-3 pt-0'>
					<SheetTitle className='sr-only'>Navigation Menu</SheetTitle>

					<a
						href='https://t.me/JasXDev'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-3 rounded-md px-4 py-3 border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
					>
						<MessageCircle className='h-5 w-5' />
						{t('nav.channel')}
					</a>

					<Link
						to={`/${currentLang}/blog`}
						className='flex items-center gap-3 rounded-md px-4 py-3 border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
						onClick={() => setOpen(false)}
					>
						<BookOpen className='h-5 w-5' />
						{t('nav.blog')}
					</Link>

					<Link
						to={`/${currentLang}/whoiam`}
						className='flex items-center gap-3 rounded-md px-4 py-3 border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
						onClick={() => setOpen(false)}
					>
						<User className='h-5 w-5' />
						{t('nav.whoiam')}
					</Link>

					<Link
						to={`/${currentLang}/contact`}
						className='flex items-center gap-3 rounded-md px-4 py-3 border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
						onClick={() => setOpen(false)}
					>
						<Contact className='h-5 w-5' />
						{t('nav.contact')}
					</Link>
				</div>

				<SheetDescription className='sr-only'></SheetDescription>

				<div className='px-5'>
					<h3 className='text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2'>
						{t('nav.lang')}
					</h3>
					<div className='grid grid-cols-3 gap-2'>
						{languages.map(language => (
							<Button
								key={language.code}
								variant={
									currentLang === language.code ? 'secondary' : 'outline'
								}
								size='sm'
								onClick={() => switchLanguage(language.code)}
								className='flex items-center gap-2 h-10'
							>
								<span className='text-base'>{language.flag}</span>
								<span className='text-xs font-medium'>
									{language.code.toUpperCase()}
								</span>
							</Button>
						))}
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
