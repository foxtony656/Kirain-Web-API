import React from 'react'

export const isBrowser = typeof window === 'object'

export function getRandomIntInclusive(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomSequence(sequenceLength, choices) {
	// index starts with 0
	const array = Array.from(Array(choices).keys())
	let currentIndex = array.length
	let temporaryValue, randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}
	return array.slice(0, sequenceLength)
}

export function getDate(locale = 'zh-CN') {
	const today = new Date()
	const dd = String(today.getDate()).padStart(2, '0')
	const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
	const weekday = new Intl.DateTimeFormat(locale, {
		weekday: 'short'
	}).format(today)
	// return `${yyyy}.${mm}.${dd}`
	return `${mm}.${dd} ${weekday}`
}

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong. Try exit or contact hi@kirain </h1>
		}

		return this.props.children
	}
}
