const config = require("./config")

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    pathPrefix,
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    keywords: config.keywords,
    logo: config.siteLogo,
    headline: config.siteHeadline,
    siteLanguage: config.siteLanguage,
    ogLanguage: config.ogLanguage,
    author: config.author,
    twitter: config.userTwitter,
    facebook: config.ogSiteName,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "photos",
        path: `${__dirname}/content/photos`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "news",
        path: `${__dirname}/content/news`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "startImages",
        path: `${__dirname}/content/slider-images`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#91fcca`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/logos/aretha.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
  ],
}
