import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'src/components/layout'
import { CardContent } from '@material-ui/core'
import Card from '@material-ui/core/Card/index'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography/index'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { DotsVertical } from 'mdi-material-ui'

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

function ComputerInstallPage({ data }) {
	const classes = useStyles()

	return (
		<Layout title={'电脑安装'}>
			<Typography variant={'subtitle1'}>以下是安装到Windows的步骤</Typography>
			<div className={classes.root}>
				<CardContent className={classes.description}>
					<Stepper orientation='vertical' activeStep={-1}>
						<Step>
							<StepLabel>打开chrome浏览器</StepLabel>
						</Step>
						<Step>
							<StepLabel>
								点击菜单
								<DotsVertical />
							</StepLabel>
						</Step>
						<Step>
							<StepLabel>选择“安装kirain...”</StepLabel>
						</Step>
						<Step>
							<StepLabel>确认安装</StepLabel>
						</Step>
						<Step>
							<StepLabel>查看安装完成效果</StepLabel>
						</Step>
					</Stepper>
				</CardContent>
				<Card>
					<CardContent className={classes.android}>
						<Img fluid={data.install.childImageSharp.fluid} />
					</CardContent>
				</Card>
				<Card>
					<CardContent className={classes.android}>
						<Img fluid={data.confirmation.childImageSharp.fluid} />
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

export default ComputerInstallPage

export const query = graphql`
	query {
		installed: file(relativePath: { eq: "app-install/windows/installed.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		confirmation: file(relativePath: { eq: "app-install/windows/confirmation.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		install: file(relativePath: { eq: "app-install/windows/install.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
