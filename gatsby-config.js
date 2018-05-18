module.exports = {
  siteMetadata: {
    title: 'Lightning in a Bot',
    productData: [
      {
        name: 'Shoppy Bot',
        description: 'A friendly chat bot to manage your Shopify data',
        url: 'https://shoppybot.com',
        releaseDate: 'Oct 2016',
        image: 'shoppybot.png'
      },
    ],
    serviceData: [
      {
        name: 'Web Development',
        description: '',
        subServices: [
          {
            name: 'Node.js'
          },
          {
            name: 'Python / Django'
          },
          {
            name: 'React'
          }
        ],
        url: '',
        image: ''
      }
    ]
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
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
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
