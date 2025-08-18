import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface EmptyStateProps {
	onClearSearch: () => void
}

export function EmptyState({ onClearSearch }: EmptyStateProps) {
	return (
		<div className="text-center py-16">
			<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
				<Search className="w-8 h-8 text-muted-foreground" />
			</div>
			<h3 className="text-xl font-semibold mb-2">No posts found</h3>
			<p className="text-muted-foreground mb-6 max-w-md mx-auto">
				We couldn't find any posts matching your search. Try different keywords or browse all posts.
			</p>
			<Button variant="outline" onClick={onClearSearch} className="gap-2">
				<Search className="w-4 h-4" />
				Clear search
			</Button>
		</div>
	)
}