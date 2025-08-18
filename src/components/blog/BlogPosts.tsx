import { useState, useEffect } from "react"
import { listOfPost } from "@/posts/posts"
import { BlogPostCard } from "./BlogPostsCards"
import { SearchAndViewControls } from "./SearchAndViewControls"
import { EmptyState } from "./EmptyState"
import EmptyBlog from './EmptyBlogPost'

export default function BlogPosts() {
	const [searchTerm, setSearchTerm] = useState("")
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
	const [isInitialized, setIsInitialized] = useState(false)

	useEffect(() => {
		const savedViewMode = localStorage.getItem("blogViewMode") as "grid" | "list" | null
		if (savedViewMode && (savedViewMode === "grid" || savedViewMode === "list")) {
			setViewMode(savedViewMode)
		} else {
			setViewMode("grid")
		}
		setIsInitialized(true)
	}, [])

	useEffect(() => {
		if (isInitialized) {
			localStorage.setItem("blogViewMode", viewMode)
		}
	}, [viewMode, isInitialized])

	const filteredPosts = listOfPost
		.filter(post => post.name.toLowerCase().includes(searchTerm.toLowerCase()))
		.sort((a, b) => {
			if (a.pinned && !b.pinned) return -1
			if (!a.pinned && b.pinned) return 1
			return 0
		})

	const handleViewModeChange = (newViewMode: "grid" | "list") => {
		setViewMode(newViewMode)
	}

	const handleClearSearch = () => {
		setSearchTerm("")
	}

	return (
		<div className="mt-10 w-full">
			<SearchAndViewControls
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				viewMode={viewMode}
				onViewModeChange={handleViewModeChange}
			/>

			<div className="block md:hidden">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					{filteredPosts.map((post) => (
						<BlogPostCard
							key={post.id}
							post={post}
							searchTerm={searchTerm}
							viewMode="grid"
						/>
					))}
				</div>
			</div>

			<div className="hidden md:block">
				{viewMode === "grid" ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{filteredPosts.map((post) => (
							<BlogPostCard
								key={post.id}
								post={post}
								searchTerm={searchTerm}
								viewMode="grid"
							/>
						))}
					</div>
				) : (
					<div className="flex flex-col gap-5">
						{filteredPosts.map(post => (
							<BlogPostCard
								key={post.id}
								post={post}
								searchTerm={searchTerm}
								viewMode="list"
							/>
						))}
					</div>
				)}
			</div>

			{filteredPosts.length === 0 && listOfPost.length > 0 && (
				<EmptyState onClearSearch={handleClearSearch} />
			)}

			{listOfPost.length === 0 && (
				<EmptyBlog />
			)}
		</div>
	)
}