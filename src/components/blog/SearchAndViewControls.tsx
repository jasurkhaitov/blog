import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Grid2X2, List, Search } from "lucide-react"
import { useTranslation } from 'react-i18next'

interface SearchAndViewControlsProps {
	searchTerm: string
	setSearchTerm: (term: string) => void
	viewMode: "grid" | "list"
	onViewModeChange: (mode: "grid" | "list") => void
}

export function SearchAndViewControls({
	searchTerm,
	setSearchTerm,
	viewMode,
	onViewModeChange
}: SearchAndViewControlsProps) {
	const { t } = useTranslation()
	return (
		<div className="flex flex-col w-full xs:flex-row gap-4 mb-8">
			<div className="relative flex-1">
				<Search className="absolute left-3 top-[55%] transform -translate-y-[60%] text-muted-foreground w-4 h-4" />
				<Input
					placeholder={t("blog.searchInput")}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="pl-10 h-11 border-2 focus:border-primary/50 transition-colors"
				/>
			</div>

			<div className="hidden md:flex items-center rounded-lg border-2 gap-2 p-1 bg-muted/30">
				<Button
					variant={viewMode === "grid" ? "default" : "ghost"}
					size="lg"
					onClick={() => onViewModeChange("grid")}
					className="h-8 px-3 rounded-md"
				>
					<Grid2X2 className="w-4 h-4" />
				</Button>
				<Button
					variant={viewMode === "list" ? "default" : "ghost"}
					size="lg"
					onClick={() => onViewModeChange("list")}
					className="h-8 px-3 rounded-md"
				>
					<List className="w-4 h-4" />
				</Button>
			</div>
		</div>
	)
}