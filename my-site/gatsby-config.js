module.exports = {
  siteMetadata: {
    description: "Personal page of Joe Fuentes",
    locale: "en",
    title: "Joe Fuentes",
  },
  plugins: [
    {
      resolve: "@rohs/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
