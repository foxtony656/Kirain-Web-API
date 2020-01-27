/* eslint-disable no-underscore-dangle */

// Icons

// https://material.io/tools/icons/?style=baseline
// import HomeIcon from '@material-ui/icons/Home'

// https://materialdesignicons.com/
// import { ContentCopy } from 'mdi-material-ui'

// https://fontawesome.com/

// Be aware of the difference between @material-ui/core/styles and @material-ui/core/styles. The latter contains the default theme.

import { createMuiTheme } from '@material-ui/core/styles/index'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ff9800'
		},
		secondary: {
			main: '#03a9f4'
		}
	},
	typography: {
		useNextVariants: true,
		fontSize: 16,
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontSize: 25,
			fontWeight: 700
		},
		h2: {
			fontSize: 20,
			fontWeight: 500
		}
	},
	mixins: {
		toolbar: {
			justifyContent: 'space-around',
			paddingLeft: 0,
			paddingRight: 0
		}
	}
})

export default theme
