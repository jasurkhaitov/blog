import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { listOfPost } from "@/posts/posts"
import MarkdownRenderer from "@/components/md/MarkdownRenderer"
import Navbar from '@/components/shared/Navbar'

export default function PostPage() {
  const { slug } = useParams()
  const [content, setContent] = useState("")

  useEffect(() => {
    const post = listOfPost.find((p) => p.slug === slug)
    if (post?.file) {
      post.file().then((res: { default: string }) => {
        setContent(res.default)
      })
    }
  }, [slug])

  console.log(content)


  return (<>
    <Navbar />
    <div className="pt-10">
      {content ? <MarkdownRenderer content={content} /> : <p>Loading...</p>}
    </div></>
  )
}
