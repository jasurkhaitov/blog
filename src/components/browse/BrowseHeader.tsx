import { Link, useParams } from 'react-router-dom'
import AnimatedSection from '../shared/AnimatedSection'
import { Button } from '../ui/button'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function BrowseHeader() {
	const { lang } = useParams<{ lang: string }>()
	const { t } = useTranslation()

	const currentLang = lang || 'en'

	return (
		<AnimatedSection className='m-auto py-24 px-4 md:py-32'>
			<div className='grid gap-16 md:gap-8 md:grid-cols-2 items-center'>
				<div>
					<div className='flex items-center mb-2 gap-5 justify-start font-extrabold'>
						<span className='text-primary font-montserrat text-4xl md:text-5xl'>
							Jasur
						</span>
						<span className='hidden xs:block text-primary font-montserrat text-4xl md:text-5xl'>
							/
						</span>
						<span className='hidden xs:block bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent font-montserrat text-4xl md:text-5xl'>
							JasX
						</span>
					</div>

					<h2 className='text-2xl mb-2 font-semibold text-foreground'>
						{t('hero.role')}
					</h2>

					<p className='text-muted-foreground max-w-[600px]'>
						{t('hero.description')}
					</p>

					<div className='flex gap-4 mt-5'>
						<Button asChild>
							<Link to={`/${currentLang}/blog`}>{t('hero.blogButton')}</Link>
						</Button>
						<Button variant='outline' asChild>
							<Link to={`/${currentLang}/whoiam`}>{t('hero.aboutButton')}</Link>
						</Button>
					</div>

					<div className='flex gap-4 pt-4'>
						<a
							href='https://github.com/jasurkhaitov'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button variant='outline' size='icon'>
								<Github className='h-5 w-5' />
								<span className='sr-only'>GitHub</span>
							</Button>
						</a>

						<a
							href='https://www.linkedin.com/in/jasurkhaitov'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button variant='outline' size='icon'>
								<Linkedin className='h-5 w-5' />
								<span className='sr-only'>LinkedIn</span>
							</Button>
						</a>

						<a
							href='https://t.me/jasurkhaitov'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button variant='outline' size='icon'>
								<Send className='h-5 w-5' />
								<span className='sr-only'>Telegram</span>
							</Button>
						</a>

						<a
							href='mailto:xaitovjasur0@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button variant='outline' size='icon'>
								<Mail className='h-5 w-5' />
								<span className='sr-only'>Mail</span>
							</Button>
						</a>
					</div>
				</div>

				<div className='relative hidden xs:block h-[300px] md:h-[400px] rounded-lg overflow-hidden'>
					<img
						src='https://cdnn21.img.ria.ru/images/07e4/02/11/1564895035_0:0:1910:1074_1920x0_80_0_0_18dd3105a2f351afab589d5285b107e3.jpg'
						alt='Developer portrait'
						className='absolute inset-0 w-full h-full object-cover'
					/>
				</div>
			</div>
		</AnimatedSection>
	)
}
