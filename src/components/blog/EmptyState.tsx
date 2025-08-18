import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useTranslation } from 'react-i18next'

interface EmptyStateProps {
	onClearSearch: () => void
}

export function EmptyState({ onClearSearch }: EmptyStateProps) {
	const {t} = useTranslation()
	return (
		<div className="text-center py-16">
			<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
				<Search className="w-8 h-8 text-muted-foreground" />
			</div>
			<h3 className="text-xl font-semibold mb-2">{t("blog.emptyState.title")}</h3>
			<p className="text-muted-foreground mb-6 max-w-md mx-auto">{t("blog.emptyState.desc")}</p>
			<Button variant="outline" onClick={onClearSearch} className="gap-2">
				<Search className="w-4 h-4" />
				{t("blog.emptyState.btn")}
			</Button>
		</div>
	)
}