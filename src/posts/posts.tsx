import Img from "../assets/example.webp"

export const listOfPost = [
  {
    img: Img,
    hashtag: ['#js', '#ts', '#html'],
    name: "Hello World",
    slug: "hello-world",
    date: "2025-08-14 18:02",
    file: () => import("./hello-world.md?raw"),
    pinned: false,
    lang: 'uz'
  },
  {
    img: Img,
    hashtag: ['#js', '#ts', '#html', '#css'],
    name: "xAYR World",
    slug: "xayr-world",
    date: "2025-08-14 18:02",
    file: () => import("./second-post.md?raw"),
    pinned: false,
    lang: 'en'
  },
  {
    img: Img,
    hashtag: ['#js', '#ts', '#html', '#css'],
    name: "xAYR World",
    slug: "xayr-worlds",
    date: "2025-08-14 18:02",
    file: () => import("./second-post.md?raw"),
    pinned: false,
    lang: 'ru'
  }
]
