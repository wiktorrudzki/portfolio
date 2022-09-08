module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Wiktor Rudzki | Portfolio",
    description: "First ever portfolio of future frontend developer master",
    image: "https://prnt.sc/_tN9zMWNobS-",
  },
  plugins: [
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "programming",
        path: `${__dirname}/src/assets/images/my-projects/programming`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logo",
        path: `${__dirname}/src/assets/images/logo`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logoFuture",
        path: `${__dirname}/src/assets/images/logoFuture`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "graphical",
        path: `${__dirname}/src/assets/images/my-projects/graphical`,
      },
    },
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
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@styles": "src/styles",
          "@components": "src/components",
          "@images": "src/assets/images",
          "@contexts": "src/contexts",
          "@hooks": "src/hooks",
          "@dark-mode": "src/styles/dark-mode-styles",
          "@featurs": "src/features",
        },
        extensions: ["js", "css"],
      },
    },
    "gatsby-plugin-image",
    `gatsby-transformer-sharp`,
  ],
};
