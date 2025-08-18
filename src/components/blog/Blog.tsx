import AnimatedSection from '../shared/AnimatedSection'
import BlogContact from './BlogContact'
import BlogHeader from './BlogHeader'
import BlogPosts from './BlogPosts'
import BlogPostsHeader from './BlogPostsHeader'

export default function Blog() {
	return (
		<>
			<AnimatedSection className='m-auto py-16 md:py-24'>
				<BlogHeader />
			</AnimatedSection>
			<AnimatedSection className='m-auto py-12 border-t'>
				<BlogPostsHeader />
				<BlogPosts />
			</AnimatedSection>
			<AnimatedSection className='m-auto py-12'>
				<BlogContact />
			</AnimatedSection>
		</>
	)
}