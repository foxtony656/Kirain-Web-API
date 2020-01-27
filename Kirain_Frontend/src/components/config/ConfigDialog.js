import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'
import ConfigTable from './ConfigTable'
import GameSelect from './GameSelect'

export default function ConfigDialog({ closeDialog, isOpen, startGame, ...stateProps }) {
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Dialog fullScreen={fullScreen} open={isOpen} onClose={closeDialog} aria-labelledby='config-dialog'>
			<DialogTitle id='responsive-dialog-title'>Game Config</DialogTitle>
			<Box display='flex'>
				<Box ml={2}>
					<Button autoFocus onClick={closeDialog} color='primary' variant='outlined'>
						Close
					</Button>
				</Box>
				<Box ml={2}>
					<Button autoFocus onClick={startGame} color='primary' variant='contained'>
						Start
					</Button>
				</Box>
			</Box>
			<DialogContent>
				<DialogContentText>
					Choose among pre-configured templates or simply customize your own.
				</DialogContentText>

				<GameSelect {...stateProps} />
				<ConfigTable {...stateProps} />
			</DialogContent>
		</Dialog>
	)
}
