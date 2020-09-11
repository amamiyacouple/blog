const { url } = require("inspector");

module.exports = {
  siteMetadata: {
    title: `バリキャリ夫婦雨宮のブログ`,
    description: `パワーカップルの資産運用/語学/仕事/転職/婚活を発信`,
    author: `@amamiya_couple`,
    siteUrl: `https://amamiyacouple.work/`,
    social: [
      {
        name: 'Twitter Husband',
        url: 'https://twitter.com/amamiya_couple',  
      },
      {
        name: 'Twitter Wife',
        url: 'https://twitter.com/amamiya_wife',  
      },
    ]
  },
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-theme-blog',
      options: {
        basePath: '/blog',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://amamiyacouple.work/`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt', // 追加
      options: {
        host: 'https://amamiyacouple.work/',
        sitemap: 'https://amamiyacouple.work/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `information`,
        path: `${__dirname}/src/content/information`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-basic-bootstrap`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FF5A36`,
        theme_color: `#FF5A36`,
        display: `minimal-ui`,
        icon: `src/images/icon_couple.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
