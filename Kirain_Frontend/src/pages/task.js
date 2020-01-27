import React, { useState, useEffect } from 'react'
import Layout from 'src/components/layout'
import { Button, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFetch } from '../utils/hooks'

const useStyles = makeStyles(theme => ({
	emailLink: {
		textDecoration: 'none',
		color: 'white'
	}
}))

const TaskPage = () => {
	const classes = useStyles()
	return (
		<Layout title='App 介绍'>
			<CardContent className={classes.description}>
				<Task></Task>
			</CardContent>
		</Layout>
	)
}

const getTextUrl = 'https://hxd3eog44b.execute-api.ca-central-1.amazonaws.com/default/kirainMock'

function Task() {
	const [message, setMessage] = useState('')
	const { loading, data } = useFetch(getTextUrl)
	useEffect(() => {
		if (data) {
			console.log(data)
			setMessage(data.text)
		}
	}, [data])

	const getText = async () => {
		const response = await (await fetch(getTextUrl)).json()
		const json = JSON.parse(response)
		setMessage(json.text)
	}
	return (
		<div>
			<Button onClick={getText}>Get Task</Button>
			<Typography variant='body1' paragraph>
				{message}
			</Typography>
		</div>
	)
}
export default TaskPage
