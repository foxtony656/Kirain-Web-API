import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'src/components/layout'
import { makeStyles } from '@material-ui/core/styles'
import { CardContent } from '@material-ui/core'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { GoogleChrome } from 'mdi-material-ui'
import Card from '@material-ui/core/Card'
import Img from 'gatsby-image'

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 400,
		flexGrow: 1
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		height: 50,
		paddingLeft: theme.spacing(1) * 4,
		backgroundColor: theme.palette.background.default
	},
	img: {
		height: 255,
		maxWidth: 400,
		overflow: 'hidden',
		display: 'block',
		width: '100%'
	}
}))

function AndroidInstallPage({ data }) {
	const classes = useStyles()

	return (
		<Layout title={'安卓安装'}>
			<div className={classes.root}>
				<CardContent className={classes.description}>
					<Stepper orientation='vertical' activeStep={-1}>
						<Step>
							<StepLabel>
								在安卓手机自带的Chrome浏览器
								<GoogleChrome />
								里前往网站kirain
							</StepLabel>
						</Step>
						<Step>
							<StepLabel>点击“快速安装”或者“添加到主屏幕”</StepLabel>
						</Step>
						<Step>
							<StepLabel>确认添加Add</StepLabel>
						</Step>
						<Step>
							<StepLabel>查看安装完成效果</StepLabel>
						</Step>
					</Stepper>
				</CardContent>
				<Card>
					<CardContent className={classes.android}>
						<Img fluid={data.prompt.childImageSharp.fluid} />
					</CardContent>
				</Card>
				<Card>
					<CardContent className={classes.android}>
						<Img fluid={data.addToHomeScreen.childImageSharp.fluid} />
					</CardContent>
				</Card>
				<Card>
					<CardContent className={classes.android}>
						<Img fluid={data.installed.childImageSharp.fluid} />
					</CardContent>
				</Card>
			</div>
		</Layout>
	)
}

export default AndroidInstallPage

export const query = graphql`
	query {
		installed: file(relativePath: { eq: "app-install/android/installed.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		prompt: file(relativePath: { eq: "app-install/android/prompt.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		addToHomeScreen: file(relativePath: { eq: "app-install/android/addToHomeScreen.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
