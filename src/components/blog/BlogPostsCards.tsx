import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Languages, Pin, Link2, Check } from "lucide-react"
import { Link } from "react-router-dom"
import { blogLangBadgeColor } from '@/helper/func'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface BlogPost {
	id: number
	name: string
	img: string
	date: string
	lang: string
	slug: string
	pinned?: boolean
	hashtag: Array<{ name: string; color: string }>
}

interface BlogPostCardProps {
	post: BlogPost
	searchTerm: string
	viewMode: "grid" | "list"
}

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

export function BlogPostCard({ post, searchTerm, viewMode }: BlogPostCardProps) {
	const { t } = useTranslation()
	const [copied, setCopied] = useState(false)

	const handleCopyLink = async (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()

		const url = `${window.location.origin}/posts/${post.slug}`

		try {
			await navigator.clipboard.writeText(url)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy link:', err)
		}
	}

	if (viewMode === "list") {
		return (
			<Card className={`overflow-hidden group gap-3 border transition-all duration-300 h-full rounded-xl ${post.pinned ? 'ring-1 ring-primary/30 border-primary/30' : ''
				}`}>
				<CardContent>
					<div className="flex md:flex-row flex-col items-start">
						<div className="relative rounded-xl overflow-hidden">
							<img
								src={post.img}
								alt={post.name}
								className="w-auto h-48 rounded-xl object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
							{post.pinned && (
								<div className="absolute top-3 left-3 bg-card text-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
									<Pin className="w-3 h-3" />
									{t("blog.pinned")}
								</div>
							)}
						</div>

						<div className="flex-1 min-w-0">
							<CardHeader className='py-2'>
								<div className="flex flex-wrap gap-3">
									{post.hashtag.map((tag, index) => (
										<p
											key={index}
											className={`text-sm hover:underline transition-all cursor-pointer font-medium ${tag.color}`}
										>
											{tag.name}
										</p>
									))}
								</div>
								<CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors flex items-center gap-2">
									{post.pinned && <Pin className="w-4 h-4 translate-y-0.5 text-primary flex-shrink-0" />}
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

								<div className="flex justify-start gap-2 mt-12">
									<Link key={post.slug} to={`/posts/${post.slug}`}>
										<Button className='h-8'>
											{t("blog.readBtn")}
										</Button>
									</Link>
									<Button
										variant="outline"
										size="sm"
										className="h-8 px-3"
										onClick={handleCopyLink}
									>
										{copied ? (
											<Check className="w-4 h-4 text-green-500" />
										) : (
											<Link2 className="w-4 h-4" />
										)}
									</Button>
								</div>
							</CardHeader>
						</div>
					</div>
				</CardContent>
			</Card>
		)
	}

	return (
		<Card className={`overflow-hidden group gap-3 p-0 pb-3 xs:pb-5 border transition-all duration-300 h-full rounded-xl ${post.pinned ? 'ring-1 ring-primary/30 border-primary/30' : ''
			}`}>
			<div className="relative overflow-hidden">
				<img
					src={post.img}
					alt={post.name}
					className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

				{post.pinned && (
					<div className="absolute top-3 right-3 bg-card text-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
						<Pin className="w-3 h-3" />
						{t("blog.pinned")}
					</div>
				)}
			</div>

			<CardHeader className="py-1">
				<CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors flex items-center gap-2">
					{post.pinned && <Pin className="w-4 h-4 translate-y-0.5 text-primary flex-shrink-0" />}
					<span className="flex-1">{highlightText(post.name, searchTerm)}</span>
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
				<div className="flex flex-wrap gap-3 mb-4">
					{post.hashtag.map((tag, index) => (
						<p
							key={index}
							className={`text-base hover:underline transition-all cursor-pointer font-medium ${tag.color}`}
						>
							{tag.name}
						</p>
					))}
				</div>
				<div className="flex gap-2">
					<Link key={post.slug} to={`/posts/${post.slug}`} className="flex-1">
						<Button className='h-8 w-full'>
							{t("blog.readBtn")}
						</Button>
					</Link>
					<Button
						variant="outline"
						size="sm"
						className="h-8 px-3"
						onClick={handleCopyLink}
					>
						{copied ? (
							<Check className="w-4 h-4 text-green-500" />
						) : (
							<Link2 className="w-4 h-4" />
						)}
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}