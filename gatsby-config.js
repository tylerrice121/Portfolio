require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My_Portfolio",
  },
  plugins: [`gatsby-plugin-styled-components`,`gatsby-plugin-smoothscroll`],
};
