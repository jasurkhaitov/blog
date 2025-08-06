import { useTranslation } from 'react-i18next'
import { ExternalLink, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'

interface MovieListProps {
	movies: {
		img: string
		name: string
		imdb: number
		year: number
		url: string
		genres: string[]
	}[]
	title: string
	category: 'movies' | 'series'
}

export default function WhoIAmShows({ movies: moviesProp, category }: MovieListProps) {
	const { t } = useTranslation()

	return (
		<div className='w-full'>
			<h2 className='text-2xl font-bold text-primary mb-6'>{t(`shows.${category}.title`)}</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{moviesProp.map((movie, index) => (
					<Card key={index} className='overflow-hidden p-0 gap-0 flex flex-col'>
						<div className='aspect-[3/4] relative'>
							<img
								src={movie.img}
								alt={movie.name}
								className='w-full h-full object-cover absolute inset-0'
							/>
						</div>

						<CardContent className='p-4 flex flex-col justify-between flex-grow'>
							<div className='mb-2'>
								<h3 className='font-semibold text-base line-clamp-2'>
									{t(`shows.${category}.items.${movie.name}`, movie.name)}
								</h3>
								<span className='text-sm text-muted-foreground'>
									{movie.year}
								</span>
							</div>

							<div className='flex flex-wrap gap-1 mb-3'>
								{movie.genres.map(genre => (
									<Badge key={genre} variant='secondary' className='text-xs'>
										{genre}
									</Badge>
								))}
							</div>

							<div className='flex items-center justify-between mt-auto'>
								<div className='flex items-center gap-1 text-sm'>
									<Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
									<span className='font-medium'>{movie.imdb}</span>
								</div>

								<Link
									to={movie.url}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex font-bold items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors'
								>
									IMDb <ExternalLink className='w-3 h-3' />
								</Link>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
