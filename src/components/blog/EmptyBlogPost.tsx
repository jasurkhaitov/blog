import { FileText } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function EmptyBlog() {
  const { t } = useTranslation()

  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
        <FileText className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        {t("blog.noblog.title")}
      </h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        {t("blog.noblog.desc")}
      </p>
    </div>
  )
}
