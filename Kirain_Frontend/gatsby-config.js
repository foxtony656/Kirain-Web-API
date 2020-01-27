const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
	path: activeEnv === 'development' ? `.dev.env` : '.env'
})

module.exports = {
	siteMetadata: {
		title: `kirain`,
		description: `kirain`,
		author: `@kirain`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-no-sourcemaps',
			options: {
				// enable this plugin for production builds!
				disable: process.env.NODE_ENV !== 'production'
			}
		},
		{ resolve: `gatsby-plugin-material-ui` },
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `kirain`,
				short_name: `kirain`,
				start_url: `/`,
				background_color: `#424242`, // for web app only
				theme_color: `#424242`, // for web app only
				display: 'standalone',
				icon: `src/assets/favicon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-root-import',
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-141248203-1'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets`,
				ignore: [`**/\.*`] // ignore files starting with a dot
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 100
			}
		}
	]
}
