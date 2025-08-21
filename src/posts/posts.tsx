import Img from "../assets/example.webp"

export const listOfPost = [
  {
    id: 1,
    img: Img,
    hashtag: [
      {
        name: '#js',
        color: 'text-yellow-600',
      },
      {
        name: '#ts',
        color: 'text-blue-700',
      },
      {
        name: '#html',
        color: 'text-orange-600',
      },
      {
        name: '#css',
        color: ' text-indigo-600',
      }
    ],
    name: "Hello World",
    slug: "hello-world",
    date: "2025-08-14 18:02",
    file: () => import("./hello-world.md?raw"),
    pinned: false,
    lang: 'uz'
  },
  {
    id: 2,
    img: Img,
    hashtag: [
      {
        name: '#js',
        color: ' text-yellow-600',
      },
      {
        name: '#ts',
        color: ' text-blue-600',
      },
      {
        name: '#react',
        color: ' text-cyan-600',
      },
      {
        name: '#angular',
        color: ' text-red-600',
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
    id: 3,
    img: Img,
    hashtag: [
      {
        name: '#html',
        color: ' text-orange-600',
      },
      {
        name: '#css',
        color: ' text-indigo-600',
      },
      {
        name: '#react',
        color: ' text-cyan-600',
      },
      {
        name: '#angular',
        color: ' text-red-600',
      },
    ],
    name: "Kimdurdfbgsd",
    slug: "xayr-oka",
    date: "2025-08-14 18:02",
    file: () => import("./second-post.md?raw"),
    pinned: false,
    lang: 'ru'
  }
]

// text-yellow-600
// text-cyan-600
// text-fuchsia-600
// text-orange-600
// text-rose-60
// text-violet-600
// text-blue-600
// text-indigo-600
// text-red-600
// text-teal-600
// text-lime-600
// text-amber-600
// text-sky-600