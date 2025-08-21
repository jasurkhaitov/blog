import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import {
	TelegramShareButton,
	TelegramIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TwitterShareButton,
	TwitterIcon,
	RedditShareButton,
	RedditIcon,
	VKShareButton,
	VKIcon,
} from "react-share"
import { useTranslation } from "react-i18next"

interface SharePostProps {
	slug: string
	title: string
}

export default function SharePost({ slug, title }: SharePostProps) {
	const [copied, setCopied] = useState(false)
	const { t } = useTranslation()
	const url = `https://jasurkhaitov.uz/blog/${slug}`

	const handleCopy = async () => {
		await navigator.clipboard.writeText(url)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div className="space-y-3 p-3 rounded-md bg-card border">
			<h3 className="text-center font-semibold">
				{t("post.share.title")}
			</h3>

			<div className="flex flex-col gap-2">
				<Button
					variant="outline"
					size="sm"
					className="justify-start mb-2"
					onClick={handleCopy}
				>
					{copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
					{copied ? t("post.share.copied") : t("post.share.copy")}
				</Button>

				<TelegramShareButton url={url} title={title} className="flex items-center gap-2">
					<TelegramIcon size={24} round />
					{t("post.share.telegram")}
				</TelegramShareButton>

				<LinkedinShareButton url={url} title={title} className="flex items-center gap-2">
					<LinkedinIcon size={24} round />
					{t("post.share.linkedln")}
				</LinkedinShareButton>

				<TwitterShareButton url={url} title={title} className="flex items-center gap-2">
					<TwitterIcon size={24} round />
					{t("post.share.x")}
				</TwitterShareButton>

				<RedditShareButton url={url} title={title} className="flex items-center gap-2">
					<RedditIcon size={24} round />
					{t("post.share.reddit")}
				</RedditShareButton>

				<VKShareButton url={url} title={title} className="flex items-center gap-2">
					<VKIcon size={24} round />
					{t("post.share.vkontakte")}
				</VKShareButton>
			</div>
		</div>
	)
}
