export const blogLangBadgeColor = (lang: string): string => {
	return lang === 'uz'
		? 'bg-green-500/20 text-green-600'
		: lang === 'en'
		? 'bg-blue-500/20 text-blue-600'
		: lang === 'ru'
		? 'bg-red-500/20 text-red-600'
		: 'bg-gray-500/20 text-gray-600'
}
