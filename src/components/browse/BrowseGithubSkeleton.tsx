const Skeleton = ({ className = '', ...props }) => {
	return (
		<div
			className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}
			{...props}
		/>
	)
}

const BrowseGithubSkeleton = () => {
	return (
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
			{[...Array(6)].map((_, idx) => (
				<div
					key={idx}
					className='border border-gray-200 dark:border-gray-700 rounded-xl p-4'
				>
					<Skeleton className='h-32 w-full rounded-md mb-4' />

					<Skeleton className='h-6 w-3/4 mb-3' />

					<Skeleton className='h-4 w-full mb-2' />
					<Skeleton className='h-4 w-2/3 mb-4' />

					<div className='flex flex-wrap items-center gap-4'>
						<div className='flex items-center gap-1'>
							<Skeleton className='w-4 h-4' />
							<Skeleton className='h-4 w-16' />
						</div>
						<div className='flex items-center gap-1'>
							<Skeleton className='w-4 h-4' />
							<Skeleton className='h-4 w-4' />
						</div>
						<div className='flex items-center gap-1'>
							<Skeleton className='w-4 h-4' />
							<Skeleton className='h-4 w-4' />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default BrowseGithubSkeleton
