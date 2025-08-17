import { skills } from '@/util/skills'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const BrowseSkills = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 100)
		return () => clearTimeout(timer)
	}, [])

	const proficientSkills = skills.filter(skill => skill.type === 'Proficient')
	const priorExperienceSkills = skills.filter(
		skill => skill.type === 'Prior Experience'
	)

	const { t } = useTranslation()

	return (
		<div className='max-w-5xl mx-auto space-y-8'>
			<div className='space-y-4'>
				<div className='flex items-center gap-3'>
					<div className='flex items-center gap-2'>
						<div className='w-3 h-3 bg-green-500 rounded-full'></div>
						<h3 className='text-lg font-semibold'>{t('skills.proficient')}</h3>
					</div>
				</div>

				<div
					className={`flex flex-wrap gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
						}`}
				>
					{proficientSkills.map((skill, index) => (
						<div
							key={skill.name}
							className={`px-3 py-2 xs:text-sm text-xs font-medium rounded-full border transition-all duration-300 cursor-pointer hover:scale-105 ${skill.color}`}
							style={{
								transitionDelay: `${index * 80}ms`,
							}}
						>
							<span>{skill.name}</span>
						</div>
					))}
				</div>
			</div>

			<div className='space-y-4'>
				<div className='flex items-center gap-3'>
					<div className='flex items-center gap-2'>
						<div className='w-3 h-3 bg-blue-500 rounded-full'></div>
						<h3 className='text-lg font-semibold'>{t('skills.prior')}</h3>
					</div>
				</div>

				<div
					className={`flex flex-wrap gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
						}`}
					style={{ transitionDelay: '200ms' }}
				>
					{priorExperienceSkills.map((skill, index) => (
						<div
							key={skill.name}
							className={`px-3 py-2 xs:text-sm text-xs font-medium rounded-full border transition-all duration-300 cursor-pointer hover:scale-105 ${skill.color}`}
							style={{
								transitionDelay: `${(index + proficientSkills.length) * 80}ms`,
							}}
						>
							<span>{skill.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default BrowseSkills
