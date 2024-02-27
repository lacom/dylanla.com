const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve('./src/templates/blog-post.js');
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.log(result.errors);
    throw result.errors;
  }
  // Create blog posts pages.
  result.data.allMarkdownRemark.edges.forEach(edge => createPage({
    path: edge.node.fields.slug,
    component: blogPost,
    context: {
      slug: edge.node.fields.slug,
    }
  }));
}


// Adds a 'slug' to node.field prop
// See: https://www.gatsbyjs.org/docs/migrating-from-v0-to-v1/#create-slugs-for-markdown-files
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    // Add slug as a field on the node.
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
