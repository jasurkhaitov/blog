import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import "highlight.js/styles/github.css"

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <article className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
