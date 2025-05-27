import "server-only"

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
  fr: () => import("./fr.json").then((module) => module.default),
}

export type Locale = keyof typeof dictionaries
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
