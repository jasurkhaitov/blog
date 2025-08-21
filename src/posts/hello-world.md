# 📄 `PostPage` Component Documentation

The `PostPage` component is responsible for rendering an individual blog post.
It loads markdown content dynamically, displays metadata (date, language), and provides a sidebar with sharing options.

---

## 🔑 Features

> - Dynamically loads markdown content from a file.
> - Shows a top loading bar while content is being fetched.
> - Displays breadcrumbs navigation (`Home > Post`).
> - Provides metadata (date, language).
> - Includes a **SharePost** sidebar for social sharing.
> - Responsive layout (stacks on mobile, sidebar on desktop).

---

## 🛠 Usage Example

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostPage from '@/pages/PostPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Example route: /en/blog/my-first-post */}
				<Route path='/:lang/blog/:slug' element={<PostPage />} />
			</Routes>
		</BrowserRouter>
	)
}
```

---

## 📂 Layout Explanation

> The layout uses a **two-column flexbox design**:
>
> - **Left Column:** The blog content (`MarkdownRenderer`).
> - **Right Column:** The `SharePost` sidebar.
> - On **mobile**, the sidebar moves below the content.

```tsx
<div className='flex flex-col md:flex-row w-full gap-8'>
	{/* Blog Content */}
	<div className='flex-1'>
		{content ? <MarkdownRenderer content={content} /> : <p>Loading...</p>}
	</div>

	{/* Sidebar */}
	<div className='w-full md:w-64 shrink-0'>
		<SharePost slug={slug!} title={post?.name || 'Blog Post'} />
	</div>
</div>
```

---

## 📌 Props & Hooks

- `slug` (from `useParams`) → matches the blog post.
- `lang` (from `useParams`) → for multi-language routing.
- `listOfPost` → metadata (name, date, lang, file loader).
- `MarkdownRenderer` → renders markdown with syntax highlighting.
- `LoadingBar` → shows progress while fetching.
- `SharePost` → provides share buttons.

---

## ✅ Example Behavior

1. Navigate to `/en/blog/hello-world`.
2. `PostPage` finds the post by `slug`.
3. Markdown file is dynamically imported.
4. `LoadingBar` animates until file finishes loading.
5. Post content + metadata + share buttons are displayed.

---

👉 Do you want me to also add **code comments directly inside your `PostPage.tsx`** so future readers can understand the logic line by line?

[Youtube](https://www.youtube.com)
