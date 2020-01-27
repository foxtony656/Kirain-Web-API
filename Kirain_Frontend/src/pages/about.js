import React from 'react'
import ReactDOM from "react-dom";
import { Component } from "react";
import Layout from 'src/components/layout'
import { Button, CardContent, CardHeader } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import MailIcon from '@material-ui/icons/Mail'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	emailLink: {
		textDecoration: 'none',
		color: 'orange'
	}
}))


const AboutPage = () => {
	const classes = useStyles()

	return (
		<Layout title='App 介绍'>
			<CardContent className={classes.description}>
				<Typography variant={'h1'} paragraph={true}>
					Meet Our Global Team
				</Typography>
				<Typography variant={'body1'} paragraph={true}>
					Kirain is a fast-developing company and our team members are always ready to provide you best
					service internationally in 24 hrs.
				</Typography>
				<Typography variant={'body1'} paragraph={true}>
					Kirain continues to expand in North America, opens operational branches in Detroit, Toronto, Seattle
					and Boston.
				</Typography>
				<Typography variant={'body1'} paragraph={true}>
					<Button variant={'outlined'} color={'primary'}>
						<MailIcon />
						<a className={classes.emailLink} href='mailto:yitao.hu@kirain.com'>
							Email
						</a>
					</Button>
				</Typography>



			</CardContent>
		</Layout>
	)
}




export default AboutPage
