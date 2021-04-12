module.exports =  {
  siteMetadata: {
    description: "Personal page of John Doe",
    locale: "en",
    showThemeLogo: true,
    title: "John Doe",
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
  ],
}
