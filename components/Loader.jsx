import anime from 'animejs'
import { useEffect, useState } from 'react'
import { IconLoader } from './icons'

function Loader({ endLoading }) {
	const [isMounted, setIsMounted] = useState(false)

	const animate = () => {
		const loader = anime.timeline({ complete: () => endLoading() })

		loader
			.add({
				targets: '#logo circle',
				delay: 300,
				duration: 1500,
				easing: 'easeInOutQuart',
				strokeDashoffset: [anime.setDashoffset, 0],
			})
			.add({
				targets: '#logo #L',
				duration: 700,
				easing: 'easeInOutQuart',
				opacity: 1,
			})
			.add({
				targets: '#logo',
				delay: 500,
				duration: 300,
				easing: 'easeInOutQuart',
				opacity: 0,
				scale: 0.1,
			})
			.add({
				targets: '.loader',
				duration: 200,
				easing: 'easeInOutQuart',
				opacity: 0,
				zIndex: -1,
			})
	}

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 10)
		animate()
		return () => clearTimeout(timeout)
	}, [])

	return (
		<div className="loader">
			<div className="fixed inset-0 w-full h-full bg-black z-50 flex justify-center items-center">
				<div className={`w-max transition-all duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
					<IconLoader />
				</div>
			</div>
		</div>
	)
}

export default Loader
