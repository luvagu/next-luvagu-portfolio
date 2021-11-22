function Loader() {
	return (
		<svg
			id='loader'
			className='block w-24 h-24 my-0 mx-auto select-none text-yellow-500'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'
			fill='none'
		>
			<title>Loader Logo</title>
			<g>
				<g
					id='L'
					className='opacity-0'
					transform='translate(12.000000, 4.000000)'
				>
					<line
						x1='30'
						x2='30'
						y1='30'
						y2='60'
						stroke='currentColor'
						strokeLinecap='round'
						strokeWidth='5'
						strokeLinejoin='round'
					/>
					<line
						x1='30'
						x2='50'
						y1='60'
						y2='60'
						stroke='currentColor'
						strokeLinecap='round'
						strokeWidth='5'
						strokeLinejoin='round'
					/>
				</g>
				<circle cx='50' cy='50' r='40' stroke='currentColor' strokeWidth='5' />
			</g>
		</svg>
	)
}

export default Loader
