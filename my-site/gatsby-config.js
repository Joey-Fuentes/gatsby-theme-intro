module.exports = {
  siteMetadata: {
    description: "Personal page of Joe Fuentes",
    locale: "en",
    title: "Joe Fuentes",
    formspreeEndpoint: "https://formspree.io/f/xpznqqjk",
  },
  plugins: [
    {
      resolve: "@joe-fuentes/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "warm-red",
      },
    },
  ],
}
