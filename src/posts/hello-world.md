# Store it manually in your `posts` array

This is the simplest — you just add `date` (and maybe `time`) when you create the post entry in your `listOfPost` array.

```ts
export const listOfPost = [
  {
    name: "Hello World",
    slug: "hello-world",
    date: "2025-08-14 18:02",
    img: Img,
    file: () => import("./hello-world.md?raw"),
    pinned: false,
  }
]
```

Pros:

* Simple, no extra tooling.
* Easy to customize (e.g., just “Jan 1, 2025” or full date-time).

Cons:

* You must remember to add it yourself every time.

---

## **2️⃣ Put the date inside the Markdown itself (Frontmatter)**

You can store metadata at the top of your `.md` file like this:

```md
---
title: Hello World
date: 2025-08-14 18:02
pinned: false
---

# Hello World

Salom Hammaga
```

Then, use a Markdown parser that supports **Frontmatter** (e.g., [`gray-matter`](https://www.npmjs.com/package/gray-matter)) to read it:

```ts
import matter from 'gray-matter'

post.file().then((res: { default: string }) => {
  const { data, content } = matter(res.default)
  console.log(data.date) // from frontmatter
  setContent(content)
})
```

Pros:

* The metadata lives **with the content**.
* You don’t have to maintain it in two places.

Cons:

* Slightly more setup (need to parse the Markdown).

---

## **3️⃣ Auto-generate the date from the file creation time**

You can also grab the `.md` file’s creation date at build time using Node’s `fs.stat` (in a script that builds your posts array).
This works if your posts list is generated automatically instead of hardcoded.

Example build script:

```js
import fs from 'fs'
import path from 'path'

const postsDir = path.resolve('./src/posts')
const posts = fs.readdirSync(postsDir).map(file => {
  const stats = fs.statSync(path.join(postsDir, file))
  return {
    slug: file.replace('.md', ''),
    date: stats.birthtime // creation date
  }
})
```

Pros:

* Automatic, no typing dates yourself.
* Always accurate to file creation.

Cons:

* Needs a build script step.
* Won’t work purely in the browser.

---

💡 If this is a **small personal portfolio blog**, I’d recommend **option 2 (frontmatter)** because:

* It keeps post data in one place.
* It’s easy to maintain even if you move posts around.
* Later, you can add more metadata (tags, author, etc.) easily.

---

If you want, I can show you **a ready-to-use `MarkdownRenderer` that reads both the content and the frontmatter date** so your posts automatically display their creation time.
