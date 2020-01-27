import { useState, useEffect } from 'react'
import { isBrowser } from './helper'

export const useFetch = url => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url)
			const json = await response.json()
			setData(json)
			setLoading(false)
		}
		fetchData()
	}, [])

	return { loading, data }
}

export function useWindowSize() {
	function getSize() {
		return {
			width: isBrowser ? window.innerWidth : undefined,
			height: isBrowser ? window.innerHeight : undefined
		}
	}

	const [windowSize, setWindowSize] = useState(getSize)

	useEffect(() => {
		if (!isBrowser) {
			return false
		}

		function handleResize() {
			setWindowSize(getSize())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}) // Empty array ensures that effect is only run on mount and unmount

	return { windowSize, isMobile: windowSize.width < 600 }
}

export function useKeyboardEvent(keyStr, callback) {
	// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
	// supports key combos

	const triggers = keyStr.split(' ')
	const [keys, setKeys] = useState(triggers) // keys to press

	useEffect(() => {
		const handleKeyDown = function(event) {
			const index = keys.findIndex(e => e === event.key)
			if (index !== -1) {
				if (keys.length <= 1) {
					callback()
					// callback may unmount the component and skip the key up handler
					// reset keys to press to start fresh
					setKeys(triggers)
				} else {
					setKeys(keys => [...keys.slice(0, index), ...keys.slice(index + 1)])
				}
			}
		}

		const handleKeyUp = function(event) {
			if (event.key in triggers && !(event.key in keys)) {
				setKeys(keys => [...keys, event.key])
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		window.addEventListener('keyup', handleKeyUp)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [callback, keys, triggers])
}

export function useLocalStorage(key, initialValue) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = isBrowser && window.localStorage.getItem(key)
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			// If error also return initialValue
			console.log(error)
			return initialValue
		}
	})

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = value => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore = value instanceof Function ? value(storedValue) : value
			// Save state
			setStoredValue(valueToStore)
			// Save to local storage
			if (isBrowser) {
				window.localStorage.setItem(key, JSON.stringify(valueToStore))
			}
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error)
		}
	}

	return [storedValue, setValue]
}

export function useDialog() {
	const [isOpen, setIsOpen] = useState(false)
	const openDialog = () => setIsOpen(true)
	const closeDialog = () => setIsOpen(false)
	const toggleDialog = () => setIsOpen(!isOpen)

	return {
		isOpen,
		openDialog,
		closeDialog,
		toggleDialog
	}
}
