function Logo() {
	return (
		<svg
			id="logo"
			className="w-full h-full transition-all duration-300 select-none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			viewBox="0 0 86 86"
			fill="none"
		>
			<title>Logo</title>
			<g transform="translate(-8.000000, -2.000000)">
				<g transform="translate(11.000000, 5.000000)">
					<line
						x1="31"
						x2="31"
						y1="25"
						y2="55"
						stroke="currentColor"
						strokeLinecap="round"
						strokeWidth="5"
						strokeLinejoin="round"
					/>
					<line
						x1="31"
						x2="51"
						y1="55"
						y2="55"
						stroke="currentColor"
						strokeLinecap="round"
						strokeWidth="5"
						strokeLinejoin="round"
					/>

					<circle
						stroke="currentColor"
						strokeWidth="5"
						cx="40"
						cy="40"
						r="40"
					/>
				</g>
			</g>
		</svg>
	)
}

export default Logo
