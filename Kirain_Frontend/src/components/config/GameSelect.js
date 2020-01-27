/* eslint-disable no-use-before-define */
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import configTemplates from './configTemplates'

const useStyles = makeStyles(theme => ({
	formControl: {
		width: 200,
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}))

export default function GameSelect({ config, setConfig }) {
	const classes = useStyles()
	const inputLabel = React.useRef(null)
	const [labelWidth, setLabelWidth] = React.useState(0)
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth)
	}, [])

	const handleChange = event => {
		setConfig(event.target.value)
	}

	return (
		<FormControl variant='outlined' className={classes.formControl}>
			<InputLabel ref={inputLabel} id='demo-simple-select-outlined-label'>
				Select Game
			</InputLabel>
			<Select value={config} onChange={handleChange} labelWidth={labelWidth}>
				{configTemplates.map((configTemplate, index) => (
					<MenuItem key={index} value={configTemplate}>
						{configTemplate.title}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
