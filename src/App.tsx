import { Navigate, Route, Routes, useParams, useLocation } from "react-router"
import { lazy, Suspense, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useYandexMetrica } from './hooks/useYandexMetrica'
import Atom from "react-loading-indicators/Atom"

const BrowsePage = lazy(() => import("./pages/BrowsePage"))
const BlogPage = lazy(() => import("./pages/BlogPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const WhoIAmPage = lazy(() => import("./pages/WhoIAmPage"))
const PostPage = lazy(() => import("./pages/PostPage"))

function RedirectToLanguage() {
  const location = useLocation()
  const { i18n } = useTranslation()

  const getCurrentLanguage = () => {
    const storedLang = localStorage.getItem("i18nextLng")
    if (storedLang && ["en", "ru", "uz"].includes(storedLang)) {
      return storedLang
    }

    if (["en", "ru", "uz"].includes(i18n.language)) {
      return i18n.language
    }

    const browserLang = navigator.language.split("-")[0]
    if (["en", "ru", "uz"].includes(browserLang)) {
      return browserLang
    }

    return "en"
  }

  const currentLang = getCurrentLanguage()
  const path = location?.pathname || "/"

  if (["/en", "/ru", "/uz"].some((langPrefix) => path.startsWith(langPrefix))) {
    return null
  }

  return <Navigate to={`/${currentLang}${path}`} replace />
}

export default function App() {
  const { i18n } = useTranslation()
  useYandexMetrica(103783941)

  const currentLang = ["en", "ru", "uz"].includes(i18n.language)
    ? i18n.language
    : "en"

  return (
    <div className="font-onest">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <Atom color="#315ecc" size="medium" />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${currentLang}`} replace />}
          />

          <Route path="/:lang/*" element={<LanguageWrapper />} />

          <Route path="/blog" element={<RedirectToLanguage />} />
          <Route path="/contact" element={<RedirectToLanguage />} />
          <Route path="/whoiam" element={<RedirectToLanguage />} />
          <Route path="/blog/:slug" element={<RedirectToLanguage />} />

          <Route
            path="*"
            element={<Navigate to={`/${currentLang}`} replace />}
          />
        </Routes>
      </Suspense>
    </div>
  )
}

function LanguageWrapper() {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (lang && lang !== i18n.language && ["en", "ru", "uz"].includes(lang)) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n])

  const supportedLanguages = ["en", "ru", "uz"]
  if (!lang || !supportedLanguages.includes(lang)) {
    return <Navigate to="/en" replace />
  }

  return (
    <Routes>
      <Route path="/" element={<BrowsePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<PostPage />} />
      <Route path="/whoiam" element={<WhoIAmPage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
    </Routes>
  )
}