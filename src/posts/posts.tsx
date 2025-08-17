import Img from "../assets/example.webp"

export const listOfPost = [
  {
    img: Img,
    hashtag: [
      {
        name: '#js',
        color: 'bg-yellow-500/20 text-yellow-600',
      },
      {
        name: '#ts',
        color: 'bg-blue-500/20 text-blue-600',
      },
      {
        name: '#html',
        color: 'bg-orange-500/20 text-orange-600',
      },
      {
        name: '#css',
        color: 'bg-indigo-500/20 text-indigo-600',
      },
      {
        name: '#react',
        color: 'bg-cyan-500/20 text-cyan-600',
      },
      {
        name: '#angular',
        color: 'bg-red-500/20 text-red-600',
      },
    ],
    name: "Hello World",
    slug: "hello-world",
    date: "2025-08-14 18:02",
    file: () => import("./hello-world.md?raw"),
    pinned: false,
    lang: 'uz'
  },
  {
    img: Img,
    hashtag: [
      {
        name: '#js',
        color: 'bg-yellow-500/20 text-yellow-600',
      },
      {
        name: '#ts',
        color: 'bg-blue-500/20 text-blue-600',
      },
      {
        name: '#html',
        color: 'bg-orange-500/20 text-orange-600',
      },
      {
        name: '#css',
        color: 'bg-indigo-500/20 text-indigo-600',
      },
      {
        name: '#react',
        color: 'bg-cyan-500/20 text-cyan-600',
      },
      {
        name: '#angular',
        color: 'bg-red-500/20 text-red-600',
      },
    ],
    name: "Nimadur",
    slug: "xayr-world",
    date: "2025-08-14 18:02",
    file: () => import("./second-post.md?raw"),
    pinned: false,
    lang: 'en'
  },
  {
    img: Img,
    hashtag: [
      {
        name: '#js',
        color: 'bg-yellow-500/20 text-yellow-600',
      },
      {
        name: '#ts',
        color: 'bg-blue-500/20 text-blue-600',
      },
      {
        name: '#html',
        color: 'bg-orange-500/20 text-orange-600',
      },
      {
        name: '#css',
        color: 'bg-indigo-500/20 text-indigo-600',
      },
      {
        name: '#react',
        color: 'bg-cyan-500/20 text-cyan-600',
      },
      {
        name: '#angular',
        color: 'bg-red-500/20 text-red-600',
      },
    ],
    name: "Kimdur",
    slug: "xayr-worlds",
    date: "2025-08-14 18:02",
    file: () => import("./second-post.md?raw"),
    pinned: false,
    lang: 'ru'
  }
]
