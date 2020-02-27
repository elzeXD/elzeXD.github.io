const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// Will be called when new node created
module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Only make slug if the type of the node is markdown remark
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    // Create node field
    createNodeField({
      name: `slug`,
      node,
      value: value,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Make blog pages
  const blogs = res.data.allMarkdownRemark.edges
  blogs.forEach(({ node }) => {
    createPage({
      path: `${node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
