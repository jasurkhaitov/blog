import { Link, useParams } from 'react-router-dom'
import BrandIcon from './BrandIcon'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ModeToggle } from './ModeToggle'
import NavbarMobile from './NavbarMobile'
import { useTranslation } from 'react-i18next'

export default function Navbar({ page = '' }: { page?: string }) {
	const { t } = useTranslation()
	const { lang } = useParams()

	return (
		<header className='md:py-1 px-3 md:px-5 w-full border-b sticky top-0 z-40 py-1 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='flex h-16 items-center justify-between'>
				<BrandIcon page={page} />

				<div className='flex items-center gap-3 md:gap-6'>
					<a
						href='https://t.me/JasXDev'
						target='_blank'
						className='hidden md:flex text-base text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all font-mono font-medium'
					>
						{t('nav.channel')}
					</a>

					{
						page !== 'contact' && <><div className='hidden md:flex'>|</div>

							<Link
								to={`/${lang}/contact`}
								className='hidden md:flex text-base text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all font-mono font-medium'
							>
								{t('nav.contact')}
							</Link></>
					}

					{
						page !== 'blog' && page !== 'post' && <><div className='hidden md:flex'>|</div>

							<Link
								to={`/${lang}/blog`}
								className='hidden md:flex text-base text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all font-mono font-medium'
							>
								{t('nav.blog')}
							</Link></>
					}

					<ModeToggle />

					<div className='hidden md:flex'>
						<LanguageSwitcher />
					</div>

					<div className='md:hidden'>
						<NavbarMobile page={page} lang={lang} />
					</div>
				</div>
			</div>
		</header>
	)
}
