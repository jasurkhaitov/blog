import { Link } from 'react-router-dom'
import LogoIcon from '../../assets/logoIcon.svg'

export default function BrandIcon() {
	return (
		<Link to='/'>
			<img className='w-10 h-10' src={LogoIcon} alt="JasX Portfolio" />
		</Link>
	)
}