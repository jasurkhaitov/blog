import { ChevronRight, Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'

export default function PostBreadcrumb({ title }: { title: string | undefined }) {
	const { lang } = useParams()
	const { t } = useTranslation()
	return (
		<nav className="flex items-center text-base text-muted-foreground mb-4">
			<Link to={`/${lang}/blog`} className="flex items-center transition-all hover:text-foreground">
				<Home className="w-4 h-4 mr-2" />
				{t("post.home")}
			</Link>
			<ChevronRight className="w-4 h-4 mx-2" />
			<span className="text-foreground font-medium">{title}</span>
		</nav>
	)
}