import { useState, useEffect } from 'react'
import { GitFork, Star, Tag, Github } from 'lucide-react'
import { Button } from '../ui/button'
import type { Profile, Repo } from './type'
import BrowseGithubSkeleton from './BrowseGithubSkeleton'
import { useTranslation } from 'react-i18next'

const BrowseGithub = () => {
	const [profileData, setProfileData] = useState<Profile | null>(null)
	const [repos, setRepos] = useState<Repo[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const { t } = useTranslation()

	useEffect(() => {
		const headers = {
			Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
		}

		const fetchData = async () => {
			try {
				const profileRes = await fetch("https://api.github.com/users/jasurkhaitov", { headers })
				const profileJson = await profileRes.json()
				if (profileRes.ok) {
					setProfileData(profileJson)
				} else {
					throw new Error(profileJson.message || "Failed to fetch profile")
				}

				const reposRes = await fetch("https://api.github.com/users/jasurkhaitov/repos?sort=updated", { headers })
				const reposJson = await reposRes.json()
				if (reposRes.ok && Array.isArray(reposJson)) {
					setRepos(reposJson)
				}
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError(String(err))
				}
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) {
		return (
			<div className="p-0 xs:p-3 sm:p-5">
				<BrowseGithubSkeleton />
			</div>
		)
	}

	if (error) {
		return (
			<div className="p-5 text-red-500 text-center">
				{t("github.error")}: {error}
			</div>
		)
	}

	if (!profileData) return null

	return (
		<div className="p-0 xs:p-3 sm:p-5">
			<div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-4 mb-5">
				<Button asChild variant="outline">
					<a
						href="https://github.com/jasurkhaitov"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center"
					>
						{t("github.go_to_github")} <Github className="ml-2 h-4 w-4" />
					</a>
				</Button>

				<div className="text-sm text-gray-600 flex flex-col md:flex-row justify-between lg:justify-start items-start md:items-center gap-1 dark:text-gray-400 leading-snug">
					<p className="italic">{t("github.ps_note")}</p>
					<a
						target="_blank"
						className="text-blue-500"
						href="https://api.github.com"
					>
						GitHub Api
					</a>
				</div>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{repos.map((repo, idx) => (
					<a
						key={repo.id}
						href={repo.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="transform transition-all border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl backdrop-blur p-4"
						style={{ transitionDelay: `${idx * 100}ms` }}
					>
						<img
							src={`https://opengraph.githubassets.com/1/jasurkhaitov/${repo.name}`}
							alt={repo.name}
							className="h-auto w-full border rounded-md object-cover mb-4"
						/>
						<h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
							{repo.name}
						</h3>
						{repo.description && (
							<p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
								{repo.description}
							</p>
						)}
						<div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
							{repo.language && (
								<span className="flex items-center gap-1">
									<Tag size={16} /> {repo.language}
								</span>
							)}
							<span className="flex items-center gap-1">
								<Star size={16} /> {repo.stargazers_count}
							</span>
							<span className="flex items-center gap-1">
								<GitFork size={16} /> {repo.forks_count}
							</span>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}

export default BrowseGithub
