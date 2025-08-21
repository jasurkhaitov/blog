import { Calendar, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function PostInfo({ date, lang }: { date: string | undefined, lang: string | undefined }) {
	const { t } = useTranslation()
	return (
		<div className='flex items-center justify-between my-5 border-b pb-5'>
			<div className="flex cursor-pointer items-center gap-2 text-sm hover:text-foreground transition-all text-muted-foreground">
				<Calendar className="w-4 h-4" />
				{date}
			</div>

			<div className={`flex p-0 px-3 shadow-none rounded-xl items-center gap-1 text-sm bg-green-500/20 text-green-600`}>
				<Languages className="w-4 h-4" /> {t(`post.${lang}`)}
			</div>
		</div>
	)
}