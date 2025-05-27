// Client-side dictionary implementation
const dictionaries = {
  en: async () => (await import("./en.json")).default,
  es: async () => (await import("./es.json")).default,
  fr: async () => (await import("./fr.json")).default,
  ru: async () => (await import("./ru.json")).default,
  uz: async () => (await import("./uz.json")).default,
}

export type Locale = keyof typeof dictionaries
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
