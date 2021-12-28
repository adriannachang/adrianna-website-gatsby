module.exports = {
  siteMetadata: {
    title: 'Adrianna Chang',
    author: 'Adrianna Chang',
    description: "Adrianna's Personal Website, built using Gatsby JS",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon-16x16.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
