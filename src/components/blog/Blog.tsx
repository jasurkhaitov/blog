import AnimatedSection from '../shared/AnimatedSection'
import BlogHeader from './BlogHeader'
import BlogPosts from './BlogPosts'

export default function Blog() {
	return (
		<>
			<AnimatedSection className='m-auto border-b py-16 md:py-24'>
				<BlogHeader/>
			</AnimatedSection>
			<AnimatedSection className='m-auto py-16 md:py-24'>
				<BlogPosts/>
			</AnimatedSection>
		</>
	)
}