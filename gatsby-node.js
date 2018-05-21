const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const pages = [];
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(
      graphql(
        `
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
    `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        // Create blog posts pages.
        result.data.allMarkdownRemark.edges.forEach(edge => createPage({
          path: edge.node.fields.slug,
          component: blogPost,
          context: {
            slug: edge.node.fields.slug,
          }
        }));
      })
    )
  })
}


// Adds a 'slug' to node.field prop
// See: https://www.gatsbyjs.org/docs/migrating-from-v0-to-v1/#create-slugs-for-markdown-files
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: 'slug', value: slug });
  }
};
