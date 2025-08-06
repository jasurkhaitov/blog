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
				{podcasts.map(podcast => (
					<div
						key={podcast.key}
						className='transition-all border-b pb-4 sm:pb-5 duration-200 flex items-center justify-between gap-2 mb-3'
					>
							<h3 className='text-base sm:text-lg font-semibold text-foreground flex items-center gap-1 xs:gap-2'>
								<svg
									className='w-6 h-4 translate-y-0.5 shrink-0 hidden xxs:block'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 256 180'
								>
									<path
										fill='#f00'
										d='M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134'
									/>
									<path
										fill='#fff'
										d='m102.421 128.06l66.328-38.418l-66.328-38.418z'
									/>
								</svg>
								{t(`shows.podcasts.items.${podcast.key}.name`)}
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
