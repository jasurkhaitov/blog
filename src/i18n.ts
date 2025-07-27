import i18n, { type InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './lang/en.json'
import ru from './lang/ru.json'
import uz from './lang/uz.json'

const resources = {
	en: { translation: en },
	ru: { translation: ru },
	uz: { translation: uz },
}

import type { CustomDetector } from 'i18next-browser-languagedetector'

const pathDetector: CustomDetector = {
	name: 'customPath',
	lookup() {
		const path = window.location.pathname
		const segments = path.split('/')
		const firstSegment = segments[1]

		const supportedLanguages = ['en', 'ru', 'uz']
		if (supportedLanguages.includes(firstSegment)) {
			return firstSegment
		}

		return undefined
	},
}

const languageDetector = new LanguageDetector()
languageDetector.addDetector(pathDetector)

const options: InitOptions = {
	resources,
	fallbackLng: 'en',
	debug: process.env.NODE_ENV === 'development',
	interpolation: {
		escapeValue: false,
	},
	detection: {
		order: ['customPath', 'localStorage', 'navigator', 'htmlTag'],
		caches: ['localStorage'],
	},
}

i18n.use(languageDetector).use(initReactI18next).init(options)

export default i18n
