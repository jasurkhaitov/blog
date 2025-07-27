import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { languages } from '@/util/constant'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export function LanguageSwitcher() {
	const navigate = useNavigate()
	const { i18n } = useTranslation()
	const { lang } = useParams()

	const currentLang = lang || 'en'

	useEffect(() => {
		if (currentLang && currentLang !== i18n.language) {
			i18n.changeLanguage(currentLang)
		}
	}, [currentLang, i18n])

	const switchLanguage = (newLang: string) => {
		const currentPath = window.location.pathname
		const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '') || '/'

		navigate(`/${newLang}${pathWithoutLang}`, { replace: true })
	}

	const currentLangFlag = languages.find(l => l.code === currentLang)?.flag

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<span className='w-5'>{currentLangFlag || '🌐'}</span>
					<span className='sr-only'>Switch language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{languages.map(language => (
					<DropdownMenuItem
						key={language.code}
						onClick={() => switchLanguage(language.code)}
						className={currentLang === language.code ? 'bg-muted' : ''}
					>
						<span className='mr-2'>{language.flag}</span>
						{language.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
