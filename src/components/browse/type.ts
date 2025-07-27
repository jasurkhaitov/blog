export type Profile = {
	login: string
	avatar_url: string
	html_url: string
	name: string
	blog: string
	location: string
	bio: string
	public_repos: number
	followers: number
	following: number
	created_at: string
}

export type Repo = {
	id: number
	name: string
	html_url: string
	description: string | null
	language: string | null
	stargazers_count: number
	forks_count: number
}