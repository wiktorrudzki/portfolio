module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Wiktor Rudzki | Portfolio",
    description: "First ever portfolio of future frontend developer master",
    image: "https://prnt.sc/_tN9zMWNobS-",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Josefin Sans:300,400,700"],
        display: "swap",
      },
    },
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
