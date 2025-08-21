import { useTranslation } from 'react-i18next'

export default function Subscribe() {
	const { t } = useTranslation()
	return (
		<div className="w-full rounded-md mb-10 p-6 bg-card border text-center space-y-3">
			<h3 className="text-xl font-semibold">{t("post.subscribe.title")}</h3>
			<p className="text-muted-foreground">
				{t("post.subscribe.desc")}
			</p>
			<a
				href="https://t.me/JasXDev"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium transition-colors"
			>
				@jasxdev
			</a>
		</div>
	)
}
