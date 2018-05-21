module.exports = {
  siteMetadata: {
    title: 'Lightning in a Bot',
    siteUrl: 'https://lightninginabot.com',
    description: 'The latest Lightning in a Bot posts coming at you from Los Angeles, California.',
    clients: [
      {
        name: 'The Social Life',
        image: 'the_social_life.png',
        url: 'https://thesociallife.com/',
      },
      {
        name: 'Shoptiques',
        image: 'shoptiques.png',
        url: 'https://www.shoptiques.com/',
      },
      {
        name: 'United Way of Greater Los Angeles',
        image: 'uwgla.png',
        url: 'https://www.unitedwayla.org/',
      },
      {
        name: 'Wellen',
        image: 'wellen.png',
        url: 'https://wellensurf.com/',
      },
      {
        name: 'Ergon',
        image: 'ergon.png',
        url: 'http://www.ergon-bike.com/',
      },
      {
        name: 'Pour This',
        image: 'pour_this.png',
        url: 'https://www.pour-this.com/',
      },
      {
        name: 'Western Rise',
        image: 'western_rise.png',
        url: 'https://westernrise.com/',
      },
    ],
    productData: [
      {
        name: 'Shoppy Bot',
        description: 'Shoppy Bot is a Shopify app that gives store owners a unique data reporting solution. The project\'s goal was to give businesses a more user-friendly and time-saving user experience over traditional reporting tools by leveraging state-of-the-art natural language understanding to process report requests.',
        url: 'https://shoppybot.com',
        image: 'shoppybot.png',
        tags: ['shoppy bot', 'natural language understanding'],
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
    {
      resolve: `gatsby-plugin-feed`
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
