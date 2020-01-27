import React, { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField'

import { Typography, Fab, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({}))

export default function TextLabeler() {
	const classes = useStyles()
	const [coding, setCoding] = useState('')

	const handleChange = e => {
		const value = e.target.value
		setCoding(value)
	}

	return (
		<>
			<Typography variant={'h1'} align={'center'} paragraph={true}>
				这个礼包里面有一万五千的钻石，可以在商场购买一切武器大礼包，基本在新用户里面就无敌了。
			</Typography>
			<TextField
				label='Coding'
				multiline
				rows='4'
				variant='outlined'
				value={coding}
				onChange={handleChange}
			/>
		</>
	)
}
