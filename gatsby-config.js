module.exports =  {
  siteMetadata: {
    description: "Personal page of Martin Mullins",
    locale: "en",
    showThemeLogo: true,
    title: "PossibleNull - Martin Mullins",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")('classic')),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: 'content/',
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MM`,
        short_name: `MM`,
        start_url: `/`,
        background_color: `#efefef`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
     },
  ],
}
