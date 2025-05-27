import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './components/theme-provider'
import BrowsePage from './pages/BrowsePage'

const getBrowserLanguage = (): string => {
	const browserLang = navigator.language.split('-')[0]
	return ['en', 'es', 'fr', 'ru', 'uz'].includes(browserLang)
		? browserLang
		: 'en'
}

function App() {
	const [language, setLanguage] = useState<string>(
		localStorage.getItem('preferredLanguage') || getBrowserLanguage()
	)

	useEffect(() => {
		localStorage.setItem('preferredLanguage', language)
	}, [language])

	return (
		<ThemeProvider defaultTheme='system' storageKey='ui-theme'>
			<Routes>
				<Route
					path='/:lang'
					element={<BrowsePage setLanguage={setLanguage} />}
				/>
				<Route path='*' element={<Navigate to={`/${language}`} replace />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
