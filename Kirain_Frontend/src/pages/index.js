import { Fab, Grid, Typography, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CreateIcon from '@material-ui/icons/Create'
import JoinIcon from '@material-ui/icons/DirectionsRun'
import TarotIcon from '@material-ui/icons/HowToVote'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'src/components/layout'
import ConfigTable from '../components/config/ConfigTable'
import TextLabeler from '../components/TextLabeler'

const useStyles = makeStyles(theme => ({
	white: {
		color: 'white'
	},
	thoughts: {
		padding: theme.spacing(0.2),
		color: '#4fc3f7'
	},
	bonds: {
		padding: theme.spacing(0.2),
		color: '#ff9800'
	}
}))

const sampleConfig = {
	title: 'Avalon',
	config: [
		{ name: 'task 1', count: 1 },
		{
			name: 'task 2',
			count: 1
		},
		{
			name: 'task 3',
			count: 1
		},
		{
			name: 'task 4',
			count: 1
		},
		{
			name: 'task 5',
			count: 1
		}
	]
}

const IndexPage = () => {
	const classes = useStyles()

	const getText = async () => {
		// const response = await (await fetch(getTextUrl)).json()
		// const json = JSON.parse(response)
		// setMessage(json.text)
	}

	const bottomBar = (
		<Box display='flex' justifyContent='space-evenly' mb={1}>
			<Fab variant='extended' color={'secondary'} className={classes.white} onClick={getText}>
				Submit
			</Fab>

			<Fab variant='extended' color={'primary'} className={classes.white} onClick={getText}>
				Get New Text
			</Fab>
		</Box>
	)

	return (
		<div>
			<Helmet>
				{/*Add to home screen for Safari on iOS.*/}
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-stage-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='kirain' />
				{/*Add to home screen for Chrome on Android. Fallback for manifest.json*/}
				<meta name='mobile-web-app-capable' content='yes' />
				{/*Add to home screen for Microsoft.*/}
				<meta name='msapplication-starturl' content='/' />
			</Helmet>

			<Layout title={'Home'} hideTitle={true} bottomBar={bottomBar}>
				<Typography variant={'h1'} align={'center'} paragraph={true}></Typography>
				{/* <ConfigTable config={sampleConfig} /> */}
				<TextLabeler />
			</Layout>
		</div>
	)
}

export default IndexPage
