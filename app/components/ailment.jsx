export default function Quote({ name, description}) {
	return (
		<>
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					{name}
				</h1>
				<p className="mt-6 text-lg leading-8 text-white">
					- {description} 
				</p>
			</div>
		</>
	)
}