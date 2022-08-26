module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        //eslint-disable-next-line
        fonts: ["Josefin Sans:300,400,700"],
        display: "swap",
      },
    },
    "gatsby-plugin-fontawesome-css",
  ],
};
