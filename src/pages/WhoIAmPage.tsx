import Navbar from '@/components/shared/Navbar'
import GOT from '../assets/img/got.webp'
import Dark from '../assets/img/dark.webp'
import Footer from '@/components/shared/Footer'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Contact from '@/components/shared/Contact'

export default function WhoIAmPage() {
	const { t } = useTranslation()

	return (
		<div className='min-h-screen bg-background px-4'>
			<Navbar />

			<main className='max-w-3xl mx-auto py-12 text-md'>
				<h1 className='text-4xl font-bold mb-6 text-primary tracking-tight'>
					{t('whoami.title')}
				</h1>

				<div className='space-y-6'>
					<p className='text-muted-foreground'>{t('whoami.intro')}</p>

					<img
						src={GOT}
						alt='Game of Thrones'
						className='hidden lg:block w-full rounded-xl object-cover shadow'
					/>

					<p className='text-muted-foreground'>{t('whoami.description1')}</p>

					<p className='text-muted-foreground'>{t('whoami.description2')}</p>

					<p className='text-muted-foreground'>{t('whoami.description3')}</p>

					<p className='text-muted-foreground'>{t('whoami.description4')}</p>

					<img
						src={Dark}
						alt='Dark series image'
						className='hidden lg:block w-full rounded-xl object-cover shadow'
					/>

					<p className='text-muted-foreground'>{t('whoami.description5')}</p>

					<p className='text-green-500 font-medium font-mono'>
						{t('whoami.closing')}
					</p>
				</div>
			</main>

			<AnimatedSection className='py-10 md:py-25 border-t'>
				<Contact />
			</AnimatedSection>

			<Footer />
		</div>
	)
}
