import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { useTranslation } from 'react-i18next'
import WhoIAmShows from '@/components/whoiam/WhoIAmShows'
import { movies, series } from '@/components/whoiam/data'
import WhoIAmDesc from '@/components/whoiam/WhoIAmDesc'
import WhoIAmPodcasts from '@/components/whoiam/WhoIAmPodcasts'
import WhoIAmContact from '@/components/whoiam/WhoIAmContact'
import AnimatedSection from '@/components/shared/AnimatedSection'

export default function WhoIAmPage() {
	const { t } = useTranslation()

	return (
		<div className='min-h-screen max-w-7xl m-auto px-4 bg-background'>
			<Navbar />

			<main className='max-w-3xl min-h-screen mx-auto py-12 text-md'>
				<AnimatedSection>
					<h1 className='text-4xl font-bold mb-6 text-primary tracking-tight'>
						{t('whoami.title')}
					</h1>
				</AnimatedSection>

				<div className='space-y-6'>
					<AnimatedSection>
						<WhoIAmDesc />
					</AnimatedSection>

					<AnimatedSection>
						<WhoIAmShows
							category='movies'
							title={t('shows.movies.title')}
							movies={movies}
						/>
					</AnimatedSection>

					<AnimatedSection>
						<WhoIAmShows
							category='series'
							title={t('shows.series.title')}
							movies={series}
						/>
					</AnimatedSection>

					<AnimatedSection>
						<WhoIAmPodcasts />
					</AnimatedSection>

					<AnimatedSection>
						<p className='text-muted-foreground'>{t('whoami.description5')}</p>
					</AnimatedSection>

					<AnimatedSection>
						<p className='text-green-500 font-medium font-mono'>
							{t('whoami.closing')}
						</p>
					</AnimatedSection>

					<AnimatedSection>
						<WhoIAmContact />
					</AnimatedSection>
				</div>
			</main>

			<Footer />
		</div>
	)
}
