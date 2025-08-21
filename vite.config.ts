import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		sourcemap: false,
		chunkSizeWarningLimit: 1000,
		outDir: 'dist',
		target: 'esnext',
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (id.includes('react')) {
							return 'react'
						}
						if (id.includes('lodash')) {
							return 'lodash'
						}
						if (id.includes('chart.js')) {
							return 'chartjs'
						}
						return 'vendor'
					}
				},
				entryFileNames: 'assets/[name].[hash].js',
				chunkFileNames: 'assets/[name].[hash].js',
				assetFileNames: 'assets/[name].[hash].[ext]',
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
