export default function Footer() {
	return (
		<footer className='border-t py-6 md:py-8'>
			<p className='text-center text-sm text-muted-foreground font-mono px-0 xs:px-4 md:text-left'>
				&copy; {new Date().getFullYear()} Jasur | jasurkhaitov.uz
			</p>
		</footer>
	)
}
