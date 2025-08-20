import BlogContact from '@/components/blog/BlogContact'
import BlogHeader from '@/components/blog/BlogHeader'
import BlogPosts from '@/components/blog/BlogPosts'
import BlogPostsHeader from '@/components/blog/BlogPostsHeader'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function BlogPage() {

	const { t } = useTranslation()

	useEffect(() => {
		document.title = t("title.blog")
	}, [t])

	return (
		<div className='min-h-screen max-w-7xl m-auto px-4 bg-background'>
			<Navbar page='blog' />
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
			<Footer />
		</div>
	)
}