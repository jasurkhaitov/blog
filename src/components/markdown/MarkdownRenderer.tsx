import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import type { Components } from "react-markdown"
import type { ClassAttributes, HTMLAttributes } from "react"
import { Copy, Check } from "lucide-react"

type CodeProps = ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> & {
    inline?: boolean
    children?: React.ReactNode
  }

const CodeBlock = ({ inline, className, children, ...props }: CodeProps) => {
  const [copied, setCopied] = useState(false)
  const match = /language-(\w+)/.exec(className || "")
  const code = String(children).replace(/\n$/, "")

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return !inline && match ? (
    <div className="relative group text-sm font-mono">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 p-1 cursor-pointer rounded bg-background border border-muted 
                   opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>

      <SyntaxHighlighter
        style={dracula as { [key: string]: React.CSSProperties }}
        language={match[1]}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className="bg-card px-1 rounded" {...props}>
      {children}
    </code>
  )
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold my-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold my-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-medium my-2">{children}</h3>
  ),
  hr: () => <hr className="my-6 border-muted" />,
  ul: ({ children }) => (
    <ul className="list-disc list-inside my-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside my-2">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-muted pl-4 italic text-foreground my-4">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      {children}
    </a>
  ),
  code: CodeBlock,
}

const MarkdownRenderer = ({ content }: { content: string }) => {
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>
}

export default MarkdownRenderer
