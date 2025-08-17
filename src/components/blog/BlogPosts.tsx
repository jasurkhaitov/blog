import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Grid3X3, List, Search, Calendar, ArrowRight, Languages } from "lucide-react"
import { listOfPost } from "@/posts/posts"
import { Link } from "react-router-dom"
import { blogLangBadgeColor } from '@/helper/func'

function highlightText(text: string, highlight: string) {
	if (!highlight.trim()) return text
	const regex = new RegExp(`(${highlight})`, "gi")
	return text.split(regex).map((part, i) =>
		part.toLowerCase() === highlight.toLowerCase() ? (
			<span key={i} className="text-green-500 font-bold">
				{part}
			</span>
		) : (
			part
		)
	)
}

export default function BlogPosts() {
	const [searchTerm, setSearchTerm] = useState("")
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

	const filteredPosts = listOfPost.filter(post =>
		post.name.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<div className="mt-10 w-full">
			<div className="flex flex-col w-full xs:flex-row gap-4 mb-8">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-[55%] transform -translate-y-[60%] text-muted-foreground w-4 h-4" />
					<Input
						placeholder="Search posts and tags..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="pl-10 h-11 border-2 focus:border-primary/50 transition-colors"
					/>
				</div>

				<div className="flex items-center rounded-lg border-2 gap-2 p-1 bg-muted/30">
					<Button
						variant={viewMode === "grid" ? "default" : "ghost"}
						size="lg"
						onClick={() => setViewMode("grid")}
						className="h-8 px-3 w-full xs:w-auto rounded-md"
					>
						<Grid3X3 className="w-4 h-4" />
					</Button>
					<Button
						variant={viewMode === "list" ? "default" : "ghost"}
						size="lg"
						onClick={() => setViewMode("list")}
						className="h-8 px-3 w-full xs:w-auto rounded-md"
					>
						<List className="w-4 h-4" />
					</Button>
				</div>
			</div>

			{viewMode === "grid" ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredPosts.map((post) => (

						<Card className="overflow-hidden group gap-3 p-0 pb-5 border transition-all duration-300 h-full rounded-xl">
							<div className="relative overflow-hidden">
								<img
									src={post.img}
									alt={post.name}
									className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
							</div>

							<CardHeader className="py-1">
								<CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
									{highlightText(post.name, searchTerm)}
								</CardTitle>
								<div className='flex items-center justify-between mt-1'>
									<div className="flex cursor-pointer items-center gap-2 text-sm hover:text-foreground transition-all text-muted-foreground">
										<Calendar className="w-4 h-4" />
										{post.date}
									</div>

									<div className={`flex p-0 px-3 shadow-none rounded-xl items-center gap-1 text-sm ${blogLangBadgeColor(post.lang)}`}>
										<Languages className="w-4 h-4" /> {post.lang}
									</div>
								</div>
							</CardHeader>

							<CardContent className="pt-0">
								<div className="flex flex-wrap gap-2 mb-4">
									{post.hashtag.map((tag, index) => (
										<Badge
											key={index}
											variant="secondary"
											className={`text-xs font-medium rounded-full px-3 py-1 ${tag.color}`}
										>
											{tag.name}
										</Badge>
									))}
								</div>
									<Link key={post.slug} to={`/posts/${post.slug}`}>
								<Button className='h-8 w-full'>
										Read more
								</Button>
								</Link>
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<div className="space-y-4">
					{filteredPosts.map((post) => (
						<Link key={post.slug} to={`/posts/${post.slug}`} className="group">
							<Card className="border-2 border-transparent hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:bg-muted/20 rounded-xl">
								<CardContent className="p-6">
									<div className="flex items-start gap-6">
										<div className="relative overflow-hidden rounded-xl flex-shrink-0">
											<img
												src={post.img || "/placeholder.svg"}
												alt={post.name}
												className="w-24 h-24 object-cover group-hover:scale-105 transition-transform duration-300"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
												{highlightText(post.name, searchTerm)}
											</h3>
											<div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
												<Calendar className="w-4 h-4" />
												{post.date}
											</div>
											<div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
												<Languages className="w-4 h-4" /> {post.lang}
											</div>
											<div className="flex flex-wrap gap-2 mb-3">
												{post.hashtag.map((tag, index) => (
													<Badge
														key={index}
														variant="secondary"
														className="text-xs rounded-full px-3 py-1 bg-primary/10 text-primary"
													>
														{tag.name}
													</Badge>
												))}
											</div>
											<div className="flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
												Read article
												<ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			)}

			{filteredPosts.length === 0 && (
				<div className="text-center py-16">
					<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
						<Search className="w-8 h-8 text-muted-foreground" />
					</div>
					<h3 className="text-xl font-semibold mb-2">No posts found</h3>
					<p className="text-muted-foreground mb-6 max-w-md mx-auto">
						We couldn't find any posts matching your search. Try different keywords or browse all posts.
					</p>
					<Button variant="outline" onClick={() => setSearchTerm("")} className="gap-2">
						<Search className="w-4 h-4" />
						Clear search
					</Button>
				</div>
			)}
		</div>
	)
}
