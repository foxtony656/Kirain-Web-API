import React from 'react'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import { Typography } from '@material-ui/core'

const NotFoundPage = () => {
	return (
		<Layout>
			<SEO title='404: Not found' />
			<Typography variant={'h3'}>Address not found.</Typography>
		</Layout>
	)
}

export default NotFoundPage
