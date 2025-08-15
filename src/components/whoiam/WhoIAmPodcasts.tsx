import { useTranslation } from 'react-i18next'
import { podcasts } from '@/components/whoiam/data'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '../ui/badge'

export default function WhoIAmPodcasts() {
	const { t } = useTranslation()

	const getLangColor = (lang: string) => {
		switch (lang) {
			case 'uz':
				return 'bg-green-300 text-green-700'
			case 'en':
				return 'bg-blue-300 text-blue-700'
			case 'ru':
				return 'bg-red-300 text-red-700'
			default:
				return 'bg-muted text-muted-foreground'
		}
	}

	return (
		<div className='w-full'>
			<h2 className='text-2xl font-bold text-primary mb-6'>
				{t('shows.podcasts.title')}
			</h2>

			<div className='grid gap-4 sm:gap-5'>
				{podcasts.map((podcast, idx) => (
					<div
						key={podcast.key}
						className='transition-all border-b pb-4 sm:pb-5 duration-200 flex items-center justify-between gap-2 mb-3'
					>
						<h3 className='text-base sm:text-lg font-semibold text-foreground flex items-center gap-1 xs:gap-2'>
							{idx + 1}.{' '}{t(`shows.podcasts.items.${podcast.key}.name`)}
						</h3>

						<div className='flex flex-wrap items-center gap-2 sm:gap-4'>
							<Badge
								className={`text-sm px-3 py-[1px] hidden xs:block rounded-full ${getLangColor(podcast.lang)}`}
							>
								{podcast.lang}
							</Badge>
							<Button
								asChild
								variant='outline'
								size='sm'
							>
								<a
									href={podcast.url}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-1'
								>
									{t('common.watch') || 'Watch'}
									<ExternalLink className='w-4 h-4' />
								</a>
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
