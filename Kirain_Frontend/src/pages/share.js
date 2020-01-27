import { Button, CardContent, CardHeader, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import copy from 'copy-to-clipboard'
import { ContentCopy } from 'mdi-material-ui'
import React from 'react'
import Layout from 'src/components/layout'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const useStyles = makeStyles(theme => ({
	card: {
		margin: theme.spacing(1)
	},
	domain: {
		display: 'flex'
	},
	copyButton: {
		lineHeight: 'normal'
	}
}))
const SharePage = () => {
	const classes = useStyles()
	const { qr } = useStaticQuery(
		graphql`
			query {
				qr: file(relativePath: { eq: "qr-code.jpg" }) {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid_withWebp_noBase64
						}
					}
				}
			}
		`
	)

	return (
		<Layout title={'App share'}>
			<Typography variant='h1'>Coming soon</Typography>
		</Layout>
	)
}

export default SharePage
