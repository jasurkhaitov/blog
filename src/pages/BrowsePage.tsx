import AnimatedSection from '../components/shared/AnimatedSection'
import BrowseHeader from '@/components/browse/BrowseHeader'
import BrowseAbout from '@/components/browse/BrowseAbout'
import BrowseSkills from '@/components/browse/BrowseSkills'
import BrowseGithub from '@/components/browse/BrowseGithub'
import Contact from '@/components/shared/Contact'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'

export default function BrowsePage() {
	return (
		<div className='min-h-screen max-w-7xl m-auto px-4 bg-background'>
			<Navbar />

			<main className='flex-1'>
				<BrowseHeader />

				<AnimatedSection className='py-10 md:py-25 border-t'>
					<BrowseAbout />
				</AnimatedSection>

				<AnimatedSection className='py-10 md:py-25 border-t'>
					<BrowseGithub />
				</AnimatedSection>

				<AnimatedSection className='py-10 md:py-25 border-t'>
					<BrowseSkills />
				</AnimatedSection>

				<AnimatedSection className='py-10 md:py-25 border-t'>
					<Contact />
				</AnimatedSection>
			</main>

			<Footer />
		</div>
	)
}