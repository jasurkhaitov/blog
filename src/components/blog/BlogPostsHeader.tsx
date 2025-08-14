import { useTranslation } from 'react-i18next'

export default function BlogPostsHeader() {
	const { t } = useTranslation()
	return (
		<div className='flex flex-col items-center gap-5 justify-center w-full max-w-3xl m-auto'>
			<h2 className='bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent font-bold font-montserrat text-3xl md:text-4xl'>
				{t("blog.main.title")}
			</h2>
			<p className='text-sm text-center'>
				{t("blog.main.desc")}
			</p>
		</div>
	)
}