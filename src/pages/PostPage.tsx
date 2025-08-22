import { Link, useParams, Navigate } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { listOfPost } from "@/posts/posts"
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer"
import Navbar from '@/components/shared/Navbar'
import LoadingBar, { type LoadingBarRef } from 'react-top-loading-bar'
import Footer from '@/components/shared/Footer'
import SharePost from '@/components/post/SharePosts'
import PostBreadcrumb from '@/components/post/PostBreadcrumb'
import PostInfo from '@/components/post/PostInfo'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import Subscribe from '@/components/shared/Subscribe'

export default function PostPage() {
  const { slug, lang } = useParams()
  const { t } = useTranslation()
  const [content, setContent] = useState("")
  const loadingBarRef = useRef<LoadingBarRef>(null)

  const postIndex = listOfPost.findIndex((p) => p.slug === slug)
  const post = listOfPost[postIndex]

  const previousSlug =
    postIndex > 0 ? listOfPost[postIndex - 1] : listOfPost[listOfPost.length - 1]
  const nextSlug =
    postIndex < listOfPost.length - 1 ? listOfPost[postIndex + 1] : listOfPost[0]

  useEffect(() => {
    document.title = post.name
  }, [post.name])

  useEffect(() => {
    if (post.file) {
      loadingBarRef.current?.continuousStart()
      post.file()
        .then((res: { default: string }) => {
          setContent(res.default)
          loadingBarRef.current?.complete()
        })
        .catch(() => {
          loadingBarRef.current?.complete()
        })
    }
  }, [post, slug])
  if (!post) {
    return <Navigate to={`/${lang}/blog`} replace />
  }

  return (
    <>
      <LoadingBar color="#3b82f6" height={2} ref={loadingBarRef} />

      <div className="min-h-screen max-w-7xl m-auto px-4 bg-background">
        <Navbar page="post" />

        <div className="py-10">
          <PostBreadcrumb title={post.name} />
          <PostInfo date={post.date} lang={post.lang} />

          <div className="flex w-full gap-5 flex-col lg:flex-row">
            <div className="flex-1 border py-5 px-5 rounded-md">
              {content ? (
                <div>
                  <MarkdownRenderer content={content} />
                  <div className="flex flex-wrap mt-5 border-t pt-5 gap-3">
                    {post.hashtag.map((tag, index) => (
                      <p
                        key={index}
                        className={`text-base font-mono hover:underline transition-all cursor-pointer font-medium ${tag.color}`}
                      >
                        {tag.name}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <Skeleton className="h-screen w-full" />
              )}
            </div>

            <div className="w-full lg:w-64 flex flex-col sm:flex-row lg:flex-col gap-5">
              <div className="w-auto sm:w-1/2 lg:w-auto">
                <SharePost slug={slug!} title={post.name} />
              </div>

              <div className="flex flex-col gap-3 w-auto sm:w-1/2 lg:w-auto">
                {listOfPost.length > 2 && (
                  <Button asChild variant="outline" className="w-full justify-center">
                    <Link to={`/${lang}/blog/${previousSlug.slug}`}>
                      <FaAngleLeft className="w-4 h-4 mr-1" />
                      {previousSlug.name}
                    </Link>
                  </Button>
                )}

                <Button asChild className="w-full justify-center">
                  <Link to={`/${lang}/blog`}>
                    <Home className="w-4 h-4 mr-2" /> {t("post.back")}
                  </Link>
                </Button>

                {listOfPost.length > 2 && (
                  <Button asChild variant="outline" className="w-full justify-center">
                    <Link to={`/${lang}/blog/${nextSlug.slug}`}>
                      {nextSlug.name} <FaAngleRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
