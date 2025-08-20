import { Link, useParams } from 'react-router-dom'
import LogoIcon from '../../assets/logoIcon.svg'

export default function BrandIcon({ page = '' }: { page?: string }) {
	const { lang } = useParams()
	return (
		<Link to={page === 'post' ? `/${lang}/blog` : `/${lang}`} className='flex items-center gap-3'>
			<img
				className='w-10 h-10 flex items-center gap-2'
				src={LogoIcon}
				alt='JasX Brand'
			/>
			<p className='font-montserrat text-2xl font-bold hidden sm:flex'>JasX</p>
		</Link>
	)
}
