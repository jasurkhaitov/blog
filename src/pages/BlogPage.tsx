import Blog from '@/components/blog/Blog'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'

export default function BlogPage() {
	return <div className='min-h-screen max-w-7xl m-auto px-4 bg-background'>
	<Navbar />

	<Blog/>

	<Footer />
</div>
}
