import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({}))

export default function Template_Only() {
	const classes = useStyles()

	return <TextField />
}
