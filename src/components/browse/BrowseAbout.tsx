import { Calendar, MapPin, Users, Zap, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function BrowseAbout() {
	const { t } = useTranslation()

	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 xs:gap-20 lg:gap-12'>

			<div className='relative' role='list' aria-label='Education timeline'>
				<div className='hidden xs:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400'></div>

				<div className='relative flex items-start mb-8' role='listitem'>
					<div className='hidden xs:block absolute left-4 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-50 dark:border-gray-950 animate-pulse shadow-lg shadow-blue-400/50'></div>
					<div className='ml-0 xs:ml-12 w-full'>
						<div className='bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/20 hover:bg-gray-50 dark:hover:bg-gray-900/90 shadow-lg dark:shadow-none'>
							<div className='flex items-start justify-between mb-3'>
								<h3 className='text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-300'>
									{t('about.education-heading1')}
								</h3>
								<Award className='w-6 h-6 text-green-600 dark:text-green-300 flex-shrink-0' />
							</div>
							<div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 mb-3'>
								<div className='flex items-center'>
									<Calendar className='w-4 h-4 mr-2' />
									<span>2022 - 2026</span>
								</div>
								<a
									href='https://inha.uz'
									target='_blank'
									className='flex items-center hover:text-gray-800 dark:hover:text-gray-200 transition'
								>
									<MapPin className='w-4 h-4 mr-2' />
									<span>{t('about.university')}</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className='relative flex items-start' role='listitem'>
					<div className='hidden xs:block absolute left-4 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-50 dark:border-gray-950 shadow-lg shadow-purple-400/50'></div>
					<div className='ml-0 xs:ml-12 w-full'>
						<div className='bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/10 hover:bg-gray-50 dark:hover:bg-gray-900/90 shadow-lg dark:shadow-none'>
							<h3 className='text-lg xs:text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-300 mb-4 flex items-center'>
								{t('about.education-heading2')}
							</h3>
							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<span className='text-gray-800 dark:text-gray-200 font-medium'>
										{t('about.uzbek-level')}
									</span>
									<div
										className='flex gap-1'
										role='progressbar'
										aria-label='Uzbek proficiency'
									>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
									</div>
								</div>

								<div className='flex items-center justify-between'>
									<span className='text-gray-800 dark:text-gray-200 font-medium'>
										{t('about.english-level')}
									</span>
									<div
										className='flex gap-1'
										role='progressbar'
										aria-label='English proficiency'
									>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300'></div>
										<div className='w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div
				className='relative'
				role='list'
				aria-label='Work experience timeline'
			>
				<div className='hidden xs:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400'></div>

				<div className='relative flex items-start mb-8' role='listitem'>
					<div className='hidden xs:block absolute left-4 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-50 dark:border-gray-950 animate-pulse shadow-lg shadow-blue-400/50'></div>
					<div className='ml-0 xs:ml-12 w-full'>
						<div className='bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/20 hover:bg-gray-50 dark:hover:bg-gray-900/90 shadow-lg dark:shadow-none'>
							<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3'>
								<h3 className='text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-300'>
									{t('about.experience-current-role')}
								</h3>
								<span className='px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-300 rounded-full text-sm flex items-center w-fit border border-green-500/30'>
									<Zap className='w-3 h-3 mr-1' />
									{t('about.status')}
								</span>
							</div>
							<div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 mb-3'>
								<div className='flex items-center'>
									<Calendar className='w-4 h-4 mr-2' />
									<span>{t('about.experience-current-period')}</span>
								</div>
								<a
									href='https://tilmoch.ai'
									target='_blank'
									className='flex items-center hover:text-gray-800 dark:hover:text-gray-200 transition'
								>
									<MapPin className='w-4 h-4 mr-1' />
									<span className='bg-gradient-to-r from-red-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-bold'>
										{t('about.experience-current-company')}
									</span>
								</a>
							</div>
							<p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
								{t('about.experience-current-description')}
							</p>
							<div className='flex flex-wrap gap-2'>
								{[
									'Angular',
									'Rx.js',
									'React.js',
									'Javascript',
									'TypeScript',
								].map(tech => (
									<span
										key={tech}
										className='px-3 py-1 bg-blue-100 dark:bg-blue-400/10 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-400/20 transition-colors border border-blue-200 dark:border-blue-400/20'
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className='relative flex items-start mb-8' role='listitem'>
					<div className='hidden xs:block absolute left-4 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-50 dark:border-gray-950 shadow-lg shadow-purple-400/50'></div>
					<div className='ml-0 xs:ml-12 w-full'>
						<div className='bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/10 hover:bg-gray-50 dark:hover:bg-gray-900/90 shadow-lg dark:shadow-none'>
							<h3 className='text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-300 mb-3'>
								{t('about.experience-freelance-role')}
							</h3>
							<div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 mb-3'>
								<div className='flex items-center'>
									<Calendar className='w-4 h-4 mr-2' />
									<span>{t('about.experience-freelance-period')}</span>
								</div>
								<div className='flex hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition items-center'>
									<Users className='w-4 h-4 mr-2' />
									<span>{t('about.experience-freelance-company')}</span>
								</div>
							</div>
							<p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
								{t('about.experience-freelance-description')}
							</p>
							<div className='flex flex-wrap gap-2'>
								{['JavaScript', 'TypeScript', 'React.js', 'Next.js'].map(
									tech => (
										<span
											key={tech}
											className='px-3 py-1 bg-purple-100 dark:bg-purple-400/10 text-purple-700 dark:text-purple-300 rounded-full text-sm hover:bg-purple-200 dark:hover:bg-purple-400/20 transition-colors border border-purple-200 dark:border-purple-400/20'
										>
											{tech}
										</span>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
