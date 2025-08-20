import { useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { listOfPost } from "@/posts/posts"
import MarkdownRenderer from "@/components/md/MarkdownRenderer"
import Navbar from '@/components/shared/Navbar'
import LoadingBar, { type LoadingBarRef } from 'react-top-loading-bar'

export default function PostPage() {
  const { slug } = useParams()
  const [content, setContent] = useState("")
  const loadingBarRef = useRef<LoadingBarRef>(null)

  useEffect(() => {
    const post = listOfPost.find((p) => p.slug === slug)
    if (post?.file) {
      loadingBarRef.current?.continuousStart()

      post.file().then((res: { default: string }) => {
        setContent(res.default)
        loadingBarRef.current?.complete()
      }).catch(() => {
        loadingBarRef.current?.complete()
      })
    }
  }, [slug])

  return (
    <>
      <LoadingBar color="#3b82f6" height={3} ref={loadingBarRef} />

      <Navbar page="post" />
      <div className="pt-10">
        {content ? <MarkdownRenderer content={content} /> : <p>Loading...</p>}
      </div>
    </>
  )
}
