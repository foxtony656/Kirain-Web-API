import React from 'react'
import { graphql, Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles/index'
import Layout from 'src/components/layout'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography/index'
import Icon from '@material-ui/core/Icon/index'
import Card from '@material-ui/core/Card'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	description: {},
	layout: {
		display: 'flex'
	},
	typography: {
		color: 'white'
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.common.white,
		margin: theme.spacing(1),
		background: 'linear-gradient(to right, #ff6f00, #ff9100)'
	}
}))

const InstallPage = () => {
	const classes = useStyles()
	return (
		<div>
			<Layout title='App 安装'>
				<Typography variant={'body2'} paragraph>
					kirain 使用前沿技术，可以直接通过浏览器打开，保存书签之后就可以离线使用。
					当然安装App可以获得最佳体验，请选择你的环境查看具体步骤。
				</Typography>
				<div className={classes.layout}>
					{[
						{ to: '/install/ios', text: '苹果' },
						{ to: '/install/android', text: '安卓' },
						{ to: '/install/computer', text: '电脑' }
					].map(item => (
						<Button
							key={item.to}
							variant={'contained'}
							className={classes.link}
							component={Link}
							to={item.to}
						>
							{item.text}
							{/*<Typography variant={'h5'} className={classes.typography}>*/}
							{/*  安卓Android*/}
							{/*</Typography>*/}
						</Button>
					))}
				</div>
			</Layout>
		</div>
	)
}

export default InstallPage
