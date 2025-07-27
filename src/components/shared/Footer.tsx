import { useTranslation } from 'react-i18next'

export default function Footer() {
	const { t } = useTranslation()
	return (
		<footer className='border-t py-6 md:py-8'>
			<p className='text-center text-sm text-muted-foreground font-mono px-0 xs:px-4 md:text-left'>
				&copy; {new Date().getFullYear()} Jasur | {t('footer.rights')}
			</p>
		</footer>
	)
}
