import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedSectionProps {
	children: React.ReactNode
	id?: string
	className?: string
}

export default function AnimatedSection({
	children,
	id,
	className,
}: AnimatedSectionProps) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })

	return (
		<section id={id} className={className} ref={ref}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
			>
				{children}
			</motion.div>
		</section>
	)
}
