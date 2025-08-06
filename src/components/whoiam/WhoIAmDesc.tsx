import { useTranslation } from 'react-i18next'
import {
	FaBusinessTime,
	FaChartBar,
	FaNetworkWired,
	FaTerminal,
	FaWaveSquare,
} from 'react-icons/fa'

export default function WhoIAmDesc() {
	const { t } = useTranslation()
	return (
		<div className='space-y-6'>
			<p className='text-muted-foreground'>{t('whoami.intro')}</p>

			<p className='text-muted-foreground'>{t('whoami.description1')}</p>
			<p className='text-muted-foreground'>{t('whoami.description2')}</p>
			<p className='text-muted-foreground'>{t('whoami.description3')}</p>
			<p className='text-muted-foreground'>{t('whoami.description4')}</p>

			<h2 className='text-2xl font-bold text-primary mb-2'>
				{t('whoami.courses_title')}
			</h2>
			<ul className='list-inside space-y-2 text-muted-foreground mt-5'>
				<li className='flex items-center gap-4'>
					<FaWaveSquare className='text-primary' />
					{t('whoami.courses.sas')}
				</li>
				<li className='flex items-center gap-4'>
					<FaTerminal className='text-primary' />
					{t('whoami.courses.up')}
				</li>
				<li className='flex items-center gap-4'>
					<FaChartBar className='text-primary' />
					{t('whoami.courses.pas')}
				</li>
				<li className='flex items-center gap-4'>
					<FaBusinessTime className='text-primary' />
					{t('whoami.courses.itba')}
				</li>
				<li className='flex items-center gap-4'>
					<FaNetworkWired className='text-primary' />
					{t('whoami.courses.cn')}
				</li>
			</ul>
		</div>
	)
}
