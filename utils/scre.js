let ScrollReveal = false

if (typeof window !== 'undefined') {
	ScrollReveal = require('scrollreveal').default
}

const scre = ScrollReveal ? ScrollReveal() : null

export default scre
