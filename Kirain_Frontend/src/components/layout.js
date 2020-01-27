import { Container } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import InstallIcon from '@material-ui/icons/GetApp'
import HomeIcon from '@material-ui/icons/Home'
import TarotIcon from '@material-ui/icons/HowToVote'
import MenuIcon from '@material-ui/icons/Menu'
import ShareIcon from '@material-ui/icons/Share'
import TranslateIcon from '@material-ui/icons/Translate'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { Link as GatsbyLink } from 'gatsby'
import React, { useState } from 'react'
import Brand from 'src/assets/logo.svg'
import QRCodeImage from 'src/assets/qr-code-en.svg'
import SEO from 'src/components/seo'
import theme from 'src/utils/theme'
import { ErrorBoundary } from 'src/utils/helper'

export const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	brand: {
		height: 70
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	appBar: {
		backgroundColor: theme.palette.background.nav,
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	menuButton: {
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth
	},
	QRCode: {
		width: '40px'
	},
	main: {
		width: '100%'
	},
	content: {
		paddingTop: theme.spacing(1)
	}
}))

function SideNavList() {
	const menu = [
		{ text: 'About', to: `/about`, icon: <HomeIcon /> },
		{ text: 'Tasks', to: `/task`, icon: <TarotIcon /> },
		{ text: 'Install', to: `/install`, icon: <InstallIcon /> },
		{ text: 'Help', to: `/share`, icon: <ShareIcon /> }
	]
	return (
		<List component={'ul'}>
			{menu.map(item => (
				<Link component={GatsbyLink} key={item.to} to={item.to}>
					<ListItem button component={'div'}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItem>
				</Link>
			))}
		</List>
	)
}

function Layout({ container, bottomBar, children, title, hideTitle = false }) {
	const classes = useStyles()
	const [mobileOpen, setMobileOpen] = useState(false)
	const [anchorEl, setAnchorEl] = React.useState(null)

	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen)
	}

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<SideNavList />
		</div>
	)

	function handleClick(event) {
		setAnchorEl(event.currentTarget)
	}

	function handleClose() {
		setAnchorEl(null)
	}

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<CssBaseline />

				<AppBar position='fixed' color={'inherit'} className={classes.appBar}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='Open drawer'
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<GatsbyLink className={classes.brand} to='/'>
							<img src={Brand} alt='logo' height='80' />
						</GatsbyLink>
						<IconButton aria-label='Change Language' aria-haspopup='true' onClick={handleClick}>
							<TranslateIcon />
						</IconButton>
						<Menu
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem component={GatsbyLink} to={'/'}>
								中文
							</MenuItem>
							<MenuItem component={GatsbyLink} to={'/en'}>
								English
							</MenuItem>
						</Menu>

						{/* <img className={classes.QRCode} src={QRCodeImage} alt='QR code' /> */}
					</Toolbar>
				</AppBar>

				<nav className={classes.drawer}>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation='css'>
						<Drawer
							container={container}
							variant='temporary'
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
							ModalProps={{
								keepMounted: true // Better open performance on mobile.
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation='css'>
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant='permanent'
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>

				<main className={classes.main}>
					<div className={classes.toolbar} />
					<section className={classes.content}>
						<SEO title={title} keywords={[title]} />
						<Container>
							<ErrorBoundary>{children}</ErrorBoundary>
						</Container>
					</section>
				</main>

				{bottomBar && (
					<AppBar
						position='fixed'
						color={'inherit'}
						className={classes.bottomBar}
						style={{
							top: 'auto',
							bottom: 0
						}}
					>
						{bottomBar}
					</AppBar>
				)}
			</div>
		</ThemeProvider>
	)
}

export default Layout
